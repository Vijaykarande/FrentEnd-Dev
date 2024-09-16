

let arr =[12,13,14,15,16,17]
console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[55])

console.log(arr.length)

arr[0]="vijay"
console.log(arr)

// let s1="Vijay"
// console.log(s1)

// s1[0]="kj"
// console.log(s1)

console.log(arr.toString())
console.log(arr.join(" and "))

console.log(arr.pop())
console.log(arr)

console.log(arr.push("Karande"))
console.log(arr)

console.log(arr.shift(120))
console.log(arr)


console.log(arr.unshift(300))
console.log(arr)


delete arr[2]
console.log(arr)


let arr1=[1,2,3,4]
let arr2=[11,22,33,44]
let arr3=[9,8,7,6]
let a=arr1.concat(arr2,arr3)
console.log(a)
console.log(a.sort())

let arr4=[1,2,3,4,5,6,7]
console.log(arr4.splice(3))
console.log(arr4)
