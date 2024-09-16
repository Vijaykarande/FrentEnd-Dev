let arr = [12,34,45,56,667,788,789,567]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
 }



//  let obj ={

//     a:12,
//     b:40,
//     c:60,
//     d:80
//  }
//  for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
//     }
//  }

for (const element of arr) {
    console.log(element)
    
}