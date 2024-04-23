(() => {
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };


    // const { poder, vision } = avengers
    // console.log(poder, vision.toUpperCase());
    const printAvengers = ({ activo, ...resto }: Avengers) => {
        console.log(activo, resto);
    }

    printAvengers(avengers)


})()