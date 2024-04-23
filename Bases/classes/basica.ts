(() => {
    class Avenger {
        // Propiedades
        static age: number = 35;

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) { }

        public bio() {
            return `${this.name} ${this.team}`
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitán')
    // console.log(antman);

    // Propiedad estática
    // console.log('Propiedad estática', Avenger.age);

    // console.log(antman.bio());


})()