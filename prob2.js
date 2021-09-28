// //Happy Numbers 

// let number = 13
// let numArray = number.toString().split('').map(iNum => parseInt(iNum, 10));
// let sqNumTotal = 0
// //let keepArray =  sqNumTotal.toString().split('').map(iNum => parseInt(iNum, 10));
// let trackLoop =  true
// console.log(numArray)


// function squareNum(number){
 
              
//         for(let i = 0; i<number.length; i++){
//                 sqNumTotal += Math.pow(number[i],2)
//                 console.log(sqNumTotal)

              
//   }
// }

// squareNum(numArray)


//Prime numbers between 1-100

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

for(let i = 0; i < 100; i++){
    if(isPrime(i))  primeArray.push(i) ;
    }

console.log('These are Prime ' + primeArray  )

//