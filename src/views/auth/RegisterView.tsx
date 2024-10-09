import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "@/types/index";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "@/components/ErrorMessage";
import { Link } from "react-router-dom";
import { createAccount } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function RegisterView() {
  
  const initialValues: UserRegistrationForm = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

  const {mutate} = useMutation({
    mutationFn: createAccount,
    onError(error) {
        toast.error(error.message)   
    },
    onSuccess: (data) =>{
        toast.success(data)
        reset()
    }
  })

  const password = watch('password');

  const handleRegister = (formData: UserRegistrationForm) => {
    mutate(formData)
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-xl p-6">
          <h2 className="text-4xl font-semibold text-blue-600 text-center mb-4 flex flex-start">Crear Cuenta</h2>
          <p className="text-lg flex-start flex text-center text-gray-400 mb-2">¿Ya Tienes Cuenta?
            <Link to={'/auth/login'} className="text-blue-600 hover:underline ml-4">Inciar Sesión</Link>
          </p>
          <p className="text-lg flex-start flex text-center text-gray-400 ">Tomará menos de un minuto

          </p>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-9 mt-16 "
            noValidate
          >
            <div className="relative">
              <label
                className=" text-xl font-semibold text-gray-600"
                htmlFor="email"
              >Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-2"
                {...register("email", {
                  required: "El Email de registro es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>
            
            <div className="relative">
              <label
                className=" text-xl font-semibold text-gray-600"
              >Nombre</label>
              <input
                type="name"
                placeholder="Nombre de Registro"
                className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-2"
                {...register("name", {
                  required: "El Nombre de usuario es obligatorio",
                })}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </div>
            
            <div className="relative">
              <label
                className=" text-xl font-semibold text-gray-600"
              >Password</label>

              <input
                type="password"
                placeholder="Password de Registro"
                className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-2"
                {...register("password", {
                  required: "El Password es obligatorio",
                  minLength: {
                    value: 8,
                    message: 'El Password debe ser mínimo de 8 caracteres'
                  }
                })}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
            
            <div className="relative">
              <label
                className=" text-xl font-semibold text-gray-600"
              >Repetir Password</label>

              <input
                id="password_confirmation"
                type="password"
                placeholder="Repite Password de Registro"
                className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-2"
                {...register("password_confirmation", {
                  required: "Repetir Password es obligatorio",
                  validate: value => value === password || 'Los Passwords no son    iguales'
                })}
              />

              {errors.password_confirmation && (
                <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
              )}
            </div>
            
            <input
              type="submit"
              value='Registrarme'
              className="bg-blue-600 hover:bg-blue-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
            />
          </form>
            
          <nav className="p-6 flex flex-col space-y-4 justify-center">
            <Link 
              to={'/auth/forgot-password'}
              className="text-center text-blue-600 hover:underline  hover:transition-colors"
            >¿Olvidaste la contreseña? Reestablecer</Link>
          </nav>
        </div>
      </div>          
    </>
  )
}