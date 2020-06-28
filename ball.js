class Ball {
  constructor(x,y){
    var options={
      'restitution':0.8,
      'friction':0.5,
      'density':1.2
    }
    this.body = Bodies.circle(x, y,25, options);
    this.image = loadImage("paper.png");
    this.width = 30;
    this.height = 30;
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    
    fill(0,230,0);
    image(this.image,pos.x-20,pos.y-15,50,50);
    //ellipse(pos.x, pos.y,50);
    pop();
  }

     
}
    