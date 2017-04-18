function Run()
{
	

	if(Application.LoadedScene != null)
	{
		Application.LoadedScene.Start();
	}

	RequestAnimationFrame(Run);
	
}