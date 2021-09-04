let array = [1,2,3,[1,2,3,[1,2,3]]]

console.log(array.flat(2));


// flat map

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// borrar espacios en blanco al prinicpio de un string

let hello = "            hello world!";

console.log(hello);
console.log(hello.trimStart());

// eliminar espacios al final de un string

let hello = "Hello world         "
console.log(hello);
console.log(hello.trimEnd());

// pasar de forma opcional el parametro error al valor de catch

// antes
try{

} catch (error){
error}

// ahora
try{

} catch {
error}

// transformar clave valor en un objeto. array -> objeto

let entries = [["name", "bryan"], ["age", 25]];

console.log(Object.fromEntries(entries));

// acceder a una descripcion

let mySymbol = "My symbol";
let symbol = Symbol(mySymbol)
console.log(symbol.description);