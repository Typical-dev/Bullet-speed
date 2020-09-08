var thickness,wall, wall2, wall3, wall4;
var bullet,bullet2,bullet3,bullet4,speed,weight;
var divide1,divide2,divide3,divide4,divide5;
var lbullet, lwall;

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    speed=random(223,321);
    weight=random(30,52);
    thickness=random(22,83);

    bullet=createSprite(50,400,60,20);
    bullet.velocityX = speed;

    bullet2=createSprite(50,200,60,20);
    bullet2.velocityX = speed;

    bullet3=createSprite(50,600,60,20);
    bullet3.velocityX = speed;

    bullet4=createSprite(50,800,60,20);
    bullet4.velocityX = speed;

    wall=createSprite(1800,400,thickness,height/8);
    wall2=createSprite(1800,200,thickness,height/8);
    wall3=createSprite(1800,600,thickness,height/8);
    wall4=createSprite(1800,800,thickness,height/8);
}

function draw(){
  background("#000000");

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  if(hasCollided(bullet2,wall2))
  {
    bullet2.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)

    if(damage>10)
    {
      wall2.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall2.shapeColor=color(0,255,0);
    }
  }

  if(hasCollided(bullet3,wall3))
  {
    bullet3.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)

    if(damage>10)
    {
      wall3.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall3.shapeColor=color(0,255,0);
    }
  }

  if(hasCollided(bullet4,wall4))
  {
    bullet4.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)

    if(damage>10)
    {
      wall4.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall4.shapeColor=color(0,255,0);
    }
  }
 

    divide1=createSprite(50,500,10000,10);
    divide2=createSprite(50,900,10000,10);
    divide3=createSprite(50,700,10000,10);
    divide4=createSprite(50,300,10000,10);
    divide5=createSprite(50,100,10000,10);
    divide1.shapeColor=color(255, 255, 255)
    divide2.shapeColor=color(255, 255, 255)
    divide3.shapeColor=color(255, 255, 255)
    divide4.shapeColor=color(255, 255, 255)
    divide5.shapeColor=color(255, 255, 255)


  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return(true);
  } else {
    return(false);
  }
}