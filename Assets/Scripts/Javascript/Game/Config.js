var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillRect(0,0,100,100);

var Application =
{
	LoadedScene: null
}

Application.LoadedScene = Scene();