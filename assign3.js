 //Q.1;creat process array
 function processArray(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i]));
    }
    return result;
 }
 console.log(processArray([1,2,3,4,5],function(n)
{
    return n
}));
 
//exaplanation;callback is a function,
// callback array call the function
//push() used to store the function

// Q,NO-02 Square every number using procee array
function processArray(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i]));
    }
    return result;
 }
 console.log(processArray([1,2,3,4,5],function(n)
{
    return n*n
}));


// exaplanation repeat above procedur ,then multiply n*n

//Q,NO-3 Return only even number
// Q,NO-02 Square every number using procee array
function processArray(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){

         result.push(arr[i]);
        }
    }
    return result;
 }
 let num=[1,2,3,4]
 let even=(processArray(num,function(n){

    return (n%2==0)
  }) )
 console.log(even)

 //4-Create a function proces string(str,caaback)
 function processString(str,callback){
    return callback(str);

 }
 let e=processString("hello world",function(str){
    return str
 })
 console.log(e)

 //proces string accept a string
 //Callback receives that strin
 //return send the result back



 // Ques.5 Convert a string into upper case

function processString(str,callback){
    return callback(str);

 }
 let k = processString("hello world",function(str){
    return str.toUpperCase()
 })
 console.log(k)

 //6-Count the number of word in a sentance
 function processString(str,callback){
    return callback(str)
 }
 let result=processString("i love javascript",function(str){
    let words=str.split(" ")
    return words.length

 })
 console.log(result)


//7.Create a function calculate(a,b callback)
function calculate(a,b,callback){
    return callback(a,b);
}
let result=calculate(10,5 ,function(a,b){
    return a+b;
})
console.log(result)
//put a=10
//b=5
// callback perform addition
// result =15


//8.Addition,substraction,multiplication,division;
function calculate(a,b,callback){
    return callback(a,b);
}
//addition
let add=calculate(10,5,function(a,b){
    return a+b
})
console.log(add)
//substraction
let sub=calculate(10,5,function(a,b){
    return a-b
})
console.log(sub)
//multiplication
let mul=calculate(10,5,function(a,b){
    return a*b
})
console.log(mul)
//division
let div=calculate(10,5,function(a,b){
    return a/b
})
console.log(div)

// Create a function find Elements(arr,callback)
function findElement(arr,callback){
for(let i=0;i<=arr.length;i++){
    if(callback(arr[i])){
        return arr[i];
    }
}
return undefined;
}
let num=[1,3,5,8,10]
let a=findElement(num,function(n){
    return n%2==0
})
console.log(a)



// Bonus Challenge:Menu-driven Calculator
// perform arthematic operations and array analysis using callbacks

function calculate(a,b,callback){
    return callback(a,b);
}
function processArray(arr,callback){
    let result=[]
    for(let i=0;i<=arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
let choice=1;

let a=10;
let b=5;
switch (choice){
    case 1:
        console.log("addition:",
            calculate(a,b,function(a,b){
                return a+b;
        })
    )
        break
     case 2:
            console.log("sub:",
                calculate(a,b ,function(a,b){
                    return a-b;
        })
    )
        break;
     case 3:
            console.log("mul:",
                calculate(a,b ,function(a,b){
                    return a*b;
        })
    )
        break;
    case 4:
            console.log("div:",
                calculate(a,b,function(a,b){
                    return a/b;
        })
    )
        break;
    case 5:
            let numbers=[1,2,3,4,5,6];
            let even=processArray(numbers,function(n){
                return n%2==0
            })
            console.log("even numbers:",even)
            break;
        default:
                console.log("invalid")

}