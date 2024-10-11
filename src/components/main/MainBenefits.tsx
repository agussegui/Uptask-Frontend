export default function MainBenefits() {
  return (
      <>
          <section className="bg-white py-24 mt-44">
              <div className="container mx-auto">
                  <h2 className=" text-4xl font-bold text-gray-600 dark:text-white md:text-5xl text-left">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-violet-500">
                          Beneficios de usar UpTask
                      </span>
                  </h2>
                  <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-10">
                      {/* Beneficios - Lista de Beneficios */}
                      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Primer grupo de beneficios */}
                          <div>
                              <ul className="space-y-6">
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Simplicidad</p>
                                          <p className="font-normal text-gray-800">Gestiona todos los aspectos de tus proyectos</p>
                                      </div>
                                  </li>
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Eficiencia</p>
                                          <p className="font-normal text-gray-800">Organiza tus tareas de manera eficiente</p>
                                      </div>
                                  </li>
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Colaboración</p>
                                          <p className="font-normal text-gray-800">Colabora con tu equipo mediante asignaciones de tareas</p>
                                      </div>
                                  </li>
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Seguimiento</p>
                                          <p className="font-normal text-gray-800">Monitoriza los proyectos, tareas y las notas</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          {/* Segundo grupo de beneficios */}
                          <div>
                              <ul className="space-y-6">
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Acceso</p>
                                          <p className="font-normal text-gray-800">Accede a tus proyectos desde cualquier dispositivo</p>
                                      </div>
                                  </li>
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Notificaciones</p>
                                          <p className="font-normal text-gray-800">Recibe recordatorios y plazos con notificaciones</p>
                                      </div>
                                  </li>
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Seguridad</p>
                                          <p className="font-normal text-gray-800">Protección de tus datos y privacidad</p>
                                      </div>
                                  </li>
                                  <li className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 mr-3 text-purple-600">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <div>
                                          <p className="font-bold uppercase text-gray-700 text-2xl mb-1">Soporte y Actualizaciones</p>
                                          <p className="font-normal text-gray-800">Recibe soporte técnico dedicado y actualizaciones regulares</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      {/* Imagen */}
                      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                          <img
                              src="traced-beneficio.png"
                              alt="Beneficios de UpTask"
                              className="w-full rounded-md "
                          />
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}