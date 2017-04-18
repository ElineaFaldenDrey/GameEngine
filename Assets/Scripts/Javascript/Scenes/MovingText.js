function MovingText()
{
	this.name = "MovingText";
	this.started = false;
	this.GameObjects = [];
	

	// appele à la cration d'objet
	this.Awake  = function()
	{
		if(!Application.DebugMode) console.clear();
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
		
		ctx.fillText(mousePosition.x + " " + mousePOstition.y);


		
	}
	// chaque fois qu'on apsse dans un menu defini
	this.GUI 	= function()
	{

	}

	this.Awake();
}
