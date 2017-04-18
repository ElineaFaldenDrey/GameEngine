var Debug = 
{
	Break: function()
	{
		debugger;
	},

	DebugScene: function() 
	{
		if(Application.DebugMode)
		{
			this.ShowFPS();
			this.SceneName();
			this.mousePosition();
			
		}

	},

	MousePosition: function ()
	{
		ctx.font = '10px Arial';
		if(input.mouseClick)
		{
			ctx.fillStyle = "red";
		}
		else
		{
			ctx.fillStyle = "green";
		}

		ctx.fillText(Input.mousePosition.x + " " + Input.mousePosition.y, Input.mousePosition.x, Input.mousePosition.y);
	},

	SceneName: function()
	{
		ctx.font = "15px Arial";
		ctx.fillStyle = "black";
		ctx.fillText( Application.LoadedScene.name, canvas.width - 100, 20);
	},

	ShowFPS: function()
	{
		ctx.fillStyle = "rgba( 122, 122, 122)";
		ctx.RoundedBox( 4, 4, 120, 70, 20);

		ctx.RoundedBox( canvas.width - 130, 4, 125, 30, 20);
	}
};