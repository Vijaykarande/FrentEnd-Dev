let arr=[12,34,56,78,90,16]
let arr2=arr.map((e,index,arr) =>{
    return e**2
})
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     arr2.push(element**2)
    
// }
console.log("Arr2:"+arr2)

const greateThanFive=(e) =>
{
    if(e>5){
        return true;
    }
    return false;
}
console.log(arr.filter(greateThanFive))


let arr3=[1,2,3,4,5,6]

const vj=(a,b) =>{
    return a*b;
}
console.log(arr3.reduce(vj))

Array.from("Vijay")
