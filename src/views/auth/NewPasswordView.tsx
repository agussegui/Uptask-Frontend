import NewPasswordToken from "@/components/auth/NewPasswordToken"
import NewPasswordForm  from "@/components/auth/NewPasswordForm"
import { useState } from "react"
import { ConfirmToken } from "@/types/index"


export default function NewPasswordView() {

    const [token, setToken] = useState<ConfirmToken['token']>('') 
    const [isValidToken, setIsValidToken] = useState(false) 

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="w-full max-w-2xl p-6">
                    <h1 className="text-4xl font-semibold text-blue-600 text-center mb-4 flex flex-start">Reestablecer Password</h1>
                    <p className="text-lg flex-start flex text-center text-gray-400 mb-2">
                        Ingresa el codigo que recibiste  {''}
                        <span className=" ml-2 text-blue-500 font-bold">Por Email</span>
                    </p>

                    {!isValidToken ? 
                        <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken}/> : 
                        <NewPasswordForm token={token}/>
                    
                    }
                </div>
            </div>
        </>

    )
}
