/**
 * Destructuring 
 */

// Destructuring  với OBJ 

const user = {
    name : 'anaba' ,
    age  : 34,
    sex  : 1
}

// //nếu muốn gọi ra theo như bt thì 

// console.log(user.name);
// console.log(user.age);
// console.log(user.sex);
const {name , age, sex } = user 
console.log(name + age + sex );

/**
 * Spread Syntax 
 */
 const cloneUser = {...user}
 console.log(cloneUser=== user);

 const arrowFunc = (string) => {return console.log('hello'+ string);
 }
 arrowFunc('heeeee . this is arrow function')

 const arr = [1,2,3]

