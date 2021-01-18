class Box{
    constructor(x,y){
        var ops={
            restitution:1,
            friction:0.2
        }
        this.body=Bodies.rectangle(x,y,50,50,ops);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("red");
        rotate(this.body.angle);
        rect(0,0,50,50);
        pop();
    }
}