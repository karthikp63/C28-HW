// class Stone{
//     constructor(x,y,width,height){
//         var options={
//             // isStatic:false,
//             'restitution':0.8,
//             'friction':1.0,
//             'density':1.0
//         }
        
//         this.body=Bodies.rectangle(x,y,width,height,options)
//         this.width=width;
//         this.height=height;
//         this.image=loadImage("sprites/stone.png");
//         World.add(world,this.body)
//         this.image=loadImage("sprites/stone.png");
//     }
//     display(){
//         var angle = this.body.angle;
//         var pos = this.body.position
//         push();
//         translate(this.body.position.x, this.body.position.y);
//         rotate(angle);
//         imageMode(CENTER);
//         //image(this.image,pos.x,pos.y,this.width, this.height);
//         image(this.image,0,0,this.width, this.height);
//         pop();
//     }
// }

class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/stone.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }
  
  