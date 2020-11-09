class Rope{
    constructor(bodyA, pointB){
    
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0,
            length: 300
           }

        this.rope = Matter.Constraint.create(options); 
        this.rope.pointB = pointB;

        World.add(world, this.rope);
    }

    display(){
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, pointB.x, pointB.y);
    }

}