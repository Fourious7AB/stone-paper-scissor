let box = document.querySelectorAll(".box");
let youchoose = document.querySelector("#youchoose");
let comchoose = document.querySelector("#comchoose");
let uupoint = document.querySelector("#uupoint");
let ccpoint = document.querySelector("#ccpoint");
let winmsg = document.querySelector("#winnern");
let cinput = ["rock", "paper", "scissor"];
let cpoint = 0;
let upoint = 0;
box.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        let val = boxes.getAttribute("id");
        console.log("her clicked");
        youchoose.innerText = `You choose:${val}`;
        console.log("you choose:", val);
        wincheck(val);
    });

});
const showWiner = (uwin) => {
    if (uwin) {
        console.log("you Win");
        winmsg.s
        upoint++;
        uupoint.innerText = upoint;
        winmsg.innerText = "You win!!!";
        winmsg.style.backgroundColor = 'green';
    } else {
        console.log("you lose");
        cpoint++;
        ccpoint.innerText = cpoint;
        winmsg.innerText = "You loose";
        winmsg.style.backgroundColor = 'red';
    }
}
const playgame = () => {
    let cpic = Math.floor(Math.random() * 3);
    return cinput[cpic];
};
const wincheck = (val) => {
    let cval = playgame();
    comchoose.innerText = `Computer choose:${cval}`;
    console.log("computer choose:", cval);
    if (val === cval) {
        //draw case
        drawgame();
    }
    else {
        let uwin = true;
        if (val === "rock") {
            //paper.scissor
            uwin = cval === "paper" ? false : true;
        }
        else {
            if (val == "paper") {
                //rock,scissor
                uwin = cval === "scissor" ? false : true;
            }
            else {
                //alt last scissor:paper,rock
                uwin = cval === "rock" ? false : true;
            }
        }
        showWiner(uwin);
    }

};
const drawgame = () => {
    winmsg.innerText = "you both are choose same! Match was Draw!!";
    console.log("draw");
    winmsg.style.backgroundColor = 'black';

};