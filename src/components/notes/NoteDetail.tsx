import { deleteNote } from "@/api/NoteAPI";
import { useAuth } from "@/hooks/useAuth"
import { Note } from "@/types/index"
import { formatDate } from "@/utils/utils"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react"
import { MdDeleteForever  } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

type NoteDetailProps = {
    note: Note
}

export default function NoteDetail({note}: NoteDetailProps) {

    const { data, isLoading } = useAuth()
    //Con esto hago que si es el autor del que creo la nota puede eliminarla
    const canDelete = useMemo(() => data?._id === note.createdBy._id, [data])
    const params = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    

    const projectId = params.projectId!
    const taskId = queryParams.get('viewTask')!

    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn: deleteNote,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            queryClient.invalidateQueries({queryKey: ['task', taskId]})
        }
    })
    if(isLoading) return 'Cargando...'

    return (
        <div className="p-3 flex justify-between items-center">
            <div>

                <p>
                    {note.content} Por: <span className="font-bold">{note.createdBy.name}</span>
                </p>
                <p className="font-light text-slate-600 text-md mt-2">
                    {formatDate(note.createdAt)}
                </p>

            </div>
            {canDelete && (
                <button
                    type="button"
                    onClick={() => mutate({projectId, taskId, noteId: note._id})}
                >
                    <MdDeleteForever 
                        className="text-4xl text-slate-500 hover:text-slate-700 hover:transition-colors"
                    />
                
                </button>
            )}
            
        </div>
    )
}
