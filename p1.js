//push
let a = ["1","2"];
console.log(a);
a.push('3');
console.log(a);

//slice
let b = ['zero','one','two','three'];
let sliced = b.slice(1,3);
console.log(b);
console.log(sliced);

//foreach
var colors = ['red','green','blue'];
colors.forEach(
    (color)=>console.log(color)
);

//map-1
var number = [1,2,3];
var doublenumbers;
doublenumbers = [];
doublenumbers = number.map(
    (number)=>number*2
);
console.log(doublenumbers);
//map-2
var cars = [
    {model:'Buick',price:'cheap'},
    {model:'BMW',price:'expensive'}
];
var prices = cars.map((car)=>car.price);
console.log(prices);

//spread operator
function adder(base, ...numbers){
    numbers.forEach(
        (number)=>console.log(base + number)
    );
}
adder(3,5,7,1);
