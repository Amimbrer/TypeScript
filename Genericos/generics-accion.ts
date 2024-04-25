interface Hero {
    name: string;
    realName: string;
}

interface Villian {
    name: string;
    dangerLevel: number;
}


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericsFlecha<Villian>(deadpool).dangerLevel);
