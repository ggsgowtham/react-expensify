//Object Destructuring

// const person = {
//     name: 'GGS',
//     age: 26,
//     location: {
//         city: 'Bangalore',
//         temp: 45    
//     }
// };

// //destructuring in es6
// const {name: firstName = 'Gowtham', age, location} = person;

// console.log(`${firstName} is ${age}`);

// //renaming temp variable to temperature
// const {city, temp: temperature} = person.location;
// if(temperature && city) {
//     console.log(`It's ${temperature} in ${city}` );
// }

// const book = {
//     title: 'Ego is the Enemy',
//     name: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//.....................................................................................

//Array Destructuring

const address = ['1299 s Juniper street', 'philli','penny','19147'];

//matches array values based on position
// const [street, city, state= 'Bangalore', zip] = address;
// console.log(`You are in ${city} ${state}`);


const item = ['Coffee {hot}','$3.00','$3.50','$4.00'];

const [type, ,mediumPrice, ] = item;
console.log(`A medium ${type} costs ${mediumPrice}`);
