class box{
    constructor(x,y,w,h){
      var boxop = {
          restitution : 0.8,
          density : 1,
          friction : 0.3
      }
      
      this.body = Bodies.rectangle(x,y,w,h,boxop);
      this.width = w;
      this.height = h;
      World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}