/* const fruits=['apple','mango','banana','guava','beetroot'];
console.log(fruits[4])
console.log(fruits.slice(1,3))

// push, pop, shift, unshift, indexof, slice, concat, foreach, map, filter

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)
fruits.unshift("carrot")
console.log(fruits)

const veg=['laoki', 'taroi','tamatar']
const merge= fruits.concat(veg)
console.log(merge)

const index = fruits.indexOf('guava')
console.log(index) */

/* const num=[1,2,3,4,5];
num.forEach(function(num){
    console.log(num*2);
})

const a=[3,5,4,6,3]
const double= a.map((a) => a*2);
console.log(double); */

/* Questions : 
1. WAP to get first name from an array of full names. 

2. WAP to print Fibonacci series.

3. WAP to check if a number is prime.

4. WAP to convert temperature in Fahrenheit to Celsius */

//1

/* const names=['abbas','arhan','anam','areeba','amit'];

console.log(names[0])

//2

console.log("-----------------------------------"); */
/* let nums=[1,2,3,4,5];
for (let i=0; i<nums.length;i++){
console.log(nums[i]**2);
}
console.log("-----------------------------------")

for (let x of nums) {
    console.log(x**2)
} */
/* console.log("-----------------------------------")

let prices=[900,2000, 2800,5000,1000, 700,200];
let final= prices.filter((x)=> x>1000 && x<3000);
console.log(final); */
let coloors=["red", "blue", "orange","violet"];
let final= coloors.filter((x)=> x.length>4);
console.log(final);