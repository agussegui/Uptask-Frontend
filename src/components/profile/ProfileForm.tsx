import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { User, UserProfileForm } from "@/types/index"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "@/api/ProfileAPI"
import { toast } from "react-toastify"

type ProfileFormProps = {
    data: User
}

export default function ProfileForm({ data } : ProfileFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<UserProfileForm>({ defaultValues: data })

    const queryClient = useQueryClient() 
    const {mutate} = useMutation({
        mutationFn: updateProfile,
        onError:(error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({queryKey: ['user']})
        }
    })

    const handleEditProfile = (formData: UserProfileForm) => mutate(formData)

    return (
        <>
            <div className="mx-auto max-w-xl">
                <h1 className="text-5xl font-semibold text-gray-900 text-center mb-4 flex flex-start">Mi Perfil</h1>
                <p className="text-xl font-light text-gray-500 mt-5">Aquí puedes actualizar tu información</p>

                <form
                    onSubmit={handleSubmit(handleEditProfile)}
                    className="space-y-9 pt-10"
                    noValidate
                >
                    <div className="relative">
                        <label
                            className="mb-1 text-xl font-semibold text-gray-600"
                            htmlFor="name"
                        >Nombre</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Tu Nombre"
                            className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-violet-500 transition duration-200 ease-in-out bg-gray-100 m-4"
                            {...register("name", {
                                required: "Nombre de usuario es obligatoro",
                            })}
                        />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </div>

                    <div className="relative">
                        <label
                            className="mb-1 text-xl font-semibold text-gray-600"
                            htmlFor="password"
                        >E-mail</label>
                        <input
                            id="text"
                            type="email"
                            placeholder="name@flowbite.com"
                            className="w-full px-4 py-2 text-md border-b-2 border-gray-300 focus:outline-none focus:border-violet-500 transition duration-200 ease-in-out bg-gray-100 m-4"
                            {...register("email", {
                                required: "EL e-mail es obligatorio",
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
                        value='Guardar Cambios'
                        className="bg-violet-600 w-full p-3 text-white uppercase font-bold hover:bg-violet-700 cursor-pointer transition-colors"
                    />
                </form>
            </div>
        </>
    )
}