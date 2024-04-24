import MainFooter from "@/components/main/MainFooter";
import MainHeader from "@/components/main/MainHeader";
import { Link } from "react-router-dom";

import{ useState, useEffect } from "react";
import MainService from "@/components/main/MainService";
import MainBenefits from "@/components/main/MainBenefits";

const wordsList: string[] = ["Tarea", "Proyecto", "Manager", "Colaborador"];

export default function MainView() {

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
              }, 1000); // Espera 3 segundos antes de cambiar de palabra
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
        <MainHeader />
        <main className="bg-gray-100 mt-20">
          <div className="w-full flex justify-between min-h-screen">
            <div className="w-7\12  m-52">
              <h1 className="font-bold text-7xl text-gray-600 mb-16 max-w-2xl">
                Cualquier{" "}
                <span className="uppercase text-violet-700">
                  {wordsList[currentWordIndex].slice(0, currentLetterIndex)}
                </span>{" "}
                que necesites.
              </h1>
              <Link
                className="text-blue-700 text-2xl hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-12 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 hover:transition-colors"
                to={"/"}
              >
                Empezar ahora
              </Link>
            </div>
            <div className=" w-5/12">
              ``
              <img src="logo.png" alt="" className="w-full" />
            </div>
          </div>
        </main>
        <MainBenefits/>

        <MainService />
        <MainFooter />
      </>
    );
}
