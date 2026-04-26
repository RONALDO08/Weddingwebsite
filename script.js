// OPEN
function openInvite(){
  document.getElementById("overlay").style.display="none";
  document.getElementById("audio").play();
}

// MUSIC
let playing=false;
function toggleMusic(){
  const a=document.getElementById("audio");
  if(playing){ a.pause(); }
  else{ a.play(); }
  playing=!playing;
}

// COUNTDOWN
const target=new Date("2026-06-06");

setInterval(()=>{
  const diff=target-new Date();
  document.getElementById("d").innerText=Math.floor(diff/86400000);
},1000);

// FLOWER
const canvas=document.getElementById("flowers");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let petals=Array.from({length:20},()=>({
 x:Math.random()*canvas.width,
 y:Math.random()*canvas.height
}));

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 petals.forEach(p=>{
  ctx.fillStyle="pink";
  ctx.fillRect(p.x,p.y,3,3);
  p.y+=1;
  if(p.y>canvas.height)p.y=0;
 });
 requestAnimationFrame(draw);
}
draw();