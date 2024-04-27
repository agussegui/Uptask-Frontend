import MainFooter from "@/components/main/MainFooter";
import MainHeader from "@/components/main/MainHeader";

export default function MainAboutView() {
    return (
        <>
            <MainHeader />
            <div className="flex justify-center min-h-screen mt-52">
                <div className="text-left w-1/2 container flex justify-center">
                    <div className="w-1/2">
                        <h2 className="text-4xl text-blue-800 font-medium">Términos y Condiciones de UpTask</h2>
                        <h3 className="text-xl mt-10">Introducción</h3>
                        <p className="text-lg mt-4">Bienvenido a UpTask. Antes de utilizar nuestros servicios, por favor lee detenidamente estos términos y condiciones. Al acceder y utilizar nuestro sitio web y nuestros servicios, aceptas estar legalmente obligado por estos términos y condiciones.</p>
                        <h3 className="text-xl mt-10">Uso del Sitio Web</h3>
                        <ul>
                            <li className="mt-4 text-lg list-disc">Al utilizar nuestro sitio web, aceptas cumplir con todas las leyes y regulaciones locales, nacionales e internacionales aplicables.</li>
                            <li className="mt-4 text-lg list-disc">No debes utilizar nuestro sitio web de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el rendimiento del mismo.</li>
                            <li className="mt-4 text-lg list-disc">No debes intentar acceder a áreas restringidas de nuestro sitio web, ni a sistemas o redes conectadas a nuestro sitio web, sin autorización.</li>
                        </ul>

                        <h3 className="text-xl mt-10">Registro de Cuenta</h3>
                        <ul>
                            <li className="mt-4 text-lg list-disc">Para acceder a ciertas funciones y servicios de UpTask, es posible que necesites registrarte y crear una cuenta.</li>
                            <li className="mt-4 text-lg list-disc">Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran en tu cuenta.</li>
                            <li className="mt-4 text-lg list-disc">Debes proporcionar información precisa y completa al registrarte en UpTask y actualizarla periódicamente para mantenerla actualizada.</li>
                        </ul>

                        <h3 className="text-xl mt-10">Propiedad Intelectual</h3>
                        <ul>
                            <li className="mt-4 text-lg list-disc">Todo el contenido, software y recursos disponibles en UpTask están protegidos por leyes de derechos de autor y otras leyes de propiedad intelectual.</li>

                            <li className="mt-4 text-lg list-disc">No puedes reproducir, distribuir, modificar, transmitir, crear obras derivadas, o utilizar de ninguna otra manera el contenido de UpTask sin nuestro consentimiento previo por escrito.</li>
                        </ul>

                        <h3 className="text-xl mt-10">Cambios en los Términos y Condiciones</h3>
                        <p className="text-lg my-4">Nos reservamos el derecho de realizar cambios en estos términos y condiciones en cualquier momento y sin previo aviso. Cualquier cambio significativo será notificado a través de nuestro sitio web o por correo electrónico.</p>

                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}
