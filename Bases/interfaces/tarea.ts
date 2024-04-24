(() => {

    interface IAuto {
        encender: boolean;
        velocidadMaxima: number;
        acelerar(): void;
    }

    const conducirBatmovil = (auto: IAuto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    }


    interface Guason {
        reir?: boolean;
        comer?: boolean;
        llorar?: boolean;
    }
    const guason: Guason = {
        reir: true,
        comer: true,
        llorar: true,
    }

    const reir = (guason: Guason) => {
        if (guason.reir) {
            console.log('JAJAJAJJA');

        }
    }
})()