"use strict";
var Mutate = window.Mutate || {};

Mutate.GameManager = {
	currentRound: 1,
	maxRounds: 32, 
	onLoose: new Phaser.Signal(),
	onWin: new Phaser.Signal(),

	getTheCarHarry: function() {
		this.currentRound ++;

		if (this.currentRound > this.maxRounds)
		{
			this.onLoose.dispatch(this);
		}
	}
}