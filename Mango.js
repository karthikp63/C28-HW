class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.width = 50;
        this.height = 50;
        this.body=Bodies.circle(x,y,1)
        this.image=loadImage("sprites/mango.png")
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}