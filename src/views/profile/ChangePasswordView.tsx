import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/ErrorMessage";
import { UpdateCurrentPasswordForm } from "@/types/index";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "@/api/ProfileAPI";
import { toast } from "react-toastify";

export default function ChangePasswordView() {
  const initialValues: UpdateCurrentPasswordForm = {
    current_password: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: changePassword,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
    },
  });

  const password = watch("password");
  const handleChangePassword = (formData: UpdateCurrentPasswordForm) =>
    mutate(formData);

  return (
    <>
      <div className="mx-auto max-w-xl">
        <h1 className="text-5xl font-semibold text-gray-900 text-center mb-4 flex flex-start">Cambiar Password</h1>
        <p className="text-xl font-light text-gray-500 mt-5">
          Utiliza este formulario para cambiar tu password
        </p>

        <form
          onSubmit={handleSubmit(handleChangePassword)}
          className="space-y-9 pt-10"
          noValidate
        >
          <div className="relative">
            <label
              className="mb-1 text-xl font-semibold text-gray-600"
              htmlFor="current_password"
            >
              Password Actual
            </label>
            <input
              id="current_password"
              type="password"
              placeholder="Password Actual"
              className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-violet-500 transition duration-200 ease-in-out bg-gray-100 m-4"
              {...register("current_password", {
                required: "El password actual es obligatorio",
              })}
            />
            {errors.current_password && (
              <ErrorMessage>{errors.current_password.message}</ErrorMessage>
            )}
          </div>

          <div className="relative">
            <label className="mb-1 text-xl font-semibold text-gray-600" htmlFor="password">
              Nuevo Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Nuevo Password"
              className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-violet-500 transition duration-200 ease-in-out bg-gray-100 m-4"
              {...register("password", {
                required: "El Nuevo Password es obligatorio",
                minLength: {
                  value: 8,
                  message: "El Password debe ser mínimo de 8 caracteres",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password_confirmation"
              className="mb-1 text-xl font-semibold text-gray-600"
            >
              Repetir Password
            </label>

            <input
              id="password_confirmation"
              type="password"
              placeholder="Repetir Password"
              className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-violet-500 transition duration-200 ease-in-out bg-gray-100 m-4"
              {...register("password_confirmation", {
                required: "Este campo es obligatorio",
                validate: (value) =>
                  value === password || "Los Passwords no son iguales",
              })}
            />
            {errors.password_confirmation && (
              <ErrorMessage>
                {errors.password_confirmation.message}
              </ErrorMessage>
            )}
          </div>

          <input
            type="submit"
            value="Cambiar Password"
            className="bg-violet-600 w-full p-3 text-white uppercase font-bold hover:bg-violet-700 cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
