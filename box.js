class Box{
    constructor(x,y,width,height){
        var options={
            Matter.body.isStatic=(<this.box></this.box>,false);
        }

        this.box = Bodies.rectangle(x,y,width,height,box._options);
        this.width=width;
        this.height=height;
    }
    display(){
        rectMode(CENTER);
        fillColor("red");
    }
}