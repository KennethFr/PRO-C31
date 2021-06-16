class Particle{
    constructor(x, y) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,10,10)
        pop()
      }
  }