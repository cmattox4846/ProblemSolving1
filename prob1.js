// // Reverse a string

// let string = 'hello'
// let reverseWord =""

// for(let i=string.length - 1; i>=0; i--){
//     reverseWord += string[i]
//     }
// console.log(reverseWord)

// //Capitalize Letter

let string1 = 'hello world';
let completeCapString = ' '

// change first letter of srting to upper case



//cycle through the string array in order to find new word and cap it

for(let i = 0; i < string1.length; i++){
    if(i == 0){
        completeCapString = string1[i].toUpperCase()
    }
    else if (string1[i - 1]  === ' '){
        completeCapString += string1[i].toUpperCase();
    }else {
        completeCapString += string1[i]
    }
    console.log (completeCapString)
}
console.log(completeCapString)
