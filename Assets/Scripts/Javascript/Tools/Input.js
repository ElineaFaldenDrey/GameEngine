var Input =
{
	KeysDown: [],
	mousePosition: new Vector(),
	mouseClick: false,

	KeyDown: function(e)
	{
		if(!Application.DebugMode)
		{
			e.preventDefault();
			e.stopPropagation();
		}

		Input.KeysDown[e.keycode] = true;


	},
	KeyUp: function(e)
	{
		delete Input.KeysDown[e.KeyCode];
	},
	MouseDown: function(e)
	{
		Input.mouseCick = true;
	},
	MouseUp: function(e)
	{
		Input.mouseClick = false;
	},
	MouseMove: function(e)
	{
		var Rect = canvas.getBoundingClientRect();
		Input.mousePosition.x = (e.clientX - Rect.left) / (Rect.right - Rect.left) * canvas.width | 0;
		Input.mousePosition.y = (e.clientY - canvas.offsetTop) / (Rect.bottom - Rect.top) * canvas.height | 0;
	}
};