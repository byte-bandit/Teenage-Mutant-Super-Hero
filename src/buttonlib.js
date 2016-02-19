"use strict";
var Mutate = window.Mutate || {};

Mutate.ButtonLib = {
	onButtonOver: function(btn) {
		btn.angle = 3;
	},

	onButtonOut: function(btn) {
		btn.angle = 0;
	},

	onButtonDown: function(btn) {
		btn.scale.setTo(0.95, 0.95);
	},

	onButtonUp: function(btn) {
		btn.scale.setTo(1.0, 1.0);
	},

	onHotspotOver: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1.025, y: 1.025}, 100, Phaser.Easing.Bounce.Out, true);
	},

	onHotspotOut: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1.0, y: 1.0}, 100, Phaser.Easing.Bounce.Out, true);
	},

	onHotspotDown: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1.0, y: 1.0}, 25, Phaser.Easing.Bounce.Out, true).yoyo(true);
	}
};