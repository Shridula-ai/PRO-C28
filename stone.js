class stone{
    constructor(x,y)
	{
		var options={
			isStatic:falso,
			restitution :0,
            friction :1,
            density:1.2
			}
        
        this.x=x;
        this.y=y;
        this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, options)
		World.add(world, this.body);
    }
}