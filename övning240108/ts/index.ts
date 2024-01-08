// Enums och union literals

// Övning 1: Skapa och Använda en Enum

// Uppgift: Skapa en enum `Color` som representerar ett set av färger (Röd, Grön, Blå). Skriv sedan en funktion `describeColor` som tar en ` Color` som parameter och skriver ut en beskrivning av färgen.


// Skapa enum här

enum ClassList {
    First,
    Second,
    Third,
    Fourth,
    Fifth
}
// Skriv funktionen här
function classListItems(classListan: ClassList) {
    if (classListan === classListan.First) {
        console.log('Hello')
    }
    
}
// Testa funktionen med varje färg i din enum


