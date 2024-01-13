let userScore=0;
let compscore=0;
let x=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorepara=document.querySelector("#user-score");
let compScorepara=document.querySelector("#comp-score");
let y=() =>{
    let options=["rock","paper","scissors"];
    let randindex=Math.floor(Math.random()*3);
    return options[randindex];
}
const drawgame =() =>{
    console.log("game was draw . ");
    msg.innerText="Game was draw ";
    msg.style.backgroundColor="#081b31";
}
const show=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        // d.style.backgroundColor="aqua";
    }
    else{
        compscore++;
        compScorepara.innerText=compscore;
        msg.innerText=`You lose  ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";
    // d.style.backgroundColor="aqua";
}
}
let z=(userchoice) =>{
    console.log("user choice = ",userchoice);
    let compchoice=y();
    let d=document.querySelector(`#${compchoice}`);
    // console.log(d);
    d.style.backgroundColor="black";
    console.log("comp choice = ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors"?false:true;
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        show(userwin,userchoice,compchoice);
    }
};
let r=()=>{
    let img=document.querySelectorAll(".choice");
    for(let i of img){
        i.style.backgroundColor="aqua";
    }
};
x.forEach((choice)=>{
    let w=document.querySelectorAll(".choice");
    w.forEach((h)=>{
        console.log(h);
        h.addEventListener('mouseover', () => {
            h.style.backgroundColor = 'blue';
          });
          h.addEventListener('mouseout', () => {
            h.style.backgroundColor = ''; // reset to original color
          });
    })
    console.log(choice);
    // let e = document.querySelector("body");
    // e.style.backgroundColor="aqua";
    choice.addEventListener("click",() =>{
        r();
        let userchoice = choice.getAttribute("id");
        // let ig=document.querySelector(`#${userchoice}`);
        // ig.style.backgroundColor="red";
        z(userchoice);
    });
});