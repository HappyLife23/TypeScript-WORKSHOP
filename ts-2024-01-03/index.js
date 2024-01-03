var car = {
    make: 'BMW',
    model: 'X3',
    year: 2023
};
function printCarInfo(car) {
    console.log("This is a ".concat(car.make, " ").concat(car.model, " ").concat(car.year));
}
printCarInfo(car);
