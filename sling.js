class Sling{
    constructor(bA,pB){
        var ops={

            bodyA:bA,
            pointB:pB,
            length:300,
            stiffness:1
        }
        this.sling=Constraint.create(ops);
        World.add(world,this.sling);
    }
}