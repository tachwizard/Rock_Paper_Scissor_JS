let game = confirm("Do you want to play with me rock paper scissor!");
if(game){
    let humanChoice= prompt("Enter your choice like rock, paper or scissor!");
    let playerHuman = humanChoice.toLowerCase();
    if(playerHuman === "rock" || playerHuman === "paper" || playerHuman === "scissor"){
        let compChoice = Math.floor(Math.random() * 3 + 1);
        let playerComputer = compChoice === 1 ? "rock" : compChoice === 2 ? "paper" : "scissor"; 
        let result =
         playerHuman === playerComputer
         ? "game Tied!!"
         :playerHuman === "rock" && playerComputer === "paper"
         ? `I am the Winner!! Human : ${playerHuman}}, Computer : ${playerComputer}`
         :playerHuman === "paper" && playerComputer === "scissor"
         ? `I am the Winner!! Human : ${playerHuman}, Computer : ${playerComputer}`
         :playerHuman === "scissor" && playerComputer === "rock"
         ?`I am the Winner!! Human : ${playerHuman}, Computer : ${playerComputer}`
         :`You are the Winner!! Human : ${playerHuman}, Computer : ${playerComputer}`;
         window.alert(result);

    }
    else{
        window.alert("Are you mad!! enter a valid option..play from start reload the page (press ctrl + R)");
    }
}
else{
    window.alert("maybe next time");
}