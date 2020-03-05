var a1 ,a2,a3,a4;
var increase1=true;
var increase2=true;
function setup() {
    createCanvas(400,400);
  a1 = createSprite(100, 200, 50, 50);
  a2 = createSprite(300,200,50,50)
  a1.shapeColor="green"
  a2.shapeColor="green"
  a1.velocityX=4
  a2.velocityX=-4

  a3 = createSprite(200, 100, 50, 50);
  a4 = createSprite(200,300,50,50)
  a4.shapeColor="yellow"
  a3.shapeColor="yellow"
  a3.velocityY=4
  a4.velocityY=-4
  background(0,0,0);  
}

function draw() {
  background(0,0,0)
  
  
  
  
  if(a2.x-a1.x<a2.width/2+a1.width/2&&

     a1.x-a2.x<a1.width/2+a2.width/2&&

     a2.y-a1.y<a2.height/2+a1.height/2&&

     a1.y-a2.y<a1.height/2+a2.height/2){
     if(a1.velocityX<=4){
     a1.velocityX=a1.velocityX*-1.2
     a2.velocityX=a2.velocityX*-1.2
     increase1 = true;
     } else if (a1.velocityX>4 && a1.velocityX<50) {
       if (increase1 == true){
          a1.velocityX=a1.velocityX*-1.2
          a2.velocityX=a2.velocityX*-1.2
       } else {
        a1.velocityX=a1.velocityX*-0.8
        a2.velocityX=a2.velocityX*-0.8
       }
     } else if(a1.velocityX>=50){
           a1.velocityX=a1.velocityX*-0.8
           a2.velocityX=a2.velocityX*-0.8
           increase1 = false
          
    }
     
     background(0,0,255)
     
   }
    else{
    a1.shapeColor="green"
    
  }

   if(a4.x-a3.x<a4.width/2+a3.width/2&&

    a3.x-a4.x<a3.width/2+a4.width/2&&

    a4.y-a3.y<a4.height/2+a3.height/2&&

    a3.y-a4.y<a3.height/2+a4.height/2){

      if(a3.velocityY<=4){
        a3.velocityY=a3.velocityY*-1.2
        a4.velocityY=a4.velocityY*-1.2
        increase2 = true;
        } else if (a3.velocityY>4 && a3.velocityY<50) {
          if (increase2 == true){
             a3.velocityY=a3.velocityY*-1.2
             a4.velocityY=a4.velocityY*-1.2
          } else {
           a3.velocityY=a3.velocityY*-0.8
           a4.velocityY=a4.velocityY*-0.8
          }
        } else if(a3.velocityY>=40){
              a3.velocityY=a3.velocityY*-0.8
              a4.velocityY=a4.velocityY*-0.8
              increase2 = false;
             
       }
    background(0,0,255)
    
     } 
   else{
   a3.shapeColor="yellow"
   
  }
    if(a2.x>400-a2.width/2){
      
     a2.velocityX=a2.velocityX*-1
    }
    if(a1.x<a1.width/2){
           
    a1.velocityX=a1.velocityX*-1
    background(255,0,0);
  }

  if(a4.y>400-a4.height/2){
      
    a4.velocityY=a4.velocityY*-1
   }
   if(a3.y<a3.height/2){
          
   a3.velocityY=a3.velocityY*-1
   background(255,0,0);
 }

 
 console.log(a3.velocityY)
 //console.log(a1.velocityX)
  drawSprites();
}