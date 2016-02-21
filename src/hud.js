"use strict";
var Mutate = window.Mutate || {};

Mutate.Hud = function() {
    this.graphics = Mutate.game.add.graphics(0, 0);
    this.graphics.beginFill(0xffc400, 0.8);
    this.graphics.drawRoundedRect(16, 16, 256, 128, 8);

    this.nameText = Mutate.Util.createText(32, 32, "");
    this.nameText = Mutate.Util.createText(32, 32, "");
    this.createHealthBar(32, 60, 200, 10);
    this.iqText = Mutate.Util.createText(32, 84, "");
    this.ageText = Mutate.Util.createText(32, 112, "");

    this.mutationText = Mutate.Util.createText(1130, 100, "", 24, 8, "#ff5555", "#000000", "Sigmar One");
    this.mutationText.anchor.setTo(0.5);
    this.mutationText.angle = 30;
    this.mutationText.align = 'center';
    this.mutationText.lineSpacing = -10;

    Mutate.game.add.tween(this.mutationText.scale).to({x: 1.05, y:1.05}, 750, Phaser.Easing.Linear.None, true, 0, -1, true);

    this.updateInfo();
};

Mutate.Hud.prototype.updateInfo = function() {
    this.nameText.setText(Mutate.GameManager.Player.name);
    this.ageText.setText("Age: " + Mutate.GameManager.Player.getYears() + " years");
    this.mutationText.setText("Chance to mutate:\n " + Mutate.GameManager.Player.mutation + " %");
    this.iqText.setText("IQ: " + Mutate.GameManager.Player.iq);
    Mutate.game.add.tween(this.healthBarCrop).to({width: Mutate.GameManager.Player.life * 2}, 200, Phaser.Easing.Linear.None, true);
};

Mutate.Hud.prototype.update = function() {
    this.healthBar.updateCrop();
};

Mutate.Hud.prototype.createHealthBar = function(x, y, width, height) {
    var bmd = Mutate.game.add.bitmapData(width + 4, height + 4);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, width + 4, height + 4);
    bmd.ctx.fillStyle = '#B83737';
    bmd.ctx.fill();
    Mutate.game.add.sprite(x, y, bmd);

    bmd = Mutate.game.add.bitmapData(width, height);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, width, height);
    bmd.ctx.fillStyle = '#F75454';
    bmd.ctx.fill();

    this.healthBarCrop = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
    this.healthBar = Mutate.game.add.sprite(34, 62, bmd);
    this.healthBar.cropEnabled = true;
    this.healthBar.crop(this.healthBarCrop);
};