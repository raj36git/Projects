let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let msgBox  = document.querySelector(".msgBox");
let msg  = document.querySelector("#msg");
let newGame  = document.querySelector(".newGame");

let winner = ["Razz","Raju"];


let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let resetGame = () =>{
    turn0 = turn0;
    count = 0;
    enableBox();
    msgBox.classList.add("hide")
  }

  let enableBox = () =>{
    for (const box of btns) {
        box.disabled = false;
        box.innerText = "";
    }
  }
  btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(turn0){
            btn.innerText = "O";
            turn0 = false;
        }else{
            btn.innerText = "X";
            turn0 = true;
        }
        btn.disabled = true;
        count++;

        let isWinner = checkWinner();

        if( count === 9 && !isWinner){
            gameDraw();
        }
    })
  })

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgBox .classList.remove("hide");
    disableBox();
  };

  function checkWinner(){
    for (let pattern of winPatterns) {
        let pos1Val =  btns[pattern[0]].innerText;
        let pos2Val =  btns[pattern[1]].innerText;
        let pos3Val =  btns[pattern[2]].innerText;  

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                if(pos1Val.innerText == "O"){
                    displayWinner(winner[0]);
                }else{
                    displayWinner(winner[1]);
                }
            return true;
            }
        }
    }
  }

  let disableBox = () =>{
    for (const box of btns) {
        box.disabled = true;
    }
  }

  let displayWinner = (winner)=>{
    msg.innerText =  `Congrats ${winner}, you are the Winnerrrrr`;
    msgBox.classList.remove("hide");
    disableBox();
  }

  reset.addEventListener("click", resetGame);
  newGame.addEventListener("click", resetGame);