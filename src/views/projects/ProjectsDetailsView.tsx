import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getFullProject} from "@/api/ProjectAPI"
import AddTaskModal from "@/components/tasks/AddTaskModal"
import TaskList from "@/components/tasks/TaskList"
import EditTaskData from "@/components/tasks/EditTaskData"
import TaskModalDetails from "@/components/tasks/TaskModalDetails"
import { useAuth } from "@/hooks/useAuth"
import { isManager } from "@/utils/policies"
import { useMemo } from "react"

export default function ProjectsDetailsView() {
    const {data: user,isLoading: authLoading} = useAuth()
    const navigate = useNavigate()

    const params = useParams()
    const projectId = params.projectId! 

    const { data, isLoading, isError } = useQuery({
        queryKey: ["project", projectId],
        queryFn: () => getFullProject(projectId), //Function for doing the consult to the API by ID
        retry: false
    });

    const canEdit = useMemo(() => data?.manager === user?._id, [data, user])
    console.log(canEdit)

    if(isLoading && authLoading) return 'Cargando...'
    if(isError) return <Navigate to= '/404'/>    
    if(data && user) return (
        <>
            <h1 className="text-5xl font-bold">{data.projectName}</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">{data.description}</p>

            {isManager(data.manager, user._id) && (
                <nav className="my-5 md:flex md:gap-3 max-md:py-4">
                    <button
                        type="button"
                        className="max-lg:text-base bg-violet-500 hover:bg-violet-900 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors max-md:mb-8" 
                        onClick={() => navigate(location.pathname + '?newTask=true')}
                    >Agregar Tarea</button>

                    <Link 
                        to={'team'}
                        className="max-lg:text-base bg-fuchsia-400 hover:bg-fuchsia-700 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors "
                    >Colaboladores</Link>
                </nav>
            )}
            
            <TaskList
                tasks={data.tasks}
                canEdit={canEdit}
            />
            <AddTaskModal/>
            <EditTaskData/>
            <TaskModalDetails/>
        
        </>
    )
}
