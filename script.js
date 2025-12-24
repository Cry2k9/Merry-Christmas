const leftGroup = document.getElementById('leftStars');
const rightGroup = document.getElementById('rightStars');
const lightsGroup = document.getElementById('lights');
const baublesGroup = document.getElementById('baubles');
const garlandsGroup = document.getElementById('garlands');
const candyGroup = document.getElementById('candy');
const bellsGroup = document.getElementById('bells');
const topStar = document.getElementById('topStar');

const centerX = 150;
let y = 50;
let radius = 6;
let delay = 0;
const totalLayers = 220;

/* 🎄 Tree grows with stars, decorations, lights, garlands */
for (let i = 0; i < totalLayers; i++) {
  const angle = i * 0.32;
  const layerRadius = radius * (i < totalLayers-15 ? 1 : 1.2);

  const starSizeLeft = Math.random() > 0.85 ? 2.5 : 1.6;
  const starSizeRight = Math.random() > 0.85 ? 2.5 : 1.6;

  // Left star
  const xLeft = centerX + Math.cos(angle)*layerRadius;
  const leftStar = document.createElementNS("http://www.w3.org/2000/svg","circle");
  leftStar.setAttribute("cx",xLeft);
  leftStar.setAttribute("cy",y);
  leftStar.setAttribute("r",starSizeLeft);
  leftStar.classList.add("star");
  leftStar.style.animationDelay=`${delay}s`;
  leftStar.style.filter= starSizeLeft>2?"drop-shadow(0 0 6px white)":"drop-shadow(0 0 3px white)";
  leftGroup.appendChild(leftStar);

  // Right star
  const xRight = centerX - Math.cos(angle)*layerRadius;
  const rightStar = document.createElementNS("http://www.w3.org/2000/svg","circle");
  rightStar.setAttribute("cx",xRight);
  rightStar.setAttribute("cy",y);
  rightStar.setAttribute("r",starSizeRight);
  rightStar.classList.add("star");
  rightStar.style.animationDelay=`${delay}s`;
  rightStar.style.filter= starSizeRight>2?"drop-shadow(0 0 6px white)":"drop-shadow(0 0 3px white)";
  rightGroup.appendChild(rightStar);

  // Lights
  if(i%5===0){
    const light = document.createElementNS("http://www.w3.org/2000/svg","circle");
    light.setAttribute("cx", centerX + (Math.random()>0.5?layerRadius:-layerRadius)*0.9);
    light.setAttribute("cy", y);
    light.setAttribute("r", 1.5);
    light.setAttribute("fill", ["red","green","blue","yellow","orange"][Math.floor(Math.random()*5)]);
    light.classList.add("light");
    lightsGroup.appendChild(light);
  }

  // Baubles
  if(i%12===0 && Math.random()>0.6){
    const bauble = document.createElementNS("http://www.w3.org/2000/svg","circle");
    bauble.setAttribute("cx", centerX + (Math.random()>0.5?layerRadius:-layerRadius)*0.8);
    bauble.setAttribute("cy", y);
    bauble.setAttribute("r", 3 + Math.random()*2);
    bauble.classList.add("bauble");
    baublesGroup.appendChild(bauble);
  }

  // Candy canes
  if(i%25===0 && Math.random()>0.6){
    const candy = document.createElementNS("http://www.w3.org/2000/svg","rect");
    candy.setAttribute("x", centerX + (Math.random()>0.5?layerRadius:-layerRadius)*0.7 - 2);
    candy.setAttribute("y", y);
    candy.setAttribute("width", 4);
    candy.setAttribute("height", 10);
    candy.classList.add("candy");
    candyGroup.appendChild(candy);
  }

  // Bells
  if(i%20===0 && Math.random()>0.7){
    const bell = document.createElementNS("http://www.w3.org/2000/svg","circle");
    bell.setAttribute("cx", centerX + (Math.random()>0.5?layerRadius:-layerRadius)*0.75);
    bell.setAttribute("cy", y);
    bell.setAttribute("r", 3);
    bell.classList.add("bell");
    bellsGroup.appendChild(bell);
  }

  // Garlands
  if(i%30===0){
    const garland = document.createElementNS("http://www.w3.org/2000/svg","path");
    const startX=centerX-layerRadius*0.8;
    const endX=centerX+layerRadius*0.8;
    garland.setAttribute("d", `M${startX},${y} Q${centerX},${y+3} ${endX},${y}`);
    garland.classList.add("garland");
    garlandsGroup.appendChild(garland);
  }

  y+=1.7;
  radius+=0.45;
  delay+=0.03;
}

/* ⭐ Top star */
setTimeout(()=>{topStar.style.opacity=1;}, delay*1000);

/* ❄️ Soft snow */
for(let i=0;i<120;i++){
  const snow = document.createElement('div');
  snow.className='snowflake';
  snow.style.left=Math.random()*100+'vw';
  snow.style.animationDuration=6 + Math.random()*6 + 's';
  snow.style.opacity=Math.random()*0.5 + 0.2;
  snow.style.width = snow.style.height = (1 + Math.random()*2)+'px';
  document.body.appendChild(snow);
}

/* 🌠 Shooting stars */
setInterval(()=>{
  const star = document.createElement('div');
  star.className='shooting-star';
  star.style.top = Math.random()*40+'vh';
  star.style.left = 100 + Math.random()*20+'vw';
  document.body.appendChild(star);
  setTimeout(()=>star.remove(),1500);
},4000);

/* ❄️ Soft snow with wind */
for (let i = 0; i < 120; i++) {
  const snow = document.createElement('div');
  snow.className = 'snowflake';
  snow.style.left = Math.random() * 100 + 'vw';
  snow.style.animationDuration = 6 + Math.random() * 6 + 's';
  snow.style.opacity = Math.random() * 0.5 + 0.2;
  snow.style.width = snow.style.height = (1 + Math.random() * 2) + 'px';
  document.body.appendChild(snow);
}

/* 🌠 Shooting stars */
setInterval(() => {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.top = Math.random() * 40 + 'vh';
  star.style.left = 100 + Math.random() * 20 + 'vw';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1500);
}, 4000);
