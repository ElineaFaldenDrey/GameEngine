function Loader()
{
	this.name = "Loader";
	this.started = false;
	

	// appele à la cration d'objet PHASE INITIALISATION DE TOUS LES OB JETS DU JEU
	this.Awake  = function()
	{
		if(!Application.DebugMode) console.clear();
		Print('System: Scene ' + this.name + " Created");
	}

	this.Start  = function()
	{
		if(!this.Started)
		{
			this.Started = true;
			
			// c'est ici qu'on mettra les animations
			Print('System: Scene ' + this.name + " Started");
			Scenes["MovingText"] = new Loader();
			Application.LoadedScene = Scenes ["MovingText"];
		}

		

	

		this.Update();
	}

	this.Update = function()
	{
		this.GUI();


		
	}
	// chaque fois qu'on apsse dans un menu defini
	this.GUI = function()
	{
		if(Application.DebugMode)
		{
			Debug.DebugScene();
		}

	}

	this.Awake();
}
