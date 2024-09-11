
console.log("Loops and function")
let a=1;

for (let i = 0; i < 20; i++) {
    console.log(a+i)
    
}

let obj={
    name:"Vijay Karande",
    age:"26",
    designation:"Software Developer"
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
    
}

for (const c of "Vijay Karande") {
    console.log(c)
    
}

let b=10;
while (b<20) {
    console.log(b)
    b++;
    
}

let d=10;
do {
    console.log(d)
    d++;
    
} while (d<20);