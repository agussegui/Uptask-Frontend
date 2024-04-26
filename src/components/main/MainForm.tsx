
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
          <div className="mb-5 ">
            <label
              htmlFor="base-input"
              className="block mb-2 text-lg font-medium  text-gray-900 dark:text-white"
            >
              Ingrese su Nombre
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500            focus:border-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white     my-4          dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>

            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Ingrese su Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500          focus:border-blue-500    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white    my-4     dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />

            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Ingrese su Mensaje
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300                focus:ring-blue-500     focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white my-4dark:focus:ring-blue-500     dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              rows={8}
            ></textarea>
            <button
              type="button"
              className="w-full mt-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none    focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-lg"
            >
              Enviar
            </button>
          </div>
        </form>
      </>
    );
}
