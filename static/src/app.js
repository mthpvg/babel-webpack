const shell = document.getElementById('shell');
const firstName = 'Mathieu';
const age = 31;
const numbers = [39, 25, 90, 123];

//tree shaking
import { sayHello } from './module';
const element = document.createElement('h2'); 
element.innerHTML = sayHello('World');
document.body.appendChild(element);

// template literal, ${} is a template placeholder
const greetings = `
  Hello, ${firstName}.
  Next year you'll be: ${age + 1}
`;
console.log(`Templates literal::${greetings}`);

// Arrow functions:
// - cannot be named.
// - lexically bind the current this value.
// - mostly behave like function expressions.
// - are not hoisted as function declarations are.
const toH1 = (greetings) => {
  const result = `<h1>${greetings}</h1>`;
  console.log(`Arrow functions::${result}`);
  return result;
}


if (shell != null) {
  shell.innerHTML = toH1(greetings);
}

// Functional Programming
const doubleNumbers = numbers.map( n => n * 2 );
console.log('Funtional Programming::', doubleNumbers);


// With an arrow function, the this keyword is lexically scoped.
// The value of this then refers to the parent scope.
const person = {
  firstName: 'Ryan',
  hobbies: ['Robots'],
  showHobbies: function() {
    this.hobbies.forEach(hobby => {
      console.log(`This keyword:: ${this.firstName} likes ${hobby}`);
    });
  }
};
person.showHobbies();

// Spread operator:
// - expands an array
// - passes an array of arguments into a function
const max = Math.max(...numbers);
console.log(`Spread operator:: ${max}`);

const numbersArray1 = [3, 4, 5, 7, 8];
const numbersArray2 = [9, 6, 10, 11];
const concatArray = [...numbersArray1, ...numbersArray2];
console.log(`Spread operator:: ${concatArray.toString()}`);

// Rest parameters
const add = function(...numbers) {
  return numbers.reduce((a, b) => a + b);
};
console.log(`Rest parameters:: ${add(2, 3, 4, 5, 6, 7)}`);
