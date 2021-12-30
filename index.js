
// console.log(" HI GUVI");
// console.log(74 + 5);

// var g1 =5;
// var g2 = "5";
// console.log(g1 == g2);
// console.log(g1 === g2);
// console.log(8 * "7")
// typeof '5'
// var v1 = 4;
// var v2 = 4;

// var y1 =[100, 200];
// var y2 =[100,200];
// var y3 =y1;
// console.log(v1 === v2);
// console.log(y1 === y2);
// console.log(y1 === y3);

// y2.push(5);
// y1.push(10);
// y3.push(40);
// console.log(y1);
// console.log(y2);
// console.log(y3);
// var marks =[10,20,30,40,50];
// for(var i =0; i < marks.length;i++){
//     console.log("i is ",i,"value is",marks[i]);
// }


// //loop an object

// var student = {
//     name:"Vani",
//     batch:"b31wd",
//     gender:"female",
// };

// console.log(student.name)

// for(var key in student){
//     console.log("key is",student[key]);
// }
// // who will be greater
// //  var marks =[40, 90, 80 ,20, 30];
// //  var max = marks[0];

// //  for (var mark of marks){
// //      if (mark > max){
// //          max = mark;
// //      }
// //  }
// // console.log(max);

// // //inbelt function to find big number
// // console.log("max",Math.max(91,20))

// // function avg(marks){
// //     var sum = 0;
// //     for(var mark of marks){
// //         sum = sum + mark;

// //     }
// //     return sum;

// // }


// // //console.log((6,5));

// // function double(num){
// //     var twice = num*2
// // }
// // double(10);
// // //console.log(twice)


// // function nice1(){
// //     for(var i=0; i<10; i++){}

// //     console.log(i);
// // }

// // function nice2(){
// //     for(let i=0; i<10; i++){}

// //     console.log(i);
// // }
// // nice1();
// // nice2();

// // function fun(){ 
// //     console.log(a)
// //     var a = 10;
//  //

// // 
// /*
// (function double(n){
//     console.log(n*2);
// })(10);



//  (function (n){
//     console.log(n*2);
//  })(10);

//  const areaOfCircle = (radius) => Math.PI * radius* radius;
//  console.log(areaOfCircle(1));
// */

//  var sum = (a, b) => a + b;
//  console.log(sum(101, 20));

// //if he function
//  (function (n){
//      console.log(n*2);
//  })(20);


//  const fullname = (firstname, lastname) =>
//  'Welcome ${lastname}, ${firstname} 😍!!!';
//  console.log(fullname("ganesh", "chillz"));

//  const arr = [10, 70, 40, 80];
//  console.log(arr.map((num) => num *  2));

//  var chil = [10, 30, 40, 50];
//  console.log(chil.map((num) => num * 3));

//  const pets = ["cats", "dogs", "parrots", "fish", "cow", "pegion"];
// console.log(pets.map((num) => num.length));

// var students =[{
//     name = "ganesh",
//     sub = 40
// },
// {
//     name = "gokul",
//     sub = 60
//     ,

// }]

// const failedNames2 =
// scores 
//  .fileter((score)=> score.marks < 40)
//  .map((score)=> score.name)
//  .map((name)=> 'Hello', ${name}');
//  ///
/*
const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];

*/

//45.428 avg
//debra topper
// Task - MRF
// 1. Find average marks in the class (scores) - 1 method
// 45.428

// 2. Find the topper's name - 1 method
// "Debra Beard

//const sum = scores.reduce((sum, curr) => sum + curr.marks, 0);
//const average = sum / scores.length;
//console.log(average.toFixed(3));


//const chillz=[1, 2, 3].map((n)=>{
//console.log(n*2);
//return n*2;
//});
//console.log(chillz);


// Task - difference
// 1. call
// 2. apply
// 3. bind

// Write & examples
// Prototype inheritence - Write & examples

// important programming//
let str = 'full Stack Tutoriols'
let output = str
  .split('')
  .reverse('')
  //.join('');
console.log(output);

//-------------------------//
let arr =[1,2,5,6,100];
let sum = arr.reduce((a,i)=>{
  return a+i;
});
console.log(sum);

//////////
let ss =[1,2,3,4,5,'yya'];
let sum1=ss.reduce((a,i)=>{
  return a+i;
});
console.log(sum1);

///////////////
function fun(){
  return{
    name: " full stack",
  };
}

console.log(fun().name);

///////////////

let bb =[ 1, 4, 3, 5];
bb.splice(4);
console.log(bb);

console.log(printFullName.call(student));

console.log(printFullName.call(student, 'Tn', 'India'));
 



