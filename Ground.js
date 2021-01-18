class Ground{
    constructor(x,y,wid,hei){
        var ops={
            isStatic:true
        }
            this.body=Bodies.rectangle(x,y,wid,hei,ops);  
            this.height=hei;
            this.width=wid;
            World.add(world, this.body);
          }
          display(){
              rectMode(CENTER);
              rect(this.body.position.x,this.body.position.y,this.width,this.height);
          }
}