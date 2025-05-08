// const guess = prompt("Guess a Random number Between 1 to 10");
// let number = Math.floor((Math.random()*10)+1);
//     if(guess == number){
//         console.log("You are correct");
//     }else{
//         console.log("You're Guess is incorrect");
//     }
//     console.log("correct number is ",number);    



const max = prompt("Enter the max number");
let number = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number from 1 to 10");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == number){
        console.log("Your Guess is correct, Your Guess is :",number);
        break;
    }
    else{
        guess = prompt("Your guess is incorrect, Try again");
    }
}