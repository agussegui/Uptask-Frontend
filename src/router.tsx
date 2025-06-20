import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectsDetailsView from "./views/projects/ProjectsDetailsView";
import LoginView from "./views/auth/LoginView";
import AuthLayout from "./layouts/AuthLayout";
import RegisterView from "./views/auth/RegisterView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCodeView from "./views/auth/RequestNewCodeView";
import ForgotPasswordView from "./views/auth/ForgotPassword";
import NewPasswordView from "./views/auth/NewPasswordView";
import ProjectTeamView from "./views/projects/ProjectTeamView";
import ProfileView from "./views/profile/ProfileView";
import ChangePasswordView from "./views/profile/ChangePasswordView";
import ProfileLayout from "./layouts/ProfileLayout";
import NotFound from "./views/404/NotFound";
import NotFoundLayout from "./layouts/NotFoundLayout";
import MainLayout from "./layouts/MainLayout";
import MainCookiesView from "./views/main/MainCookiesView";
import MainPrivacyView from "./views/main/MainPrivacyView";
import MainAboutView from "./views/main/MainAboutView";
import MainView from "./views/main/MainView";

export default function router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/main" element={<MainView />} />
        </Route>
        <Route path="/main/about" element={<MainAboutView />} />
        <Route path="/main/privacy" element={<MainPrivacyView />} />
        <Route path="/main/cookies" element={<MainCookiesView />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} index />
          <Route path="/projects/create" element={<CreateProjectView />} />
          <Route path="/projects/:projectId" element={<ProjectsDetailsView />}/>
          <Route path="/projects/:projectId/edit" element={<EditProjectView />}/>
          <Route path="/projects/:projectId/team" element={<ProjectTeamView />}/>
          <Route element={<ProfileLayout />}>
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/profile/password" element={<ChangePasswordView />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/auth/confirm-account" element={<ConfirmAccountView />}/>
          <Route path="/auth/request-code" element={<RequestNewCodeView />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordView />}/>
          <Route path="/auth/new-password" element={<NewPasswordView />} />
        </Route>

        <Route element={<NotFoundLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
