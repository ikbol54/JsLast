// const person = {
//     name: "Ikbol",
//     year: 20,
// };

// const defaults = {
//     name: "user",
//     year:  18,
//     host: "localhost",
// };

// const user = {...defaults, ...person};

// for(key in defaults){
//     us[key] = defaults[key]
// }
// for(key in person){
//     us[key] = person[key]
// }
// console.log(us);
// console.log(user);

// function count(...arguments){
//     console.log(arguments);
// };

// count(12, 4, 5, 45, 3, 20);

const mass = [2, 3, "text"];
const mass2 = [22, 25, "som"];
const shallowCopy = [...mass, ...mass2];
console.log(shallowCopy);