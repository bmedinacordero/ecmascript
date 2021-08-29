function newFunction(name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "VZ";
    console.log(name, age, country);
}

// es6
function newFunction2(name = "Oscar", age = "32", country = "VZ") {
    console.log(name,age,country);
};

newFunction2();
newFunction2("Bryan", "25", "CO");


let hello ="Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Quiero escribir una frase epica que podamos separar muy profesionalmente \n"
+ "Aqui va otra frase epica que necesitamos." 

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    "name": "Oscar",
    "age": 32,
    "country": "MX"
}

console.log(person.name,person.age,person.country);

let {name, age} = person;
console.log(name,age);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet);

const a = "b";
a = "a";
console.log(a);