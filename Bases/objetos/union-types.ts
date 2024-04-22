(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }

    let myCustomVariabnle: (string | number | Hero) = 'Alberto'


    myCustomVariabnle = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
    console.log(typeof myCustomVariabnle);
})()