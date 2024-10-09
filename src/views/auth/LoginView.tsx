import { useForm } from "react-hook-form";
import { UserLoginForm } from "@/types/index";
import ErrorMessage from "@/components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function LoginView() {
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: authenticateUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      //llevar al usuario al pagina de crear Proyectos
      toast.success("Iniciando Sesión");
      navigate("/");
    },
  });

  const handleLogin = (formData: UserLoginForm) => mutate(formData);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-xl p-6">
          <h2 className="text-4xl font-semibold text-blue-600 text-center mb-4 flex flex-start">
            Iniciar Sesión
          </h2>
          <p className="text-lg flex-start flex text-center text-gray-400 mb-2">
            ¿No tienes cuenta?
            <Link
              to={"/auth/register"}
              className="text-blue-600 hover:underline ml-4"
            >
              Crear Una Cuenta
            </Link>
          </p>
          <p className="text-lg flex-start flex text-center text-gray-400 ">
            Tomará menos de un minuto
          </p>

          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-9 mt-16"
            noValidate
          >
            <div className="relative">
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
              <label className="mb-1 text-xl font-semibold text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-4 "
                {...register("email", {
                  required: "El Email es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
            </div>
            <div className="relative">
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
              <label className=" text-xl font-semibold text-gray-600">
                Password
              </label>

              <input
                type="password"
                placeholder="Password de Registro"
                className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-4 "
                {...register("password", {
                  required: "El Password es obligatorio",
                })}
              />
            </div>

            <input
              type="submit"
              value="Iniciar Sesión"
              className="bg-blue-600 hover:bg-blue-700 hover:transition-colors w-full p-3  text-white font-black  text-xl cursor-pointer"
            />
          </form>

          <nav className="p-6 flex flex-col space-y-4 justify-center">
            <Link
              to={"/auth/forgot-password"}
              className="text-center text-blue-600 hover:underline hover:transition-colors"
            >
              ¿Olvidaste la contreseña? Reestablecer
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
