import './styles/style.css'
import './styles/style.scss'

console.log('check source map ');

let sum = (num1) => { 
    console.log(num1+22);
    
}

sum(23)

const person = { name: 'Duoc' }
const personClone = { ...person }
console.log('personClone', personClone)

console.log('Object.values', Object.values(personClone))
