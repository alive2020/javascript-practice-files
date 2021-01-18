// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e){
//   const task = document.getElementById('task').value;

//   let tasks;

//   if(localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));

//   alert('Task saved');

//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//   console.log(task);
// });

// document.querySelector('form').addEventListener('submit',
//   function (e) {
//     const task = document.getElementById('task').value;

//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//       tasks = [];
//     } else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('Task saved');

//     e.preventDefault();
//   });


// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function (task) {
//   console.log(task);
// });



// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
// }

// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.isMarried = function (newLastName) {
//   this.lastName = newLastName;
// }

// const brad = new Person('Brad', 'Doe', '9/10/1980');
// console.log(brad);
// console.log(brad.calculateAge());
// console.log(brad.getFullName());

// brad.isMarried('Smith');

// console.log(brad.getFullName());


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Jon', 'Doe');
// console.log(person1.greeting());


// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);
//   this.phone = phone;
//   this.membership = membership;
// }

// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer;
// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');


// console.log(customer1);
// console.log(customer1.greeting());


// Classes

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }
//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }
//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Thompson', '11-13-1983');
// mary.getsMarried('Williams');


// console.log(mary);
// console.log(Person.addNumbers(1, 2));


// Subclasses 

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());


