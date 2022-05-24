// Given an array of 0's and 1's find out number of 0's

let arr = [1,1,0,1,0,1,0]

let res =arr.filter((a) => a==0);
console.log(res);
let length = res.length
console.log(length);

// Given an array find out total no. of odd and even nos.

let arr1 = [2,3,4,5,6,7,8];
let o = 0;
let e = 0;

let odd = arr1.filter((b) => {
    if(b===0){
        e++
    }else{
        o++
    }
});
console.log(o);
console.log(e);

// Given a string find out number of vowels

let str = "javascript";
let vowels = 0
str.split("").filter((c) =>{
    if(c=="a" ||c=="e"||c=="i"||c=="o"||c=="u"){
        vowels++
    }
})
console.log("vowels:",vowels);


