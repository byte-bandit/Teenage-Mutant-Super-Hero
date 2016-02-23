"use strict";
var Mutate = window.Mutate || {};

Mutate.ButtonLib = {
	onButtonOver: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1.05, y: 1.05}, 100, Phaser.Easing.Bounce.Out, true);
	},

	onButtonOut: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1, y: 1}, 100, Phaser.Easing.Bounce.Out, true);
	},

	onButtonDown: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: .95, y: .95}, 100, Phaser.Easing.Bounce.Out, true);
		//Mutate.ButtonLib.playRandomClickSound();
	},

	onButtonUp: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1, y: 1}, 100, Phaser.Easing.Bounce.Out, true);
	},

	onHotspotOver: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1.025, y: 1.025}, 100, Phaser.Easing.Bounce.Out, true);
	},

	onHotspotOut: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1.0, y: 1.0}, 100, Phaser.Easing.Bounce.Out, true);
	},

	onHotspotDown: function(btn) {
		Mutate.game.add.tween(btn.scale).to({x: 1.0, y: 1.0}, 25, Phaser.Easing.Bounce.Out, true).yoyo(true);
		//Mutate.ButtonLib.playRandomClickSound();
	},

	createButton: function(x, y, image, callback, callbackContext)
	{
		var btn  = Mutate.game.add.button(x, y, image, callback, callbackContext);
		btn.anchor.setTo(0.5, 0.5)
		btn.onInputOver.add(Mutate.ButtonLib.onButtonOver);
	    btn.onInputOut.add(Mutate.ButtonLib.onButtonOut);
	    btn.onInputUp.add(Mutate.ButtonLib.onButtonUp);
	    btn.onInputDown.add(Mutate.ButtonLib.onButtonDown);
		return btn;
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
			btn.tint = 0x990000;
			btn.buttonMode = false;
			var t = Mutate.Util.createText(0, 0, "IQ\n" + btn.action.iq, 32, 4, '#ffffff', '#000000', 'Sigmar One');
			t.anchor.setTo(0.5);
			t.align = 'center';
			btn.addChild(t);
		}
		else
		{
			btn.onInputOver.add(Mutate.ButtonLib.onHotspotOver);
			btn.onInputOut.add(Mutate.ButtonLib.onHotspotOut);
			btn.onInputDown.add(Mutate.ButtonLib.onHotspotDown);
		}

		return btn;
	},

	playRandomClickSound: function() {
		Mutate.game.sound.play(Mutate.game.rnd.pick([
			'btnClick01',
			'btnClick02',
			'btnClick03',
			'btnClick04',
			'btnClick05',
			'btnClick06',
			'btnClick07',
			'btnClick08',
			'btnClick09',
			'btnClick10',
			'btnClick11',
			'btnClick12',
			'btnClick13',
			'btnClick14',
			'btnClick15']));
	}
};