//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function create_car(manufacturer: string, model: string, ...options: string[]) {
    let car: {
        manufacturer: string,
        model: string,
        options: string[],
        [key: string]: any
    } = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    options.forEach(options => {
        let [Key, value] = options.split(":");
        car[Key.trim()] = value.trim();

    });
    return car;
}
let mycar = create_car("toyata", "corollla","color:red","features:sunroof","wifi:yes");
console.log(mycar);