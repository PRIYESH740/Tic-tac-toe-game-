let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");

let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

let count=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if (turnO){   //player0
            box.innerText="X";
            box.style.color="#FFD6AF";
            turnO=false;
        }
        else{
           box.innerText="O";
           box.style.color="#BEA7E5";
            turnO=true; 
        }
        box.disabled=true;
        count ++;
        checkWinner();
    })
});

const enableBoxes=()=>{
     for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        count=0;
     }
};

const disableBoxes=()=>{
     for (let box of boxes){
        box.disabled=true;
     }
};

const showWinner=(Winner)=>{
    if (Winner!=""){
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    }
    
}

const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val!="" && pos3Val!=""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                disableBoxes();
            }
            
        }
        if (count===9){
        msg.innerText="Game has tied";
        msgContainer.classList.remove("hide");
    }
    }

}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);