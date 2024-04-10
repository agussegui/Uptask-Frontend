import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectsDetailsView from "./views/projects/ProjectsDetailsView";

export default function router() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path='/' element={<DashboardView/>} index/>
                <Route path='/projects/create' element={<CreateProjectView/>} />
                <Route path='/projects/:projectId' element={<ProjectsDetailsView/>} />
                <Route path='/projects/:projectId/edit' element={<EditProjectView/>} />

            </Route>
        </Routes>
    </BrowserRouter>  
    
  )
}
