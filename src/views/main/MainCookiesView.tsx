import MainFooter from "@/components/main/MainFooter";
import MainHeader from "@/components/main/MainHeader";

export default function MainCookiesView() {
    return (
        <>
            <MainHeader />
            <div className="flex justify-center min-h-screen mt-52">
                <div className="text-left w-1/2 container flex justify-center">
                    <div className="w-1/2">
                        <h2 className="text-4xl text-blue-800 font-medium">Política de Cookies de UpTask</h2>
                        <h3 className="text-xl mt-10">Introducción</h3>
                        <p className="text-lg mt-4">En UpTask, estamos comprometidos a garantizar la privacidad y seguridad de la información de nuestros    usuarios. Esta p   olítica de cookies explica cómo y por qué utilizamos cookies en nuestro sitio web y cómo puedes controlar y     administrar su uso.</p>

                        <h3 className="text-xl mt-10">¿Qué son las cookies?</h3>
                        <p className="text-lg mt-4"> Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Estos archivos contienen información que se utiliza para mejorar tu experiencia de navegación, como recordar tus preferencias y configuraciones.</p>
                        <h3 className="text-xl mt-10">Tipos de cookies que utilizamos</h3>
                        <ul>
                            <li className="mt-4 text-lg list-disc">Cookies esenciales: Estas cookies son necesarias para que nuestro sitio web funcione correctamente. Nos permiten recordar tus preferencias de idioma, iniciar sesión en tu cuenta y realizar transacciones seguras.</li>
                            <li className="mt-4 text-lg list-disc">Cookies de rendimiento: Estas cookies recopilan información sobre cómo utilizas nuestro sitio web, como las páginas que visitas y los enlaces en los que haces clic. Utilizamos esta información para mejorar la funcionalidad y el rendimiento de nuestro sitio.</li>
                            <li className="mt-4 text-lg list-disc">Cookies de funcionalidad: Estas cookies se utilizan para recordar tus preferencias y personalizar tu experiencia de usuario. Por ejemplo, podemos recordar tu nombre de usuario y mostrar contenido relevante para ti.</li>
                            <li className="mt-4 text-lg list-disc">Cookies de publicidad: Utilizamos cookies de terceros para mostrar anuncios personalizados en nuestro sitio web y en otros sitios web que visites. Estas cookies se utilizan para rastrear tus hábitos de navegación y mostrar anuncios que sean relevantes para ti.</li>
                        </ul>

                        <h3 className="text-xl mt-10">Cambios en nuestra política de cookies</h3>
                        <p className="text-lg my-4">Nos reservamos el derecho de realizar cambios en esta política de cookies en cualquier momento. Cualquier cambio significativo será notificado a través de nuestro sitio web o por correo electrónico.</p>

                    </div>
                </div>
            </div>

            <MainFooter />
        </>
    )
}
