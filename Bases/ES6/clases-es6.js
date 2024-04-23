(() => {

    class Avenger {
        #hola = 'Propiedad privada';
        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power
        }

        method() {
            console.log(this.#hola);
        }
    }

    class FlyingAvenger extends Avenger {
        flying;
        constructor(name, power) {
            super(name, power)
            // this.flying = flying
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    const falcon = new FlyingAvenger('Falcon', 50)


    hulk.method();
    console.log(hulk);
    console.log(falcon);
})()