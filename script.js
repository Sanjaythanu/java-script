// // // // // // Variables
// // // // // var a=100;
// // // // //  let b=200;
// // // // //  const c=300;
// // // // //  {
// // // // //     var a=100;
// // // // //  let b=200;
// // // // //  const c=300;
// // // // //  }
// // // // // var a=200;
// // // // //  b=300;
// // // // //  console.log(a);
// // // // //  console.log(b);
// // // // //  console.log(c);

// // // // // Data types

// // // // let a=10;
// // // // let b=20;
// // // // console.log(a);
// // // // console.log(b);
// // // // console.log(typeof(a));
// // // // console.log(typeof(b));

// // // // // 2 string
// // // // let cname="BIT";
// // // // let grade='A';
// // // // console.log(cname);
// // // // console.log(typeof((cname)));
// // // // console.log(typeof((grade)));
// // // // // booolean 3
// // // // let pass=true;
// // // // console.log(pass)
// // // // console.log(typeof(pass));
// // // // // null 4
// // // // let data=null;
// // // // console.log(typeof(data));
// // // // //  undefined 5
// // // // let  val;
// // // // console.log(typeof(val));
// // // // // bigint
// // // // let phoneno=223456789;
// // // // console.log(typeof(phoneno));

// // // // let age=25;
// // // // console.log("MY name is ", cname ,"My age is",age);
// // // // //  operators

// // // // console.log(a+b);
// // // // console.log(a-b);
// // // // console.log(a*b);
// // // // console.log(a/b);
// // // // console.log(a%b);
// // // // console.log(2**3);

// // // // //  assignment operators

// // // // console.log(a+=b);
// // // // console.log(a);

// // // // // comparison operator

// // // // console.log(a>b);
// // // // console.log(a<b);
// // // // console.log(a>=b);
// // // // console.log(a<=b);
// // // // console.log(a==b);
// // // // console.log(a!=b);
// // // // console.log(a===b);

// // // // // logical 
// // // // console.log(a >b && a==b);

// // // // console.log('10' * 10);


// // // // let marks=Number(prompt("Enter your mark"));
// // // // if(marks>=90 && marks<=100){
// // // //     console.log("A grade");
// // // // }
// // // // else if(marks>=60 && marks<=89){
// // // //     console.log("B grade");
// // // // }
// // // // else{
// // // //     console.log
// // // // }


// // // // function fact(n){
// // // //     if(n<=1)
// // // //         return n;
// // // //     return n*fact(n-1);
// // // // }
// // // // fact(5)


// // // // const add=(a,b) =>{
// // // //     return a*b;
// // // // }
// // // // console.log(add(10,20));


// // // //  call back function


// // // // 

// // // // function greet(name,callback){
// // // //     console.log("hello ",name);
// // // //     callback("sri");
// // // //     typo("vijay");
// // // // }
// // // // function hai(name1){
// // // //     console.log("Batman ",name1);
// // // // }
// // // // function typo(name2){
// // // //     console.log("tvk ",name2);
// // // // }
// // // // greet("Sanjay",hai);



// // // // setTimeout(()=>{
// // // //     console.log("Vizhi veekura")
// // // // },10000)


// // // // let count=1;
// // // // let timer =setInterval(()=>{
// // // //     console.log("Welcome to Bit");
// // // //     count++;
// // // //     if(count==11){
// // // //         clearInterval(timer);
// // // //     }
// // // // },2000)



// // // //  Arrays

// // // let array =[1,2,3,"BIT",true,'a','b','c']
// // // console.log(array[3]);
// // // array[3]="sanjay loves sri"
// // // console.log(array);
// // // console.log(array[array.length-1]);
// // // array.push('d');
// // // console.log(array.pop()); // ro remove last element
// // // array.shift(); // remove first element and make the other elements in te suffix place
// // // console.log(array);
// // // array.unshift("hello"); // add elements in the first
// // // console.log(array);
// //  let arr1=[5,3,2,1]
// // // console.log(arr1.sort());
// // // console.log(arr1.reverse());
// // // console.log(arr1.includes(5));
// // // console.log(arr1.indexOf(2));

// // // console.log(arr1);
// // // arr1.slice(1,3);
// // // console.log(arr1.slice(0,3));
// //  arr2=[10,20,30];
// // // console.log(arr2);
// // // arr3=arr1.concat(arr2);
// // // console.log(arr3);


// // newarray=[...arr1]//spread of in js to copy
// // arr4=[...arr2];
// // console.log(newarray);
// // console.log(arr4);


// // heiger order functions

// // let arr=[1,2,3,4,5];
// // let nummul=arr.map(val=>val*2);
// // console.log(nummul);


// // let oddsum=arr.filter(val=>val%2!=0);
// // console.log(oddsum);

// // let numbers=arr.reduce((arr,val)=>arr*val,1);
// // console.log(numbers);

// //  Objects

// User={
//     username:"Sanjay",
//     Age:20,
//     city:"Chennai"

//     Login(){
//        console.log("Your are login ",User.); 
//     }
//     User2:{
//         username:"mango",

//     }

// }
// console.log(User);
// console.log(User.username);
// console.log(User.age);
// console.log(User.city);
// User.city="banglore";
// console.log(User);


// Document object model


function changeTitle(){
    let h1=document.getElementById('h1')
    h1.innerHTML="Pambu ulagam"
}
function trickortreat(){
    let h2=document.getElementById('h2')
    h2.innerHTML="hello niggesh"
}









