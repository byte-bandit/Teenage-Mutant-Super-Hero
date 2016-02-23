"use strict";
var Mutate = window.Mutate || {};

Mutate.GameManager = {
	Player: new Mutate.Player(),
	currentRound: 0,
	maxRounds: 31, 
	onLoose: new Phaser.Signal(),
	onWin: new Phaser.Signal(),

	getTheCarHarry: function() {
		this.currentRound ++;
		Mutate.GameManager.Player.clampStats();

		if (Mutate.GameManager.Player.life <= 0)
		{
			this.onLoose.dispatch("death");
			return;
		}

		if (Mutate.GameManager.Player.tryMutate())
		{
			this.onWin.dispatch("win");
			return;
		}

		if (this.currentRound > this.maxRounds)
		{
			this.onLoose.dispatch("old");
			return;
		}
	},

	restart: function() {
		this.Player = new Mutate.Player();
		this.currentRound = 0;
		Mutate.game.state.start('Map');
	}
}