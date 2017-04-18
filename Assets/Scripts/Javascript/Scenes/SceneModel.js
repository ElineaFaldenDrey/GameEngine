function Scene()
{
	this.name = "Model";
	this.started = false;
	

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


		
	}
	// chaque fois qu'on apsse dans un menu defini
	this.GUI 	= function()
	{

	}

	this.Awake();
}

