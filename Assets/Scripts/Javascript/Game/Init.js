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

	// permet de recupérer un event qui est le rafraississement de l'écran
}
	)();

	Scenes["Loader"] = new Loader();
	Application.LoadedScene = Scenes ["Loader"];

	window.addEventListener("keydown", Input.Keydown);
	window.addEventListener("keyup", Input.KeyUp);
	window.addEventListener("mouseUp", Input.MouseUp);
	window.addEventListener("mousedown", Input.MouseDown);
	window.addEventListener("mousemove", Input.MouseMove);

	Run();
