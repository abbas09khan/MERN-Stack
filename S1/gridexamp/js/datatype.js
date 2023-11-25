/* let l= 10;
let b=20;
let area=l*b
console.log(area); */

//   perimeter

/* let a=20
let b=30
let c=60
let perimeter= a+b+c
console.log(perimeter) */

//area of circle

/* let pi=3.14
let r=7
area= pi*r*r
console.log(area) */

// F to C

/* let F=212
let C=5/9 *(F-32)
console.log(C) */

// GROSS SALARY

/* bs=20000;
hra= 0.1 * bs
da= 0.05 * bs
gs= bs + hra + da
console.log("gs", gs) */

// If Condition

/* let age=20

if (age>=18){
    console.log("you are an adult bcz your age is", age)
} */

// If else condition

/* let temp= 10
if (temp>40)
{
    console.log("its too hot outside")
}
else console.log("its normal outside") */

// if else if 

/* let marks= 40
if (marks>=90)
{
    console.log("A")
}
else if (marks>=70)
{
    console.log("B")
}
else console.log("average") */

//ternary operator

/* let age =25
let result= (age>=18)?("you're eligible for vote"):("you're not eligible")
console.log(result) */


//even odd
/* a= 6
let result= (a%2==0)?("even"):("odd")
console.log(result) */

//greatest no

/* let a=5,b=6,c=7
if(a>b && a>c){
    console.log("a is greatest")
}
else if (b>a && b>c)
{
    console.log("b is greatest")
}
else console.log("c is greatest") */

/* let a=24
if(a%2==0){
    console.log("even")
}
else {
    console.log("odd")
} */

//loops
/* 
let a="hello";
for(let i=0;i<5; i++){
    a= a + "";
}
console.log(a) */

// while loop
  /*   let count =0;
    while (count <= 5){
        console.log("count:"+ count)`
        count++;
    } */

    //function

    /* function areaRect(a,b){
        return(a*b);
    }
    const prod= areaRect(15,3);
    console.log(prod) */

    /* function areaRect(name){
        console.log("hello "+ name)
    }
    areaRect("Abbas"); */

        //aero function
/*     const double =(num) => num*2;
    console.log(double(2)) */

    console.log("-----------------FOR IN LOOP------------------");

    const car={
        "brand" : "BMW",
        "model" : "X5",
        "year" : 2019
    };
    for (let x in car) {
        console.log(x+ ":" + car[x] );
    }
    console.log("-----------------FOR OF LOOP------------------");

    const colours= ["red", "green","blue","yellow"]
    for (const iterator of object) {
        
    }
    
