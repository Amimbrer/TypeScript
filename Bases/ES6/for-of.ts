(() => {

    type Avenger = {
        name: string,
        weapon: string
    }
    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armosui'
    }

    const captainAmercio: Avenger = {
        name: 'Capitán Américo',
        weapon: 'Escucdo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, thor, captainAmercio]

    for (const avenger of avengers) {
        console.log(avenger.name, '-----', avenger.weapon);
    }




})()