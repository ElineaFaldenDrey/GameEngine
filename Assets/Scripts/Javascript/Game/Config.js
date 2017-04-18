var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



var Application =
{
	LoadedScene: null,
	GamePaused : false
}

var Scenes = {};