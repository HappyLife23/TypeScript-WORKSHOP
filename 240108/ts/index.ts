type Todo = {
    title: string,
    priority: 'High' | 'Normal' | 'Low'
    isComplete: boolean,
    description?: string,
    dueDate: Date | string
}

function checkPriority(todo: Todo) {
    switch (todo.priority) {
        case 'High':
            console.log(todo.priority)
            break
        case 'Normal':
            console.log(todo.priority)
            break
        case 'Low':
            console.log(todo.priority)
            break
    }
}

function extendTodo(todo: Todo) {
    if (typeof todo.dueDate === 'string') {
        console.log(todo.dueDate)
        todo.dueDate.length
    } else {
        console.log(todo.dueDate.getDate)
    }
    
}

function getDescriptionLength(todo: Todo) {
    //exempel 1
    if (todo.description !== undefined) {
        todo.description.length
    }
      //exempel 2
    if (todo.description !== undefined) {
        todo.description.length
    }

    //exempel 2
    todo.description?.length
}
/*Enums och Union literals:
-- Likhet: Både enums och union literals används för att definiera 
en uppsättning av fördefinierade värden.
-- Användning: Enums är användbara när du behöver en uppsättning konstanter(ofta numeriska),
 medan union literals är mer lämpliga för strängbaserade värden.
*/
// enum börjar med värdet 0 (noll) om inget annat ges, vi kan ändra värdet på enums
enum Day {
    Monday,       // 0
    Todouesday,   // 1
    Wendsday,     // 2
    Tursday,      // 3
    Friday,       // 4
    Saturday,     // 5
    Sunday        // 6
}   

// vi behöver inte sätta boolean här för att TypeScript fattar  
function schedulMeeting(day: Day): boolean {
    // kontrollera om dagen är en helgdag
    if (day === Day.Saturday || day === Day.Sunday) {
        console.log(Day[day]) // för att få dagen
        console.log('Du kan inte schemaläga mötet på helgen!')
        return false // om vi gör en return här så behöver inte göra else
    }

    console.log(day)
    console.log('Mötets är shcemalagts')
    return true
}

schedulMeeting(Day.Monday)
console.log(schedulMeeting(5));


/**
 * Avancerad TypeScripts
 * Generics och utility types
 */

/**
 * Generics
Generics är lite som att skapa en mall. De låter dig skriva kod som kan arbeta med olika typer utan att faktiskt specificera exakt vilken typ det är.
 
Det är som att säga "denna funktion eller klass kan arbeta med vilken typ som helst, men den typen måste vara konsekvent".
 */

/**
 * Generics är som variabler som håller typer åt oss. Ni kommer ofta se att de benämns med T (står för Type) men vi kan döpa dem till vad vi vill.
 * 
 */

// function identity(arg: any): any{
//     return arg;
// }

// let output = identity('myString')

// function identity<Type>(arg: Type): Type{
//     if (typeof arg === 'string' || Array.isArray(arg)) {
//         console.log(arg.length)
//     }
//     return arg;
// }

// function identity<Type>(arg: Type[]): Type[]{
//     if (typeof arg === 'string' || Array.isArray(arg)) {
//         console.log(arg.length)
//         return arg;
//     }
// }

// Const identity = 

// let output = identity('myString')
// let number = identity(2)
// let boolean = identity(true)
// let array = identity([1,2,3])

interface User {
    name: string,
    age: number
}

const arnar: User = {
    name: 'Arnar',
    age: 35
}

function updateUser(user: Partial<User>){
    if (user.name) {
        console.log('Användarens namn har uppdaterats')
    } if (user.age !== undefined) {
        console.log('Användarens ålder har uppdaterats')
    }
}

//updateUser({ name: 'arnar', age: 30 })
updateUser({ age: 30 })
function requierdUser(value: Required<User>) {
    console.log(value)
}

requierdUser({ name: 'Berit', age: 30 })

// readonly<T>
//Record <T, K>
/**
 * Skapar en typ med en uppsättning egenskaper K av typen T.
 
Exempel: Användbar för att skapa objekttyper med fördefinierade nycklar.
 */


interface User {
    name: string,
    age: number
}

const users: Record<string, User> = {
    alice: { name: 'alice', age: 24 },
    bob: {name: 'bob', age: 24}
}

/**
 * Pick<T, K>
Skapar en typ genom att välja en uppsättning properties K (keys) från typen T (type).
 
Exempel: Användbart när du vill skapa en ny typ baserad på en delmängd av en annan typs properties.
*/