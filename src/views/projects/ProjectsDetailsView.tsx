import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectAPI"
import AddTaskModal from "@/components/tasks/AddTaskModal"
import TaskList from "@/components/tasks/TaskList"
import EditTaskData from "@/components/tasks/EditTaskData"
import TaskModalDetails from "@/components/tasks/TaskModalDetails"

export default function ProjectsDetailsView() {

    const navigate = useNavigate()

    const params = useParams()
    const projectId = params.projectId! 

    const { data, isLoading, isError } = useQuery({
        queryKey: ["project", projectId],
        queryFn: () => getProjectById(projectId), //Function for doing the consult to the API by ID
        retry: false
    });

    if(isLoading) return 'Cargando...'
    if(isError) return <Navigate to= '/404'/>    
    if(data) return (
        <>
            <h1 className="text-5xl font-bold">{data.projectName}</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">{data.description}</p>

            <nav className="my-5 flex gap-3">
                <button
                    type="button"
                    className="bg-violet-500 hover:bg-violet-900 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors" 
                    onClick={() => navigate(location.pathname + '?newTask=true')}
                >Agregar Tarea</button>

                <Link 
                    to={'team'}
                    className="bg-fuchsia-400 hover:bg-fuchsia-700 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                >Colaboladores</Link>
            </nav>
            <TaskList
                tasks={data.tasks}
            />
            <AddTaskModal/>
            <EditTaskData/>
            <TaskModalDetails/>
        
        </>
    )
}
