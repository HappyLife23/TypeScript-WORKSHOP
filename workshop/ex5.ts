const ex5 = () => {

    // Samma som ex4, men nu ska du skapa en typ för personen och använda den i funktionen

    type Person1 = {
        firstName: string;
        lastName: string;
        age?: number;
        hasDriversLicense?: boolean;
        yearOfBirth?: number;
    }

    const getPersonList = (person: Person1): string => {
    
        const { firstName, lastName, age, hasDriversLicense,yearOfBirth } = person;
      return `<ul>

            <li><b>Förnamn:</b> ${firstName}</li>

            <li><b>Efternamn:</b> ${lastName}</li>

            <li><b>Födelseår:</b> ${yearOfBirth}</li>

            <li><b>Har körkort:</b> ${hasDriversLicense ? "Ja" : "Nej"}</li>

        </ul>`;

    };

    const person: Person1 = {
        firstName: "Sandra",
        lastName: "Larsson",
        age: 24,
        yearOfBirth: 1990
        
    }


    const personHTML: string = getPersonList(person).trim().toUpperCase();


    console.log(personHTML);

  };



ex5();

