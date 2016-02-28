"use strict";
var Mutate = window.Mutate || {};

Mutate.MusicManager = {
	PlayMenuMusic: function() {
		Mutate.game.sound.stopAll();
		Mutate.game.sound.play('musicMenu', 1, true);
	},

	PlayIntroMusic: function() {
		Mutate.game.sound.stopAll();
		Mutate.game.sound.play('musicTurtles');
	},

	PlayGameMusic: function() {
		Mutate.game.sound.stopAll();
		Mutate.game.sound.play('musicMugge', 1, true);
	},

	PlayEvolutionMusic: function() {
		Mutate.game.sound.stopAll();
		Mutate.game.sound.play('musicEvolution', 1, true);
	},

	PlayEvolvedMusic: function() {
		Mutate.game.sound.stopAll();
		Mutate.game.sound.play('musicEvolved');
	},
}