import type { ConfirmToken, NewPasswordForm } from "../../types";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updatePasswordWithToken } from "@/api/AuthAPI";


type NewPasswordFormProps = {
    token: ConfirmToken['token']
}

export default function NewPasswordForm({token} : NewPasswordFormProps) {
    const navigate = useNavigate()
    const initialValues: NewPasswordForm = {
        password: '',
        password_confirmation: '',
    }
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues: initialValues });

    const {mutate} = useMutation({
        mutationFn: updatePasswordWithToken,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
            navigate('/auth/login')
        }
    })

    const handleNewPassword = (formData: NewPasswordForm) => {
        const data = {
            formData,
            token
        } 
        mutate(data)
    }

    const password = watch('password');

    return (
        <>
        
            <form
                onSubmit={handleSubmit(handleNewPassword)}
                className="space-y-9 mt-16"
                noValidate
            >

                <div className="flex flex-col gap-5">
                    <label
                        className="mb-1 text-xl font-semibold text-gray-600"
                    >Password</label>

                    <input
                        type="password"
                        placeholder="Password de Registro"
                        className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-violet-500 transition duration-200 ease-in-out bg-gray-100 "
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

                <div className="flex flex-col gap-5">
                    <label
                        className="mb-1 text-xl font-semibold text-gray-600"
                    >Repetir Password</label>

                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repite Password de Registro"
                        className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-violet-500 transition duration-200 ease-in-out bg-gray-100 "
                        {...register("password_confirmation", {
                            required: "Repetir Password es obligatorio",
                            validate: value => value === password || 'Los Passwords no son iguales'
                        })}
                    />

                    {errors.password_confirmation && (
                        <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    value='Establecer Password'
                    className="bg-blue-600 hover:bg-blue-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
                />
            </form>
        </>
    )
}