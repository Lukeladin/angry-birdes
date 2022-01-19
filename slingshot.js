class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length: 10
        }
    
        this.body = Constraint.create(options);
        this.pointB =pointB;
        World.add(world,this.body);
    } 

    display(){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}