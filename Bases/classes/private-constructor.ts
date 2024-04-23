(() => {

    class Apocalipsis {
        // Instancia de apocalipsis que reutilizaremos
        static intance: Apocalipsis

        // Singlenton
        private constructor(public name: string) {

        }

        static callApocalipsis(): Apocalipsis {
            // Si la instancia aún no se ha creado se crea por primera vez
            this.intance ??= new Apocalipsis('')

            return this.intance
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis.. el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis.. el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis.. el único')
    // console.log(apocalipsis, apocalipsis2, apocalipsis3);
})()