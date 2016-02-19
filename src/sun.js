"use strict";
var Mutate = window.Mutate || {};

Mutate.Sun = function (x, y) {
	this.sun = Mutate.game.add.sprite(x, y, 'sun');
	this.sun.anchor.setTo(0.5, 0.5);

    for (var i = 1; i <= 6; i++)
    {
    	var ray = Mutate.game.add.sprite(this.sun.x, this.sun.y, 'sunray');
	    ray.anchor.setTo(0.0, 1.0);
	    ray.angle = (360 / 6) * i;
	    Mutate.game.add.tween(ray).to({angle: ray.angle + 60}, 32000, Phaser.Easing.Linear.None, true, 0, -1);
    }
    for (var i = 1; i <= 6; i++)
    {
        var ray = Mutate.game.add.sprite(this.sun.x, this.sun.y, 'sunray');
        ray.anchor.setTo(0.0, 1.0);
        ray.tint = 0xffe0b3;
        ray.angle = ((360 / 6) * i) + (360 / 12);
        Mutate.game.add.tween(ray).to({angle: ray.angle + 60}, 32000, Phaser.Easing.Quadratic.InOut, true, 0, -1);
    }

    this.sun.bringToTop();
};