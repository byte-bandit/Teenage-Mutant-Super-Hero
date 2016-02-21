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
	},

	createActionButton: function(image, action, currentAction, totalActions, callback, callbackContext) {
		var btn = Mutate.game.add.button(Mutate.game.input.worldX, Mutate.game.input.worldY, image, callback, callbackContext);
		btn.anchor.setTo(0.5, 0.5)
		btn.originalPosition = btn.position.clone();

		var newx = Phaser.Math.clamp(btn.x + Math.cos(Mutate.game.math.degToRad(((360 / totalActions) * currentAction) - 90)) * 100, btn.width / 2, Mutate.game.world.width - btn.width / 2);
		var newy = Phaser.Math.clamp(btn.y + Math.sin(Mutate.game.math.degToRad(((360 / totalActions) * currentAction) - 90)) * 100, btn.height/ 2, Mutate.game.world.height - btn.width / 2);

		Mutate.game.add.tween(btn).to({x: newx, y: newy}, 250, Phaser.Easing.Quadratic.Out, true);
		Mutate.game.add.tween(btn).from({alpha: 0}, 250, Phaser.Easing.Quadratic.Out, true);

		btn.action = action;

		if (btn.action.iq > Mutate.GameManager.Player.iq)
		{
			btn.tint = 0xff0000;
			btn.buttonMode = false;
		}
		else
		{
			btn.onInputOver.add(Mutate.ButtonLib.onHotspotOver);
			btn.onInputOut.add(Mutate.ButtonLib.onHotspotOut);
			btn.onInputDown.add(Mutate.ButtonLib.onHotspotDown);
		}

		return btn;
	}
};