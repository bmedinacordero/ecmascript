// spread opperator

const obj = {
    name: "Bryan",
    age: 25,
    country: "VZ"
};

let { country, ...all } = obj;
console.log(country,all);

// propagation properties

const obj = {
    name: "Bryan",
    age: 25
}

const obj1 = {
    ...obj,
    country: "VZ"
}

console.log(obj1);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("hello World"), 3000)
        : reject (new Error ("Test Error"))
    });
};

// promise finally

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizó"))

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day);
