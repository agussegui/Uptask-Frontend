import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "../../types";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "@/components/ErrorMessage";
import { forgotPassword } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function ForgotPasswordView() {
    const initialValues: ForgotPasswordForm = {
      email: ''
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues });

    const {mutate} = useMutation({
        mutationFn: forgotPassword,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        }
    })

    const handleForgotPassword = (formData: ForgotPasswordForm) => mutate(formData)


    return (
        <>
          <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-xl p-6">
              <h1 className="text-4xl font-semibold text-blue-600 text-center mb-8 flex flex-start ">Reestablecer Contraseña</h1>
              <p className="text-md font-normal text-gray-400 text-center mb-4 flex flex-start">
                ¿Olvidaste tu password? Coloca tu Email y reestablece tu password
              </p>
              <form
                onSubmit={handleSubmit(handleForgotPassword)}
                className="space-y-9 mt-16"
                noValidate
              >
                <div className="relative">
                  <label
                    className="text-xl font-semibold text-gray-600"
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
                
                <input
                  type="submit"
                  value='Enviar Instrucciones'
                  className="bg-blue-600 hover:bg-blue-700 w-full p-3 text-white font-black  text-xl cursor-pointer"
                />
              </form>
                
              <nav className="p-6 flex flex-col space-y-4">
                <Link
                  to='/auth/login'
                  className="text-center text-blue-600 hover:underline  hover:transition-colors"
                >
                  ¿Ya tienes cuenta? Iniciar Sesión
                </Link>
                
                <Link
                  to='/auth/register'
                  className="text-center text-blue-600 hover:underline  hover:transition-colors"
                >
                  ¿No tienes cuenta? Crea una
                </Link>
              </nav>
            </div>
          </div>    
        </>
    )
}