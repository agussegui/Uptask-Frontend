import { Link, useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'
import {useMutation} from '@tanstack/react-query'
import {toast} from 'react-toastify'
import ProjectForm from "@/components/projects/ProjectForm"
import { ProjectFormData } from "@/types/index"
import { createProject } from "@/api/ProjectAPI"

export default function CreateProjectView() {

    const navigate = useNavigate()
    const initialValues : ProjectFormData = {
        projectName: "",
        clientName: "",
        description: ""
    }

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: initialValues})

    const {mutate} = useMutation({
        mutationFn: createProject,
        onError: (error) => {
            toast.error(error.message)
        }, 
        onSuccess: (data) => {
            toast.success(data)
            navigate('/')   
        }
    })

    const handleForm = async (formData : ProjectFormData) =>  mutate(formData)

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-semibold text-gray-950 text-center mb-4 flex flex-start">Crear Proyecto</h1>
                <p className="text-2xl font-light text-gray-600 mt-5">Llena el siguiente formulario para crear un proyecto</p>

                <nav className="my-8">   
                    <Link
                        className="bg-blue-700 hover:bg-blue-900 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                        to='/'
                    >Volver a Proyectos</Link>
                </nav> 

                <form
                    className="mt-10 space-y-9 "
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <ProjectForm 
                        register={register}
                        errors={errors}
                    />
                    <input 
                        type="submit"
                        value='Crear Proyecto'
                        className="bg-violet-500 w-full p-3 cursor-pointer text-white hover:bg-violet-700 uppercase rounded-md" 
                    />

                </form>
            </div>
        </>
    )
}
