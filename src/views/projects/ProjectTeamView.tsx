
import AddMemberModal from "@/components/team/AddMemberModel";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProjectTeamView() {

    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!

    return (
        <>
            <h1 className="text-5xl font-bold">Administrar Equipo</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">Administra el equipo de trabajo para el Proyecto</p>

            <nav className="my-5 flex gap-3">
                <button
                    type="button"
                    className="bg-violet-500 hover:bg-violet-900 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors" 
                    onClick={() => navigate(location.pathname + '?addMember=true')}
                >Agregar Colaborador</button>

                <Link 
                    to={`/projects/${projectId}`}
                    className="bg-fuchsia-400 hover:bg-fuchsia-700 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                >Volver a Proyecto</Link>
            </nav>

            <AddMemberModal/>
        </>
    )
}
