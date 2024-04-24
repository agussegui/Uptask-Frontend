import Logo from "@/components/Logo";
import NotFound from "@/views/404/NotFound";

export default function NotFoundLayout() {
    return (
        <>
            <div className="bg-gray-800 flex justify-start p-2">
                <div className=" w-64 ">
                    <Logo/>
                </div>
                
            </div>
            <div className="flex justify-center"><NotFound/></div>
        </>
    )
}
