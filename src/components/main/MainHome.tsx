import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const wordsList: string[] = ["Tarea", "Proyecto", "Manager"];

export default function MainHome() {

    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => {
          const wordLength = wordsList[currentWordIndex].length;
          if (prevIndex === wordLength) {
            setTimeout(() => {
              setCurrentWordIndex((prevWordIndex) =>
                prevWordIndex === wordsList.length - 1 ? 0 : prevWordIndex + 1
              );
              setCurrentLetterIndex(0);
            }, 1750); // Espera 3 segundos antes de cambiar de palabra
            return wordLength;
          } else {
            return prevIndex + 1;
          }
        });
      }, 300);

      return () => clearInterval(intervalId);
    }, [currentWordIndex, currentLetterIndex]);


    return (
      <>
        <main className="bg-gray-100 max-md:mt-52 mt-44">
          <div className="w-full flex flex-col-reverse justify-between items-center sm:flex-row relative">
            {/* Contenedor de texto */}
            <div className="w-full sm:w-7/12 my-8 sm:my-32 mx-20 text-center sm:text-left z-10">
              <h1 className="font-bold text-4xl md:text-7xl text-gray-600 mb-8 sm:mb-16 max-w-3xl">
                Cualquier{" "}
                <span className="uppercase text-violet-700">
                  {wordsList[currentWordIndex].slice(0, currentLetterIndex)}
                </span>{" "}
                que necesites.
              </h1>
              <p className="text-lg sm:text-3xl text-gray-600 font-semibold mb-6 sm:mb-12">
                Crea Proyectos y asigna Tareas para trabajar en Grupos
              </p>
              <Link
                className="text-violet-700 text-lg sm:text-2xl hover:text-white border border-violet-700 hover:bg-violet-800 focus:ring-4   focus:outline-none  focus:ring-blue-300 font-medium px-6 sm:px-12 py-2 sm:py-2.5 text-center me-2 mb-2 dark:border-blue-500   dark:text-blue-500   dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 hover:transition-colors mt-8 sm:mt-16"
                to={"/auth/register"}
              >
                Empezar ahora
              </Link>
            </div>
            {/* Imagen */}
            <div className="w-full lg:w-5/12 absolute inset-0 flex justify-center items-center lg:relative md:flex-col sm:items-start     sm:justify-start">
              <img
                src="logo.png"
                alt="Logo Uptask"
                className="w-auto  max-lg:opacity-25"
              />
            </div>
          </div>
        </main>
      </>
    );
}
