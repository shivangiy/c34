class Ball {
    constructor(x,y,radius) {
      var options = {
          density:1,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      translate (pos.x,pos.y)
      fill("pink");
      ellipse(0, 0, this.radius,this.radius);
    }
  };
  
  