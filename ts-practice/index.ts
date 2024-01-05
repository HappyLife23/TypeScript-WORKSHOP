function greet(person: { name: string; age: number; }) {
    return 'Hello ' + person.name;
}

interface Person {
    name: string;
    age: number;
}
function greeting(person: Person) {
    return "Hello " + person.name;
}