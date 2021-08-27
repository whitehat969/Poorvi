class Bobs{
constructor(x,y){
var options={
    isStatic:false,
    restituton:0.3  ,
    friction:0 ,
   density: 0.2  
}
this.body = Bodies.circle(x,y,10,options);
World.add(world,this.body);
}

display(){
push();
ellipse(this.body.position.x,this.body.position.y,10,10);
pop();
}
}