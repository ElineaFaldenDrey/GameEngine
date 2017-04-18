function Scene()
{
	this.name = "Model";
	this.started = false;
	var color;

	// appele à la cration d'objet
	this.Awake  = function()
	{
		console.clear();
		console.log('System: Scene ' + this.name + " Created");
	}

	this.Start  = function()
	{
		if(!this.Started)
		{
			this.Started = true;
			// c'est ici qu'on mettra les animations
			console.log('System: Scene ' + this.name + " Started");
		}

		this.Update();
	}

	this.Update = function()
	{
		Fill = function(color)
		{
			if(color == "blue")
			{
				ctx.fillRect(0,0,100,100);
			}
			else if(color == "green")
			{
				ctx.fillRect(0,0,100,100);
			}
			else if(color == "yellow")
			{
				ctx.fillRect(0,0,100,100);
			}
		}

		
	}
	// chaque fois qu'on apsse dans un menu defini
	this.GUI 	= function()
	{

	}

	this.Awake();
}

