console.clear();

let randomNumber =0;

//gives random number from 1 to 100
function getRandomNumber() {
    randomNumber= Math.floor(Math.random() * 100) + 1;
    return randomNumber;
  }


//gives even random number from  1 to 100

function getEvenRandomNumber(){
    if((getRandomNumber())%2 !== 0 ){
        getEvenRandomNumber();
    }
    return randomNumber;
}

// invoking getEvenRandomNUmber()
let evenRandomNumber = getEvenRandomNumber();
console.log(evenRandomNumber);

alert(evenRandomNumber);