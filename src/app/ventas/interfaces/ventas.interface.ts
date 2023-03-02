
//Un enum es trabajar con un array de numeros pero con palabras, internamente va a ser 0, 1, 2 ,3 
export enum Color {
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}