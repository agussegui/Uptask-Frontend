
export default function MainService() {
    return (
      <>
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl text-blue-800 font-bold text-center mb-10">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Servicio 1 */}
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <img
                  src="traced-proyecto.png"
                  alt="Servicio 1"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Gestión de Proyectos</h3>
                <p className="text-gray-700">
                  Crea proyectos, asigna tareas y colabora con tu equipo de
                  manera eficiente.
                </p>
              </div>
              {/* Servicio 2 */}
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <img
                  src="traced-TaskLogo.png"
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
                <img
                  src="traced-colaboradores.png"
                  alt="Servicio 3"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-4">
                  Gestión de Colaboradores
                </h3>
                <p className="text-gray-700">
                  Invita a colaboradores, asigna permisos y coordina el trabajo
                  en equipo de manera efectiva.
                </p>
              </div>
              {/* Servicio 4 */}
              <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <img
                  src="traced-comunicacion.png"
                  alt="Servicio 4"
                  className="mx-auto mb-4"
                />
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
        </section>
      </>
    );
}
