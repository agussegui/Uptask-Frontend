import Logo from "@/components/Logo"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
export default function AuthLayout() {

    return (
        <>
            <div className="bg-gray-800 min-h-screen flex justify-center">
                <div className="p-10 lg:py-20 mx-auto w-[500px]">
                    <Logo/>
                    <div className="mt-12 shadow-lg">
                        <Outlet />
                    </div>
                </div>
            </div>

            <footer className="bg-white text-gray-800 py-4 fixed bottom-0 w-full">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <p className="text-center font-bold text-slate-800"> Todos los derechos reservados {new Date().getFullYear()}</p>
                    </div>    
                </div>
            </footer>
            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false} 
            />
            
        </>
    )
}
