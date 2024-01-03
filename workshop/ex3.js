"use strict";
const ex3 = () => {
    // Skapa en Person type och använd den i funktionen. Person ska vara en union type  av "User", "Admin" och "SuperAdmin"
    const user = "Admin";
    const getPriviligies = (user) => {
        switch (user) {
            case "User":
                console.log("You have user right privileges");
                break;
            case "Admin":
                console.log("You have admin right privileges");
                break;
            case "SuperAdmin":
                console.log("You have super admin right privileges");
                break;
        }
    };
    getPriviligies(user);
};
ex3();
