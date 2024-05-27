#! /usr/bin/env node
import inquirer from "inquirer"
const answer :{
    sentence:string
}=await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"Enter your Sentence to cont the word"
}
])
const words = answer.sentence.trim().split(" ")
// Print the array of word to the console
console.log(words)
//Print the word count of sentenc eto console
console.log(`Your sentence word count is ${words.length}`)