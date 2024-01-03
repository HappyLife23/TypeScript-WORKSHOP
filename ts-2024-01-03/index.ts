/*
let a: any = '4';
a = '5';

a: 5;
a: true;


console.log(a);


const numbers: number[] = []; // enfunktion som ska innehålla numbers
const userRights: ['user', 'admin'] = ['user', 'admin']
userRights.push('admin')
let names: string[];

const mixed = [1, 'hej'];
numbers.push(1)
console.log(numbers)

// objekt
/*
type Car = {
    make: string
    model: string
    year: number
    color?: string
} 
*/
/*
interface Car  {
    make: string;
    model: string;
    year: number;
    color?: string;
} 

let car: Car = {
    make: 'BMW',
    model: 'X3',
    year: 2023
    
}

function printCarInfo(car: Car) {
    console.log(`This is a ${car.make} ${car.model} ${car.year}`)
}
printCarInfo(car);
*/

/****************
**** unions types 
***************/

let id: string | number; 
id = 'hej';
id = 456789;
console.log(id)

type Dog = {
    id: number | string,
    name: string,
    gender: 'male' |' feamle' |'cat'
}

const dog: Dog = {
    id: '123456',
    name: 'Max',
    gender: 'cat'
}

type Status = 'Complete' | 'Incomplete'





