
const printObject = (argument: any): void => {
    console.log(argument)
}

// Transformamos función normal en una genérica
function genericsFunctions<T>(argument: T): T {
    return argument
}

// Funcion de tipo flecha
const genericsFlecha = <T>(argument: T): T => {
    return argument
}

console.log(
    genericsFunctions('Hola mudno').toString(),
    genericsFunctions(12.0009 + 56).toPrecision(4)
);
