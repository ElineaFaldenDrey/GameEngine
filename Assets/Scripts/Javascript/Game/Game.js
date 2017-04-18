function Run()
{
	Time.SetTimeValues();

	if(Application.LoadedScene != null)
	{
		Application.LoadedScene.Start();
	}

	console.log(Input.mousePosition);

	RequestAnimationFrame(Run);

}