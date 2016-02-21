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

    this.stampSound = Mutate.game.add.audio('sfxStamp');
    this.stampSound.allowMultiple = true;

    this.muteButton = Mutate.ButtonLib.createButton(Mutate.game.renderer.width - 16, Mutate.game.renderer.height - 16, 'btnUnmute', this.toggleMute, this);
    this.muteButton.anchor.setTo(1.0, 1.0);

    this.unmuteButton = Mutate.ButtonLib.createButton(Mutate.game.renderer.width - 16, Mutate.game.renderer.height - 16, 'btnMute', this.toggleMute, this);
    this.unmuteButton.anchor.setTo(1.0, 1.0);
    this.unmuteButton.visible = false;

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

Mutate.Hud.prototype.createStatModifiers = function(mods) {
    var count = 0;
    mods.forEach(function(mod) {
        Mutate.game.time.events.add(450 * count, function(mod) {
            var str = mod.factor + " " + (mod.stat == 'mutation' ? '%' : mod.stat);
            var color = mod.factor > 0 ? '#44ff00' : '#ff3c00';
            var targetPositionX = Mutate.game.rnd.between(500, Mutate.game.renderer.width - 500);
            var targetPositionY = Mutate.game.rnd.between(300, Mutate.game.renderer.height - 300);
            var spawnX = Mutate.game.rnd.between(0,1) == 0 ? -50 : Mutate.game.renderer.width + 50;
            var spawnY = Mutate.game.rnd.between(0,1) == 0 ? -50 : Mutate.game.renderer.height + 50;

            var text = Mutate.Util.createText(spawnX, spawnY, str, 72, 8, color, '#000000', 'Sigmar One');
            Mutate.game.add.tween(text.position).to({x: targetPositionX, y: targetPositionY}, 50, Phaser.Easing.Linear.None, true)
                .chain(Mutate.game.add.tween(text).to({alpha: 0}, 2500, Phaser.Easing.Linear.None, true));
            Mutate.game.add.tween(text).to({angle: Mutate.game.rnd.between(-15, 15)}, 50, Phaser.Easing.Linear.None, true);

            this.stampSound.play();
            
        }, this, mod);
        count ++;
    }, this);
}

Mutate.Hud.prototype.toggleMute = function(btn) {
    Mutate.game.sound.mute = !Mutate.game.sound.mute;
    this.unmuteButton.visible = Mutate.game.sound.mute;
    this.muteButton.visible = !Mutate.game.sound.mute;
}