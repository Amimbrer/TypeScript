(() => {

    class Coche {
        constructor(
            public name: string,
            public modelo: string
        ) {
            // console.log('Constructor de Coches llamado!');
        }

        private getFullName() {
            return `${this.name} ${this.modelo}`
        }
    }

    class Deportivo extends Coche {
        // Si no se crea ningun constructor se llama al del padre automáticamente
        constructor(
            name2: string,
            modelo: string,
            public descapotable: boolean,
            name3?: string
        ) {
            // Al crear un constructor propio ya habría que llamar al de la clase padre
            super(name2, modelo);
            // console.log('Constructor deportivo llamado!');
        }

        set setName(name: string) {
            this.name = name
        }
    }

    const ferrari = new Deportivo('Ferrari', 'Cabrio', true);
    // console.log(ferrari);

    // Getter y setter
    ferrari.name2 = 'Ferrari moderno'

})()