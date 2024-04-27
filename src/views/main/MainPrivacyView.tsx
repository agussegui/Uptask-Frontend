import MainFooter from "@/components/main/MainFooter";
import MainHeader from "@/components/main/MainHeader";

export default function MainPrivacyView() {
    return (
        <>
            <MainHeader />
            <div className="flex justify-center min-h-screen mt-52">
                <div className="text-left w-1/2 container flex justify-center">
                    <div className="w-1/2">
                        <h2 className="text-4xl text-blue-800 font-medium">Política de Privacidad de UpTask</h2>
                        <h3 className="text-xl mt-10">Introducción</h3>
                        <p className="text-lg mt-4">En UpTask, valoramos tu privacidad y nos comprometemos a proteger la información personal que nos proporcionas. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tus datos personales cuando utilizas nuestro sitio web y nuestros servicios.</p>

                        <h3 className="text-xl mt-10">Información que recopilamos</h3>
                        <p className="text-lg mt-4"> Recopilamos información personal que nos proporcionas directamente cuando te registras en nuestra plataforma, completas formularios, realizas compras o nos contactas para obtener asistencia. Esta información puede incluir tu nombre, dirección de correo electrónico, dirección postal, información de pago y otra información relevante.</p>
                        <h3 className="text-xl mt-10">Uso de la información</h3>
                        <p className="text-lg mt-4"> Utilizamos la información recopilada para proporcionarte nuestros servicios, procesar tus transacciones, responder a tus consultas y brindarte asistencia técnica. También podemos utilizar tu información para fines de marketing y comunicación, como enviarte correos electrónicos promocionales sobre nuestros productos y servicios.</p>

                        <h3 className="text-xl mt-10">Seguridad de la información</h3>
                        <p className="text-lg mt-4">Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración o destrucción. Sin embargo, debes tener en cuenta que ninguna transmisión de datos por Internet o almacenamiento electrónico es completamente segura, y no podemos garantizar la seguridad absoluta de tu información.</p>

                        <h3 className="text-xl mt-10">Compartir de la información</h3>
                        <p className="text-lg mt-4 mb-8">No vendemos, alquilamos ni compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para proporcionarte nuestros servicios o cumplir con la ley.</p>

                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}
