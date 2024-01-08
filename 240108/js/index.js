"use strict";
function checkPriority(todo) {
    switch (todo.priority) {
        case 'High':
            console.log(todo.priority);
            break;
        case 'Normal':
            console.log(todo.priority);
            break;
        case 'Low':
            console.log(todo.priority);
            break;
    }
}
function extendTodo(todo) {
    if (typeof todo.dueDate === 'string') {
        console.log(todo.dueDate);
        todo.dueDate.length;
    }
    else {
        console.log(todo.dueDate.getDate);
    }
}
function getDescriptionLength(todo) {
    var _a;
    //exempel 1
    if (todo.description !== undefined) {
        todo.description.length;
    }
    //exempel 2
    if (todo.description !== undefined) {
        todo.description.length;
    }
    //exempel 2
    (_a = todo.description) === null || _a === void 0 ? void 0 : _a.length;
}
/*Enums och Union literals:
-- Likhet: Både enums och union literals används för att definiera
en uppsättning av fördefinierade värden.
-- Användning: Enums är användbara när du behöver en uppsättning konstanter(ofta numeriska),
 medan union literals är mer lämpliga för strängbaserade värden.
*/
// enum börjar med värdet 0 (noll) om inget annat ges, vi kan ändra värdet på enums
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Todouesday"] = 1] = "Todouesday";
    Day[Day["Wendsday"] = 2] = "Wendsday";
    Day[Day["Tursday"] = 3] = "Tursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday"; // 6
})(Day || (Day = {}));
// vi behöver inte sätta boolean här för att TypeScript fattar  
function schedulMeeting(day) {
    // kontrollera om dagen är en helgdag
    if (day === Day.Saturday || day === Day.Sunday) {
        console.log(Day[day]); // för att få dagen
        console.log('Du kan inte schemaläga mötet på helgen!');
        return false; // om vi gör en return här så behöver inte göra else
    }
    console.log(day);
    console.log('Mötets är shcemalagts');
    return true;
}
schedulMeeting(Day.Monday);
console.log(schedulMeeting(5));
const arnar = {
    name: 'Arnar',
    age: 35
};
function updateUser(user) {
    if (user.name) {
        console.log('Användarens namn har uppdaterats');
    }
    if (user.age !== undefined) {
        console.log('Användarens ålder har uppdaterats');
    }
}
//updateUser({ name: 'arnar', age: 30 })
updateUser({ age: 30 });
function requierdUser(value) {
    console.log(value);
}
requierdUser({ name: 'Berit', age: 30 });
const users = {
    alice: { name: 'alice', age: 24 },
    bob: { name: 'bob', age: 24 }
};
/**
 * Pick<T, K>
Skapar en typ genom att välja en uppsättning properties K (keys) från typen T (type).
 
Exempel: Användbart när du vill skapa en ny typ baserad på en delmängd av en annan typs properties.
*/ 
