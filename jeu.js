
window.addEventListener("DOMContentLoaded",function(){
    var dino=document.getElementById("dino");
    var obstacle=document.getElementById("obstacle");
    var start=document.getElementById("start")
    var road=document.getElementById("road")
    var cloud=document.getElementById("cloud")
    var score=document.getElementById("score");
    var gameOver=document.getElementById("gameOver")
    var point=parseInt(0);
    var scoreIntervalle ;
    var userScore=document.getElementById("pt")
    var restart=document.getElementById("restart")
    
start.addEventListener("click",function(e){
  
    obstacle.classList.add("obsAnimation")
     road.classList.add("roadAnimate")
     start.style.display="none"
     cloud.classList.add("cloudAnimate");
     scoreIntervalle=setInterval(function(){
         score.innerText="score:"+point;
         point++;
     },500)
})
    window.addEventListener("keypress",function(e){
        if(e.code=="Space"){
            dino.classList.add("persoAnimation");
          setTimeout(function(){
            dino.classList.remove("persoAnimation")
          },500)
        }
      
    })
    
  setInterval(function(){
    var dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var obsLeft=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(dinoTop>245&&obsLeft>0&&obsLeft<100){
    gameOver.style.display="block"
   restart.innerText="Restart"
    obstacle.style.animationPlayState="paused";
    road.style.animationPlayState="paused";
    cloud.style.animationPlayState="paused";
      clearInterval(scoreIntervalle);
      userScore.innerText="Your score :"+(point-1);
    


    }
  },1)
   
})


