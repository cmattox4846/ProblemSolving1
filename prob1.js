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

