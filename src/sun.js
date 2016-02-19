"use strict";
var Mutate = window.Mutate || {};

Mutate.Sun = function (x, y) {
	this.sun = Mutate.game.add.sprite(x, y, 'sun');
	this.sun.anchor.setTo(0.5, 0.5);

    for (var i = 1; i <= 4; i++)
    {
    	var ray = Mutate.game.add.sprite(this.sun.x, this.sun.y, 'sunray');
	    ray.anchor.setTo(0.0, 1.0);
	    ray.angle = 90 * i;
	    Mutate.game.add.tween(ray).to({angle: ray.angle + 90}, 32000, Phaser.Easing.Linear.None, true, 0, -1);
    }
    for (var i = 1; i <= 4; i++)
    {
    	var ray = Mutate.game.add.sprite(this.sun.x, this.sun.y, 'sunray');
	    ray.anchor.setTo(0.0, 1.0);
	    ray.angle = (90 * i) + 45;
	    Mutate.game.add.tween(ray).to({angle: ray.angle + 90}, 16000, Phaser.Easing.Linear.None, true, 0, -1);
    }

    this.sun.bringToTop();
};