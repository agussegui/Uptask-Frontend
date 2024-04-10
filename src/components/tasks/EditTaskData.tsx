import { useLocation, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getTaskById } from "@/api/TaskAPI"
import EditTaskModal from "./EditTaskModal"

export default function EditTaskData() {

    const params = useParams()
    const projectId = params.projectId!

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)//Busca la url con el ID
    const taskId = queryParams.get('editTask')!//se trae el unico valor de la URL (el ID)
    
    const {data} = useQuery({
        queryKey: ['task', taskId],
        queryFn: () => getTaskById({projectId, taskId}),
        enabled: !!taskId //de esta forma se puede convertir un valor a true si tiene algo o a false si no tiene algo.Si no hay un touch ID Enable va a estar como false y esta consulta no se hace.
    })

    if(data) return <EditTaskModal/>
}
