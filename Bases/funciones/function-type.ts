(() => {

    const addNumbers = (a: number, b: number) => a + b
    const greet = (name: string) => `Hola ${name}`
    const saveTheWorld = () => 'El mundo está salvado'


    let myFunction: Function;

    // myFunction = 10;
    // console.log(myFunction);

    // Asignamos la función a myFunctions
    myFunction = addNumbers
    console.log(myFunction(1, 2));

    myFunction = greet
    console.log(myFunction('Alberto'));

    myFunction = saveTheWorld
    console.log(myFunction());
})()