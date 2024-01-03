// type Person1 = {
//     firstName: string;

//     lastName: string;

//     yearOfBirth: number;

//     hasDriversLicense: boolean;
// }

const ex4 = () => {

    const getPersonList = (

      firstName: string,

      lastName: string,

      yearOfBirth: number,

      hasDriversLicense: boolean

    ): string => {

      return `<ul>

            <li><b>Förnamn:</b> ${firstName}</li>

            <li><b>Efternamn:</b> ${lastName}</li>

            <li><b>Födelseår:</b> ${yearOfBirth}</li>

            <li><b>Har körkort:</b> ${hasDriversLicense ? "Ja" : "Nej"}</li>

        </ul>`;

    };

    const personHTML:  string = getPersonList("Sandra", "Larsson", 1998, true);

    console.log(personHTML);

};
  
ex4();
