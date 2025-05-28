import { Link, useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import { Project, ProjectFormData } from "@/types/index";
import { useForm } from "react-hook-form";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { updateProject } from "@/api/ProjectAPI";
import { toast } from "react-toastify";

type EditProjectFormProps = {
    data: ProjectFormData
    projectId: Project['_id'] 
}

export default function EditProjectForm({data, projectId} : EditProjectFormProps) {

    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: {
        projectName: data.projectName,
        clientName: data.clientName,
        description: data.description
    }})
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn: updateProject,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['projects']}) //Va a ser un query nuevo, va a sincronizar el state y vamos a tener los datos actualizados con el servidor
            queryClient.invalidateQueries({queryKey: ["editProject", projectId]})
            toast.success(data)
            navigate('/')
            
        }
    })

    const handleForm = (formData: ProjectFormData) =>{
        const data = {
            formData,
            projectId
        }
        mutate(data)
    }

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-semibold text-gray-950 text-center mb-4 flex flex-start">Editar Proyecto</h1>
                <p className="text-2xl font-light text-gray-600 mt-5">Llena el siguiente formulario para editar el proyecto</p>

                <nav className="my-5">   
                    <Link
                        className="bg-blue-700 hover:bg-blue-900 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                        to='/'
                    >Volver a Proyectos</Link>
                </nav> 

                <form
                    className="mt-10 space-y-9"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <ProjectForm 
                        register={register}
                        errors={errors}
                    />
                    <input 
                        type="submit"
                        value='Guardar Cambios'
                        className="bg-violet-500 hover:bg-violet-800  w-full p-3 text-white uppercase rounded-md" 
                    />

                </form>
            </div>
        </>
    )
}
