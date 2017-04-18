function Scene()
{
	this.name = "Model";
	this.started = false;
	this.GameObjects = [];
	

	// appele à la cration d'objet
	this.Awake  = function()
	{
		console.clear();
		Print('System: Scene ' + this.name + " Created");
	}

	this.Start  = function()
	{
		

		if(!this.started)
		{
			this.started = true;
			// c'est ici qu'on mettra les animations
			Print('System: Scene ' + this.name + " Started");

			
		}

		this.Update();
	}

	this.Update = function()
	{
		if(!Application.GamePaused)
		{
			for (var i = 0; i < this.GameObjects.length; i++) {
				
				this.GameObjects[i].Start();
			}
		}


		
	}
	// chaque fois qu'on apsse dans un menu defini
	this.GUI 	= function()
	{

	}

	this.Awake();
}

