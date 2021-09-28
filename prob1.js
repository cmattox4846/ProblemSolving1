// // Reverse a string

// let string = 'hello'
// let reverseWord =""

// for(let i=string.length - 1; i>=0; i--){
//     reverseWord += string[i]
//     }
// console.log(reverseWord)






// // //Capitalize Letter

// let string1 = 'hello world';
// let completeCapString = ' '

// //cycle through the string array in order to find new word and cap it

// for(let i = 0; i < string1.length; i++){
//     if(i == 0){
//         completeCapString = string1[i].toUpperCase()
//     }
//     else if (string1[i - 1]  === ' '){
//         completeCapString += string1[i].toUpperCase();
//     }else {
//         completeCapString += string1[i]
//     }
//     console.log (completeCapString)
// }
// console.log(completeCapString)







//Compress a string of characters

// let string = 'aaabbbbbccccaacccbbbaaabbbaaa'
// let stringArray =  []
// let stringCount = 1
// let newString = ''

// // turn string in to an array 

// stringArray = string.split('')

// console.log('old string ' + string) 

// // function to compare array values and then keep count of duplicats 

// function checkString(string){
    
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === string[i+1]){
//             stringCount++;
             
//         }
//         else{
//             newString += stringCount + string[i]
            
//             stringCount = 1
//         }
    
//     }  
 
//     console.log('compressed string ' + newString) 
// }

// // calling function
// checkString(stringArray)






// //Bonus Palindrome


// let userInputString 
// let userInput
// let reverseWord =""
// let forwordWord = ""
// let answer



// function masterLoop(inputString){
//     checkReverse(userInputString)

//     answer = check(reverseWord,userInputString)
//     validate(answer)
// }



// // function for userInput
// function userInputFunction(){
// userInput =" "
// userInput = prompt('Please enter a word to see if it is a palindrome <all lower case>')

// return userInput
// }




// // converting string to reverse

// function checkReverse(string){
    
//     for(let i=string.length - 1; i>=0; i--){
//     reverseWord += string[i]
//     }
//     console.log(reverseWord)

//     for(let i=reverseWord.length - 1; i>=0; i--){
//         forwordWord += reverseWord[i]
//         }
//         console.log(string)
//     }






// //checking if reverse word matches input 

//  function check(reverseWord, string){
      
   
//         if (reverseWord === string){
//             //console.log ('This is a palindrome!')
            
//             return true
//         }
//         else
//         {
//             console.log('This is not a palindrome please try again')
            
//             return false
           
//         }
// }
 



// // validate true or false to rerun the process

//  function validate(trueOrFalse){
    
   
//        if (trueOrFalse === false){
       
//              masterLoop(userInputString)
//         }
//         else
//         {
//             console.log('This is a palindrome!!')
//             trueOrFalse = true
//         }
//     } 
 

 

// //function calls 

// userInputString = userInputFunction()
// masterLoop(userInputString)



