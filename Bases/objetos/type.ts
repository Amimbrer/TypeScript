(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Halen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name
        }
    }

    // Copiar la firma de un objeto ya creado

})()