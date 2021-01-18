class Hero{
    constructor(x,y){
        var ops={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,150,100,ops);
        this.image=loadImage("images/Superhero-01.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,150,100);
        pop();
    }
}