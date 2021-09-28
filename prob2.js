//Happy Numbers 
let number = parseInt(prompt('Please enter a number to be checked'));
let counter;
let accumulator;
let currentItem;
let sum
let numArray
let happyness 

function isHappy(numbers, counter = 0)
{
let result = false
    if (counter < 8){
        
             numArray = numbers.toString().split('').map (numbers => numbers *numbers);
             sum = numArray.reduce((accumulator, currentItem) => accumulator +currentItem, 0)
            console.log(numArray)
            console.log(sum)
                    if (sum === 1){
                        console.log('Your number ' + number + ' is super Happy!')
                        return result = true
                    }else
                    {
                        counter++
                        isHappy(sum,counter)
                    }
        }
        else {
            console.log('Your number ' + number + ' is super sad!')

        }
        return result
}


happyness = isHappy(number,counter)








// let sqNumTotal = 1
// //let keepArray =  sqNumTotal.toString().split('').map(iNum => parseInt(iNum, 10));
// let trackLoop =  true
// console.log(numArray)
// console.log(sum)


// function squareNum(number){
//   let counter = 0
//   let checkTotal = 0
//        while (counter !== 1 ){      
//         if(sqNumTotal === 1 && number !== 1){
//                 for(let i = 0; i<number.length; i++){
//                         checkTotal += Math.pow(number[i],2)
//                         console.log(checkTotal)
//                     }
//                 }
//                     else{
//                         counter = 1
//                     }
                    
//   }
//   return sqNumTotal
// }

//  squareNum(numArray)


// //Prime numbers between 1-100

// function isPrime(num) {
//     if(num < 2) return false;
//     for (var i = 2; i < num; i++) {
//         if(num%i==0)
//             return false;
//     }
//     return true;
// }

// for(let i = 0; i < 100; i++){
//     if(isPrime(i))  primeArray.push(i) ;
//     }

// console.log('These are Prime ' + primeArray  )



//Fibonacci Number

// let numArray =[]
// let amount = parseInt(prompt('Please enter a number'));

// function addNumbers(number){
//     let num =0
//     let num2 = 1
//     let nextValue 
//     for (let i = 1;i<amount;i++){
//        nextValue = num +num2;
//        numArray.push(nextValue)
//        num = num2
//        num2 = nextValue
        
        
//     }
//     console.log(numArray)
// }

// addNumbers(amount)


