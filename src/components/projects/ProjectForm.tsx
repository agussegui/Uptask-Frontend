import { UseFormRegister, FieldErrors } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { ProjectFormData } from "types";


type ProjectFormProps = {
    register: UseFormRegister<ProjectFormData>
    errors: FieldErrors<ProjectFormData>
}

export default function ProjectForm({errors, register} : ProjectFormProps) {
    return (
        <>
            <div className="relative">
                <label htmlFor="projectName" className="mb-1 text-xl font-semibold text-gray-600">
                    Nombre del Proyecto
                </label>
                <input
                    id="projectName"
                    className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-4"
                    type="text"
                    placeholder="Nombre del Proyecto"
                    {...register("projectName", {
                        required: "El Titulo del Proyecto es obligatorio",
                    })}
                />

                {errors.projectName && (
                    <ErrorMessage>{errors.projectName.message}</ErrorMessage>
                )}
            </div>

            <div className="relative">
                <label htmlFor="clientName" className="mb-1 text-xl font-semibold text-gray-600">
                    Nombre Cliente
                </label>
                <input
                    id="clientName"
                    className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-100 m-4"
                    type="text"
                    placeholder="Nombre del Cliente"
                    {...register("clientName", {
                        required: "El Nombre del Cliente es obligatorio",
                    })}
                />

                {errors.clientName && (
                    <ErrorMessage>{errors.clientName.message}</ErrorMessage>
                )}
            </div>

            <div className="relative">
                <label htmlFor="description" className="mb-1 text-xl font-semibold text-gray-600">
                    Descripción
                </label>
                <textarea
                    id="description"
                    className="w-full px-4 py-2 pr-10 text-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-200 m-4"
                    placeholder="Descripción del Proyecto"
                    {...register("description", {
                        required: "Una descripción del proyecto es obligatoria"
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>
        </>
    )
}