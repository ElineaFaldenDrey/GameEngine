window.RequestAnimationFrame = (function()
{
	return  window.requestAnimationFrame || 
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
		function(callback, element)
		{
			window.setTimeOut(_callback, 1000/60);
		};

	// permet de recupérer un event qui est le rafraississement de zl'écran
}
	)();

	Scenes["Loader"] = new Loader();
	Application.LoadedScene = Scenes ["Loader"];

	Run();
