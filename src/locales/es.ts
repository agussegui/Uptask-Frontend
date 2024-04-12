//marcaba ese error porque decía bueno, tú le estás pasando el estado como un string, pero estas son llaves de objeto, Entonces le cambiamos o le damos esta firma y le decimos que estos también van a ser strings
export const statusTranslations : {[key: string] : string} =  {
    pending: 'Pendiente',
    onHold: 'En Espera',
    inProgress: 'En Progreso',
    underReview: 'En Revisión',
    completed: 'Completado',
}

