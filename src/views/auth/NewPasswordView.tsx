import NewPasswordToken from "@/components/auth/NewPasswordToken"
import NewPasswordForm  from "@/components/auth/NewPasswordForm"
import { useState } from "react"
import { ConfirmToken } from "@/types/index"


export default function NewPasswordView() {

    const [token, setToken] = useState<ConfirmToken['token']>('') 
    const [isValidToken, setIsValidToken] = useState(false) 

    return (
        <>
            <h1 className="text-4xl font-black text-white text-center">Reestablecer Password</h1>
            <p className="text-xl font-light text-white mt-5 text-center">
                Ingresa el codigo que recibiste  {''}
                <span className=" text-violet-500 font-bold">Por Email</span>
            </p>
        
            {!isValidToken ? 
                <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken}/> : 
                <NewPasswordForm token={token}/>
            
            }

        </>

    )
}
