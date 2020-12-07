class bob {
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(this.width,this.height,50,options);
        this.radius = 50;
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
       //circle(pos.x,pos.y,this.radius)
    }
}