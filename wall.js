class Wall{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        push();
        var pos = this.body.position;
        fill(180,0,0);
        rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
