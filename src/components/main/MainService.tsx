
export default function MainService() {
    return (
      <>
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-violet-500">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Servicio 1 */}
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <div className="mt-4">
                  <img
                    src="project.jpg"
                    alt="Servicio 1"
                    className="mx-auto mb-4"
                  />
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Gestión de Proyectos</h3>
                  <p className="text-gray-700">
                    Crea proyectos, asigna tareas y colabora con tu equipo de
                    manera eficiente.
                  </p>
                </div>
              </div>
              {/* Servicio 2 */}
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <img
                  src="task.jpg"
                  alt="Servicio 2"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Gestión de Tareas</h3>
                <p className="text-gray-700">
                  Organiza tus tareas, establece fechas límite y prioridades, y
                  mantén el control de tus actividades.
                </p>
              </div>
              {/* Servicio 3 */}
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <div className="mt-4">
                  <img
                    src="comunication.jpg"
                    alt="Servicio 3"
                    className="mx-auto mb-4"
                  />
                </div>
                <div className="mt-20">
                  <h3 className="text-xl font-bold mb-4">
                    Gestión de Colaboradores
                  </h3>
                  <p className="text-gray-700">
                    Invita a colaboradores, asigna permisos y coordina el trabajo
                    en equipo de manera efectiva.
                  </p>
                </div>
              </div>
              {/* Servicio 4 */}
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <div className="">
                  <img
                    src="seguimiento.jpg"
                    alt="Servicio 4"
                    className="mx-auto mb-4"
                  />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-4">
                    Seguimiento y Comunicación
                  </h3>
                  <p className="text-gray-700">
                    Proporcionar herramientas para que los usuarios puedan
                    realizar un seguimiento del progreso del proyecto y
                    comunicarse entre ellos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
