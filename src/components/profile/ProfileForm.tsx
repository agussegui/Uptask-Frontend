import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { UserProfileForm } from "@/types/index"

type ProfileFormProps = {
    data: User
}

export default function ProfileForm({ data } : ProfileFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<UserProfileForm>({ defaultValues: data })

    const handleEditProfile = (formData: UserProfileForm) => {}

    return (
        <>
            <div className="mx-auto max-w-3xl g">
                <h1 className="text-5xl font-bold ">Mi Perfil</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Aquí puedes actualizar tu información</p>

                <form
                    onSubmit={handleSubmit(handleEditProfile)}
                    className=" mt-14 space-y-5 rounded-lg my-20 bg-white shadow-lg p-10 rounded-l"
                    noValidate
                >
                    <div className="mb-5 space-y-3">
                        <label
                            className="text-sm uppercase font-bold"
                            htmlFor="name"
                        >Nombre</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Tu Nombre"
                            className="w-full p-3  border bg-gray-100 border-gray-200 rounded-md"
                            {...register("name", {
                                required: "Nombre de usuario es obligatoro",
                            })}
                        />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </div>

                    <div className="mb-5 space-y-3">
                        <label
                            className="text-sm uppercase font-bold"
                            htmlFor="password"
                        >E-mail</label>
                        <input
                            id="text"
                            type="email"
                            placeholder="name@flowbite.com"
                            className="w-full p-3  border bg-gray-100 border-gray-200 rounded-md"
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