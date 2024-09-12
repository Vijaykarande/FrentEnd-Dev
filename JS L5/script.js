
function  Handsom(name) {
    console.log("Hey " +name+" You Are Handsom!!")
    console.log("Hey " +name+" You Are Good!!")
    console.log("Hey " +name+" You Are Smart!!")
    console.log("Hey " +name+" You Are Curious!!")
    console.log("Hey " +name+" You Are Mesterious!!")
    


}
Handsom("Vijay")
Handsom("Sanjay")


// console.log("Hey VIjay You Are Handsom!!")
// console.log("Hey VIjay You Are Good!!")
// console.log("Hey VIjay You Are Smart!!")
// console.log("Hey VIjay You Are Curious!!")
// console.log("Hey VIjay You Are Mesterious!!")

function add(a, b,c) {
    console.log(a+b+c)
    
}
add(10,10,10)

function swap(a,b,c) {
    console.log("Number before swapping " + a)
    console.log("Number before swapping " + b)
    console.log("Number before swapping " + c)

   
    c=a;
    a=b;
    b=c;
    console.log("Number after swapping " +a)
    console.log("Number after swapping " +b)
    console.log("Number after swapping " +c)
    
}
swap(1,2,3)


function mul(a,b) {
    // console.log(a*b)
    // console.log(a,b)
    
    return a*b;
}
 result =mul(2)
 result2=mul(90,0)
 result3=mul(80,1)
console.log("The multiplication of 2 numbers : " +result)
console.log("The multiplication of 2 numbers : " +result2)
console.log("The multiplication of 2 numbers : " +result3)


const fun1 =(x) =>{
    console.log("The number of x is : " + x)
}
fun1(90)
fun1(100)
fun1(1)