console.log(1); // console.log() used as print command in js
console.log("Abhinav");

//                 variable in java script                 //
//  variable can change  
var name="scott";
var age=20;
// var name="scott",age=20;
console.log(name);
console.log(age);

const hourperday=24;//contant which cannot change 


/*             operator in javascript         */

let a =10, b=3;
let d=a**b  // airthmetical operator
let c=a+b;


          // assignment operator
var l=100;
 l +=10;//a=a+10

 console.log(l);

 var m=10;
 console.log(m);
 var j=++a;// m=11 first, b=11 (pre increment)
 console.log(a,b);

 var x=10;
 console.log(x);
 var z=x++;// x=10 return irst, a=11(post increment)
 console.log(x,z)

 var r=10; y=11;
 console.log(r==y);
 console.log(r!=y);  //realtional operator


//logical operator((&&-one statment is true)
                //  (||- one statment is false))
 var q=10,n=20, t=10;
 var k= q==t && q>c;// true or false 
 
 console.log(k);

//  adding two variable or string and creating new string
 var username="scott", age=20;
 var message="hey"+username + "your age is"+ age;
 console.log(message);


 // hoisting in js: means local varaiable or glolabal variabl
 //   always declared at the begning of program and does not give errror

 console.log('statment 1',u);
 console.log('statment 2');
 console.log('statment 3');
var u=1;
 console.log('statment 4');
 console.log('statment 5');


// Let keyword  and var keyword both can act as global and local variable but in blocks (for and if etc) let act as block variable        //
// and it does not act as global variable

var y=10; //global variable
let p=20; //global variable
if(1==1){
    let z=10;     // block level variable
}
console.log(z);    // shows error becasue z is block variable