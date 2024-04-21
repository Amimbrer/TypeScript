(() => {
    // Never significa que la funcion nunca puede terminar exitosamente, osea debe lanzar una excepción 
    const abc = (message: string):never => {
        throw new Error(message)
    }

    abc('Auxilio me desmayo')
    console.log('Nunca llegará aquí')
})()