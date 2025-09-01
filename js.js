function getComputerChoice(){
   let random= Math.floor(Math.random()*10);
   let computerChoice= random>6 ? "ROCK": random>3 ? "PAPER": "SCISSORS";
   console.log("computer: "+computerChoice)
   return computerChoice
}

const resultDiv=document.querySelector(".result")
const scoreDiv=document.querySelector(".score")


let HumanScore=0
let ComputerScore=0
let result=''
 
const btns=document.querySelectorAll("button")
btns.forEach(btn=>
    {btn.addEventListener("click",function(e){
     if (HumanScore === 5 || ComputerScore === 5) {
            let winner=(HumanScore==5)?"You are": "Computer is"
            resultDiv.innerText = `${winner} the winner. Refresh to play again.`;
            return;
        }
    let computerChoice=getComputerChoice()
    let humanChoice=e.target.textContent
    console.log("you: "+humanChoice)
    if(computerChoice==humanChoice){result="equality"
    }else{
        switch(humanChoice){
            case "ROCK":
                if(computerChoice=="SCISSORS"){
                    HumanScore++
                    result="You win"
                }else{ComputerScore++ 
                    result="You loose"
                }
                break;
            case "SCISSORS":
                if(computerChoice=="PAPER"){
                    HumanScore++
                    result="You win"
                }else{
                    ComputerScore++ 
                    result="You loose"
                }
                break;
            case "PAPER":
                if(computerChoice=="ROCK"){
                    HumanScore++
                    result="You win"
                }else{
                    ComputerScore++ 
                    result="You loose"
                }
                break;
        }}
    resultDiv.innerText=result
    scoreDiv.innerText=`Your score: ${HumanScore} | Computer's score:${ComputerScore}` 
})})


