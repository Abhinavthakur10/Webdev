// creating function

let multiplication = function(a,b)
{

    return a*b;
}
console.log(multiplication(2,2));

////////////

function getsimpleinterest(principle,rateofinterest,noOfyears)
{
    let si=(principle*rateofinterest*noOfyears)/100;
    return(si);
}

let simpleinterest= getsimpleinterest(1000,5,3);
console.log(simpleinterest);