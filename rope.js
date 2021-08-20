class Rope{
    constructor(bodyA, pointB){ 
    var options = {
    bodyA: bodyA, 
    pointB: pointB, 
    stiffness: 0, 
    length: 10 } 

    this.pointB = pointB; 
    this.rope = Constraint.create(options); 
    World.add(world, this.rope); 
} 
display(){ 
    var pointA=this.rope.bodyA.position; 
    var pointB=this.pointB; 
    //line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, pointB.x, pointB.y); 
    line(pointA.x, pointA.y, pointB.x, pointB.y) }

}