let message1 = document.getElementById("msg1");
let message2 = document.getElementById("msg2");
let message3 = document.getElementById("msg3");

let answer = Math.floor(Math.random() * 100) + 1;
let num_of_guess = 0;
let guessed_num = [];

function play(){
    let user_guess = document.getElementById("guess").value;

    if(user_guess < 1  || user_guess > 100)
    {
        alert("Please Enter a Number Between 1-100");
    }
    else
    {
        guessed_num.push(user_guess);
        num_of_guess += 1;
        
        if(user_guess < answer)
        {
            msg1.textContent = "Your Guess is too Low.";
            msg2.textContent = "No. of Guesses : " + num_of_guess;
            msg3.textContent = "Guessed numbers are : " + guessed_num;
        }
        else if(user_guess > answer)
        {
            msg1.textContent = "Your Guess is too High.";
            msg2.textContent = "No. of Guesses : " + num_of_guess;
            msg3.textContent = "Guessed numbers are : " + guessed_num;
        }
        else if(user_guess == answer)
        {
            msg1.textContent = "You Win!";
            msg2.textContent = "The Number was : " + answer;
            msg3.textContent = "You Guessed it in " + num_of_guess + " Guesses";
            document.getElementById("my-btn").disabled = true;
        }
    }
}