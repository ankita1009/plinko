var ground;

 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var engine,world;

 var particles;
 var plinko=[];
 var plinko1=[];
 var plinko2=[];
 var plinko3=[];
 var divisions=[];

 var divisionHeight=300;

function setup() {

  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
   engine=Engine.create();
   world=engine.world;

  ground=new Ground(240,795,480,10);
  //divisions=new Divisions(0,480,10,300);

    

  for(var i = 0;i <= width;i = i+80) {
    divisions.push(new Divisions(i,height-divisionHeight/2,7,divisionHeight));
   }

   for(var k = 0; k <= width; k = k + 50) {
     plinko.push(new Plinko(k,100,15));
   }

   for(var j = 40; j <= width; j = j + 44) {
    plinko1.push(new Plinko(j,200,15));
  }

  for(var a = 0; a <= width; a = a + 50) {
    plinko2.push(new Plinko(a,300,15));
  }

  for(var b = 40; b <= width; b = b + 44) {
    plinko3.push(new Plinko(b,400,15));
  }
    
 if(frameCount%90===0) {
   particles.push(new Particles(random(width/2-10,width/2+10),10,10));
 }
  
}

 function draw() {
  background("black");  
  Engine.update(engine);
    ground.display();

    for(var i = 0; i < divisions.length;i++) {

      divisions[i].display();
    }

    for(var k = 0; k < plinko.length;k++) {

      plinko[k].display();
    }

    for(var j = 0; j < plinko.length;j++) {

      plinko1[j].display();
    }

    for(var a = 0; a < plinko.length;a++) {

      plinko2[a].display();
    }

    for(var b = 0; b < plinko.length;b++) {

      plinko3[b].display();
    }
    
    particles.display();
}

 