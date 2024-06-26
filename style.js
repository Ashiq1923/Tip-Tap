// bg 
const group = document.querySelector('.group');
for(let i = 1; i < 60; i++){
    const containerId = `iconContainer ${i}`;
    const container = document.createElement('div');
    container.className = 'iconContainer';
    container.id = containerId;
    group.appendChild(container);
    addIcons(containerId);

}
function addIcons(containerId){
    const iconContainer = document.getElementById(containerId);
    const Unicode = [
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
        'X',
        'O',
    ];
    for (let i = 0; i < 100; i++){
        const icon = document.createElement('i');
        icon.className = 'icon fas';
        icon.innerHTML = randomIcon(Unicode);
        iconContainer.appendChild(icon);
    }
}

function randomIcon(values){
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}




let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#reset');
let newgamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;
const winpatterns = [
 [0, 1, 2],
 [0, 3, 6],
 [0, 4, 8],
 [1, 4, 7],
 [2, 5, 8],
 [2, 4, 6],
 [3, 4, 5],
 [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener('click',()=>{
        // console.log ('box click');
       if (turnO) {
        box.innerText = 'O';
        turnO = false;
       }
       else {
        box.innerText = 'X';
        turnO = true;
       }
       box.disabled = true;
       checkwinner();
    });
});
const disableboxes = () =>  {
    for( let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () =>  {
    for( let box of boxes) {
        box.disabled = false; 
        box.innerHTML="";
    }
};


const showWinner = (Winner) => {
  msg.innerText =`Congratulation,  Winner is  (${Winner})` ;
  msgcontainer.classList.remove ('hide');
  disableboxes();
}
const checkwinner = () => {
    for(let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if ( pos1Val !='' &&  pos2Val !='' &&  pos3Val !='') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log ('winner', pos1Val);
                showWinner(pos1Val);
            }
        }
    };
};
newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);