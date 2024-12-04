import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export default function AuthLayout() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isSliding, setIsSliding] = useState(false);
    const images = [
        {
            src: "../diana.png",
            alt: "target 1"
        },
        {
            src: "../calendar-auth.png",
            alt: "target 2"
        },
        {
            src: "../task-authp.png",
            alt: "target 3"
        }
    ]

    // Efecto para cambiar de imagen automáticamente cada 3 segundos
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsSliding(true); // Inicia la transición
            setTimeout(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsSliding(false); // Finaliza la transición después de un corto retraso
            }, 500); // Duración de la transición
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo cuando se desmonta el componente
    }, [images.length]);

    const handleImageChange = (index: number): void => {
        setIsSliding(true); // Inicia la transición al cambiar de imagen manualmente
        setTimeout(() => {
            setActiveIndex(index);
            setIsSliding(false); // Finaliza la transición
        }, 500);
    };

    return (
        <>
            <div className="flex h-screen">
                {/* Panel izquierdo con imagen */}
                <div className="bg-gray-800 w-1/2 flex-col justify-between p-10 text-white hidden lg:flex">
                    {/* Logo a la izquierda */}
                    <div className="flex items-start">
                        <div className="w-64 ">
                            <Link to={'/main'}>
                                <img
                                    src="../logo.svg"
                                    alt="Logouptask"
                                />   
                            </Link>
                        </div>
                    </div>

                    {/* Imagen activa en grande con animación */}
                    <div className="flex flex-col items-center justify-center mt-24">
                        <div className={`w-2/4 transition-transform duration-500 ease-in-out transform ${isSliding ? "-translate-x-full" : ""}`}>
                            <img
                                src={images[activeIndex].src}
                                alt={images[activeIndex].alt}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Título y párrafo debajo de la imagen */}
                    <div className="flex flex-col items-center ">
                        <h1 className="text-4xl font-bold">Bienvenido!</h1>
                        <p className="mt-4">
                            Optimiza tu productividad con Uptask, la herramienta ideal para gestionar tus tareas.
                        </p>
                    </div>

                    {/* Puntos de navegación que controlan las imágenes */}
                    <div className="flex flex-col items-center justify-center relative w-full h-full">
                        <div className="w-2/4 h-3/4 relative overflow-hidden">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleImageChange(index)}
                                    className={`absolute w-full h-full top-0 left-0 object-contain transition-opacity   duration-500 ease-in-out ${
                                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                ></span>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleImageChange(index)}
                                className={`w-4 h-4 rounded-full mr-2 cursor-pointer transition-transform duration-300 ${
                                    index === activeIndex ? 'bg-white scale-125' : 'bg-white opacity-50'
                                }`}
                            ></span>
                        ))}
                    </div>
                </div>

                {/* Panel derecho con el formulario */}
                <div className="w-full lg:w-1/2">
                    <div className="">
                        {/* Aquí se renderizará el formulario */}
                        <Outlet />
                    </div>
                </div>
            </div>

            <footer className="bg-gray-200 text-gray-800 py-4 bottom-0 w-full">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <p className="text-center font-bold text-gray-800"> Todos los derechos reservados {new Date().getFullYear()}</p>
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
