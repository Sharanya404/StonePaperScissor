let uScore=0;
let cScore=0;

const choices= document.querySelectorAll(".choice");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");
let msgShown=document.querySelector("#msg");

const genCompChoice = () =>{
    const options=["Stone","Paper","Scissors"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
} 
const drawGame=() =>{
    msg.innerText="Game is draw. Play again !"
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        uScore++;
        userScore.innerText=uScore;
        msg.innerText=`You win ! ${userChoice} takes over ${compChoice}`
        msg.style.backgroundColor="green";
    }
    else{
        cScore++;
        compScore.innerText=cScore;
        msg.innerText=`You lose ! ${compChoice} takes over ${userChoice}`
        msg.style.backgroundColor="red";
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

const playGame = (userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="Stone"){
            userWin=compChoice==="Scissors"?true:false;
        }
        else if(userChoice==="Paper"){
            userWin=compChoice==="Stone"?true:false;
        }
        else{
            userWin=compChoice==="Paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}