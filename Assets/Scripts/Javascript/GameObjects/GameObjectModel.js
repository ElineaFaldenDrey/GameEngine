function GameObject()
{
	this.name     = "Model";
	this.enabled  = false; // est fe que l'objet est actif en ce moment 
	this.started  = false; // a til existé au moins une foois dans la frame
	this.renderer = true;

	this.Awake = function()
	{
		Print("System : GameObject "+ this.name + " Created");

	};

	this.Start = function()
	{
		if(!this.started)
		{
			this.started = true;
			Print("System : GameObject "+ this.name + " Started");
		}

		this.Update();

	};

	this.Update = function()
	{

	};

	this.GUI = function()
	{

	};
}