const carMakers = ['ford','toyota','chevy'];
const dates = [new Date(),new Date()];

const test:string[][] = [];
const caresByMake =[
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inferenced when extracting values
const Tcar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values 
carMakers.push('100');

//Help with 'map'
carMakers.map((car:string):string =>{
    return car.toUpperCase();
});

// Flexible types
const importantDates:(Date|string)[] = [new Date(),'2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
