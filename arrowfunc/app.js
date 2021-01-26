// const sayHello = function() {
//     console.log('Hello');
// }
// sayHello();


// const sayHello = () => {
//     console.log('Hello');
// }
// sayHello();


// const sayHello = () => console.log('Hello');
// sayHello();

// const sayHello = () => 'Hello';
// console.log(sayHello());

// const sayHello = () => ({ msg: 'Hello' });
// console.log(sayHello());


// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Brad');

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)
// sayHello('Brad', 'Traversy');

const users = ['Nathan', 'John', 'William'];
// const nameLengths = users.map(function (name) {
//     return name.length;
// });

// const nameLengths = users.map((name) => {
//     return name.length;
// });

const nameLengths = users.map(name => name.length)


console.log(nameLengths);
