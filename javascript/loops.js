///                      if loooop   ///////

var securedMarks=60;
var passedMarks=35;
if(securedMarks<passedMarks){
    console.log('fail');
}
else if(securedMarks==passedMarks){
    console.log('pass with grace marks')
}
else{
    console.log('pass')
}

//         switch statement 

var color='yellow';
switch(color)
{
    case"red": console.log('color is red');break;
    case"yellow": console.log('color is yellow');break;

    default: console.log("no matching color");break;
}

//           while loops:: it checks the condition the exucte the block                 //

var i=1;
while(i<=5){
    console.log(i);
    i++;
}

//         do-while loops:: it execute the block and then check the condition 

console.log(" ");
var i=10;
do{
    console.log(i);
    i++;
}while(i<=15);

//                 for loopppppppppppp ///

console.log(' ');
for (var i=20; i<=25; i++){
    console.log(i);
}

//         break statement         //

for (var i=0; i<=10; i++){
    if(i==5){
        break;
    }
    
}
for (var i=0; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i);

}

//       continue statement                //
for (var i=0; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);

}



