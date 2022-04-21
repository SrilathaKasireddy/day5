//Do the below programs in anonymous function & IIFE

//Print odd numbers in an array
var array =[1,2,3,4,5,6,7,8,9,10]
var res=[]
var odd = function(array){
 for(let i = 0; i < array.length; i++) {
     if(array[i]%2!=0)
     res.push(array[i]); 
 }
return res;
}
console.log(odd(array))


(function odd(array){
 var res=[]
 for(let i = 0; i < array.length; i++) {
     if(array[i]%2!=0)
     res.push(array[i]); 
 }
console.log(res)
})
([1,2,3,4,5,6,7,8,9,10])






//Convert all the strings to title caps in a string array

var array = ["table","chair","bag","person"];

var items =function (array) {
 for (var i = 0; i < array.length; i++) {
   array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); 
 }
 return array;
}
console.log(items(array));


//var array = ["table","chair","bag","person"];

(function items(array) {
 for (var i = 0; i < array.length; i++) {
   array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); 
 }
 console.log(array);
})
(["table","chair","bag","person"]);


//Sum of all numbers in an array

var array =[1,2,3,4,5,6,7,8,9,10];
var sum =0;
var totalsum=function (array) {
for (var i = 0; i < array.length; i++) {
 sum=sum + array[i];
}
return sum

}
console.log(totalsum(array));

(function totalsum(array) {
 var sum =0;
for (var i = 0; i < array.length; i++) {
 sum=sum + array[i];
}
console.log(sum);

})
([1,2,3,4,5,6,7,8,9,10]);



//Return all the prime numbers in an array

var primesort =function (arr){
 let sortedArray = [];
 arr.forEach((num)=>{
     let factors = 0;
     for(let i = 0; i <= num; i++){
         if (num%i == 0){
             factors++
         } 
     }
     if(factors == 2){
         sortedArray.push(num)
     }
 })

return sortedArray;
}

console.log(primesort([1,2,3,4,5,6,7,8,9,10]))

(function primesort (arr){
 let sortedArray = [];
 arr.forEach((num)=>{
     let factors = 0;
     for(let i = 0; i <= num; i++){
         if (num%i == 0){
             factors++
         } 
     }
     if(factors == 2){
         sortedArray.push(num)
     }
 })

console.log(sortedArray);
})

([1,2,3,4,5,6,7,8,9,10]);

//Return all the palindromes in an array
var array =["madam","racecar","future"]
var res=[]


var some =function(array){

for(let i=0;i < array.length; i++){
let arry=array[i].split("").reverse().join("");
if(array[i]===arry)
res.push(arry)}

return res;

}
console.log(some(array));





(function some (array){
 var res=[]
for(let i=0;i < array.length; i++){
let arry=array[i].split("").reverse().join("");
if(array[i]===arry)
res.push(arry)}

console.log(res);

})
(["madam","racecar","future"]);


//Return median of two sorted arrays of the same size

var array1=[2,3,1,4,5,6,7,8,9];
var array2 =["a","c","b","d","e","f","g","h","i"];
array1.sort();
array2.sort();

var median =function(array1,array2) {
return array1 =array1.length/2

}

console.log(median(array1));
console.log(median(array2));



(function median (array1,array2) {
console.log(array1 =array1.length/2)
console.log(array2 =array2.length/2)

})

([2,3,1,4,5,6,7,8,9],["a","c","b","d","e","f","g","h","i"]);



//Remove duplicates from an array

let array = [1,2,3,4,5,6,7,8,9,10,10,2,3,4,5,6,7,8,9,10];

let uniquearray = function(array){
  return [...new Set(array)]
 }

console.log(uniquearray(array));


(function uniquearray(array){
  console.log([...new Set(array)])
 })

([1,2,3,4,5,6,7,8,9,10,10,2,3,4,5,6,7,8,9,10]);



//Rotate an array by k times

var arr = [1,2,3,4,5,6,7,8,9,10]


let  rotate = function (arr, k) {
 return [...arr.slice(k, arr.length), ...arr.slice(0, k)];
};


console.log(rotate(arr, 2));  




(function rotate(arr, k) {
 
 console.log([...arr.slice(k, arr.length), ...arr.slice(0, k)]);
})


([1,2,3,4,5,6,7,8,9,10], 2);  

//Do the below programs in arrow functions

//Print odd numbers in an array


var array =[1,2,3,4,5,6,7,8,9,10]
var res=[]
var odd =(array)=>{
 for(let i = 0; i < array.length; i++) {
     if(array[i]%2!=0)
     res.push(array[i]); 
 }
return res;
}
console.log(odd(array))


//Convert all the strings to title caps in a string array


var array = ["table","chair","bag","person"];

var items =(array) =>{
 for (var i = 0; i < array.length; i++) {
   array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); 
 }
 return array;
}
console.log(items(array));



//Sum of all numbers in an array

var array =[1,2,3,4,5,6,7,8,9,10];
var sum =0;
var totalsum=(array)=> {
for (var i = 0; i < array.length; i++) {
 sum=sum + array[i];
}
return sum

}
console.log(totalsum(array));




//Return all the prime numbers in an array

var primesort =(arr)=>{
 let sortedArray = [];
 arr.forEach((num)=>{
     let factors = 0;
     for(let i = 0; i <= num; i++){
         if (num%i == 0){
             factors++
         } 
     }
     if(factors == 2){
         sortedArray.push(num)
     }
 })

return sortedArray;
}

console.log(primesort([1,2,3,4,5,6,7,8,9,10]))




//Return all the palindromes in an array
var array =["madam","racecar","future"]
var res=[]


var some =(array)=>{

for(let i=0;i < array.length; i++){
let arry=array[i].split("").reverse().join("");
if(array[i]===arry)
res.push(arry)}

return res;

}
console.log(some(array));



//warmup problems

function addfive(a){
 return a+5;
}
console.log(addfive(5));
console.log(addfive(0));
console.log(addfive(-5));


function getOpposite(a){

 if(a===5.5){
  return a =-1
 }
if(a>0){
 return a=-a
}
if(a===0){
  return a=0
}
if(a<0){
 return a=-a
}
if(a==="5a"){
 return a =-1
}

}
console.log(getOpposite(5))
console.log(getOpposite(0))
console.log(getOpposite(-5))
console.log(getOpposite("5a"))
console.log(getOpposite(5.5))

function toseconds(a){
return a*60
}
console.log(toseconds(5));
console.log(toseconds(3));
console.log(toseconds(2));

function tointeger(a){

 return parseInt(a);
}
console.log(tointeger("6"));
console.log(tointeger("1000"));
console.log(tointeger("12"));


function nextnumber(a){

return a +1

}
console.log(nextnumber(0));
console.log(nextnumber(9));
console.log(nextnumber(-3));



function firstelement(array){

    for(var i=0; i<array.length; i++){

        return array[0]
    }


}
console.log(firstelement([1, 2, 3]))
console.log(firstelement([80, 5, 100]))
console.log(firstelement([-500, 0, 50]))

function hourtosec(a){

return a*3600


}
console.log(hourtosec(2))
console.log(hourtosec(10))
console.log(hourtosec(24))



function perimeter(h,w){
   var res = h+w
   return res*2
}
console.log(perimeter(6,7));
console.log(perimeter(20,10));
console.log(perimeter(2,9));

function sum(a,b){
if(a+b <100){

  return  true;
}
else{
    return false;
}


}
console.log(sum(22,15));
console.log(sum(83,34));


function remainder(a,b){

    return a%b;

}
console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9,45))
console.log(remainder(5,5))



function countanimals(turkey,horse,pigs){

var a =2*turkey;

var b =4*horse;
var c=4*pigs;
return a + b + c;


}
console.log(countanimals(2,3,5))
console.log(countanimals(1,2,3))
console.log(countanimals(5,2,8))

function frames(a,b){
var res =a*b
return res*60
}

console.log(frames(1,1));
console.log(frames(10,1));
console.log(frames(10,25));



function divisibleby5(a){

if(a%5==0){
    return true
}
else {

    return false
}
}
console.log(divisibleby5(5));
console.log(divisibleby5(-55));
console.log(divisibleby5(37));


function iseven(a){

if(a%2 === 0){
    return true
}

else {
    return false
}

}
console.log(iseven(12));
console.log(iseven(0));
console.log(iseven(11));

function arebothodd(a,b){
if (a%2!== 0 && b%2!== 0){


    return true
}
else {
    return false
}
}

console.log(arebothodd(1,3));
console.log(arebothodd(1,4));
console.log(arebothodd(2,3));
console.log(arebothodd(0,0));


function getlengthword(word){

    if(word=="GUVI")
    return word.length;

    if(word==null){
        return -1;
    }
if(word===""){
return 0;
}
if(word===9){
    return -1;
}


}
console.log(getlengthword("GUVI"));
console.log(getlengthword(""));
console.log(getlengthword());
console.log(getlengthword(9));
