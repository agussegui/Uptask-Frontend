
export default function MainForm() {
    return (
      <>
        <h2 className="text-5xl font-bold items-center flex justify-center mt-10 text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-violet-500 ">
          Contacto
        </h2>
        <p className="text-2xl font-light mt-5 flex justify-center">
          Aquí puedes Contactarnos
        </p>
        <form className="mt-14 space-y-5 rounded-lg my-20 bg-white shadow-lg p-20">
          <div className="relative">
            <label
              htmlFor="base-input"
              className="block mb-2 text-lg font-medium  text-gray-900 "
            >
              Ingrese su Nombre
            </label>
            <input
              type="text"
              id="base-input"
              className="w-full px-4 py-2 pr-10 text-sm border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-white m-4 "
              placeholder="Valentin Gonzalez"
            ></input>
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Ingrese su Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 pr-10 text-sm border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-white m-4 "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Ingrese su Mensaje
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 pr-10 text-sm border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out bg-gray-50 m-4 "
              placeholder="Escribe un comentario"
              rows={8}
            ></textarea>
          </div>  
            <button
              type="button"
              className="w-full mt-8 text-white bg-gradient-to-r from-violet-500 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none    focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-lg"
            >
              Enviar
            </button>
          
        </form>
      </>
    );
}
