var Time = 
{
	Time: 0,
	deltaTime: 0,
	FPS: 0,
	TimeOfLastFrame: 0,

	GameStart: 0,
	GameLoaded: 0,
	SceneStart: 0,
	SceneLoaded: 0,

	SetTimeValues: function()
	{
		this.Time = Date.now();
		this.deltaTime = (this.Time - this.TimeOfLastFrame)/ 1000;

		this.averageDelay += ((this.Time - this.TimeOfLastFrame) - this.averageDelay) / 10;
		this.FPS = (1000 / this.averageDelay).toFixed(1);
		this.TimeOfLastFrame = this.Time;

	}
};