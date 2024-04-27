#! /usr/bin/env node 

import inquirer from "inquirer";

let RandomNumber = Math.floor( Math.random()* 6 + 1);
let answer = await inquirer.prompt (
    [
        {
            name: "UserGuessNumber",
            type: "number",
            message: "Guess the random number between 1 tO 6: ",
        }
    ]
)

// console.log(answer);

if(answer.UserGuessNumber === RandomNumber){
    console.log("Congratulation! You guess the right number.");
} 
else{
    console.log("You guess the wrong number.");
}