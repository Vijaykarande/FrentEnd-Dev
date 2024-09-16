// let arr=[1,2,3,4,5,6]

// let nearr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     nearr.push(element**2)
// }
// console.log(nearr)


let array=[2,3,4,5,6,7,300]

let newArray=array.map((e,index,array)=>{

    return e**2
})

console.log(newArray)

let gretrthan30=((e)=>{

    if(e>30){
        return true
    }
    else
    {
        return false
    }

})

console.log(array.filter(gretrthan30))


let s1=""
let a1=Array.from("VIAJY KARANDE")
console.log(a1)


var ndatw=new Date()
console.log(ndatw)

console.log(Math.random())

console.log(Math.min(2,4))

console.log(Number)