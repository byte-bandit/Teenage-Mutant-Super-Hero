"use strict";
var Mutate = window.Mutate || {};

Mutate.Mutation = function (game) {
}

Mutate.Mutation.prototype.create = function() {
    this.filterPixelate = this.game.add.filter('Pixelate');
    this.filterPixelate.size = {x: 5, y: 5};
    this.filterColorMatrix = new PIXI.ColorMatrixFilter();


    this.game.stage.backgroundColor = '#000000';
    this.topBG = this.game.add.sprite(0, 0, 'mutationBGTop');

    this.emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, 250);
    this.emitter.makeParticles('particle');
    this.emitter.minParticleSpeed.setTo(-400, -400);
    this.emitter.maxParticleSpeed.setTo(400, 400);
    this.emitter.gravity = 0;

    this.playerOld = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'winPremutation');
    this.playerOld.anchor.setTo(0.5);
    this.playerOld.filters = [this.filterPixelate, this.filterColorMatrix];
    this.playerNew = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Mutate.game.rnd.pick(['win01', 'win02', 'win03', 'win04', 'win05', 'win06', 'win07']));
    this.playerNew.anchor.setTo(0.5);
    this.playerNew.scale.setTo(0);
    this.playerNew.filters = [this.filterPixelate, this.filterColorMatrix];

    this.frameSwapDelay = 500;
    this.frameSwapCount = 0;
    this.game.add.sprite(0, 501, 'mutationBGBot');

    this.textSource = "What?!\n" + Mutate.GameManager.Player.name.toUpperCase() + " is evolving!";
    this.textPointer = 0;
    this.text = Mutate.Util.createText(76, 558, "", 32, 0, "#000000", "#000000", "Press Start 2P");
    this.text.lineSpacing = 20;

    this.game.time.events.repeat(25, this.textSource.length, this.updateText, this);
    this.game.time.events.add(3000, this.fadeBackground, this);

    this.tweenFilter = false;
    this.currentWhite = 0;

    this.game.sound.stopAll();
    this.game.sound.play('musicEvolution').onStop.add(function() {this.game.sound.play('musicEvolved');}, this);
}

Mutate.Mutation.prototype.updateText = function() {
    this.textPointer ++;
    this.text.setText(this.textSource.substring(0, this.textPointer));
}

Mutate.Mutation.prototype.fadeBackground = function() {
    this.game.add.tween(this.topBG).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function() {this.tweenFilter = true;}, this);
}

Mutate.Mutation.prototype.swapFrames = function() {
    this.frameSwapCount ++;
    if (this.frameSwapDelay > 80)
    {
        this.frameSwapDelay -= 20 * this.frameSwapCount;
    }
    else if(this.frameSwapDelay > 10)
    {
        this.frameSwapDelay -= 10;
    }
    else
    {
        this.frameSwapDelay --;
    }

    if (this.frameSwapDelay > 0)
    {
        var t = this.game.add.tween(this.playerNew.scale).to({x: 1, y: 1}, this.frameSwapDelay, Phaser.Easing.Linear.None);
        t.onComplete.add(this.reswapFrames, this);
        this.game.add.tween(this.playerOld.scale).to({x: 0, y: 0}, this.frameSwapDelay, Phaser.Easing.Linear.None, true).chain(t);
    }else{
        this.swapFinished();
    }
}

Mutate.Mutation.prototype.reswapFrames = function() {
    var t = this.game.add.tween(this.playerOld.scale).to({x: 1, y: 1}, this.frameSwapDelay, Phaser.Easing.Linear.None);
    t.onComplete.add(this.swapFrames, this);
    this.game.add.tween(this.playerNew.scale).to({x: 0, y: 0}, this.frameSwapDelay, Phaser.Easing.Linear.None, true).chain(t);
}

Mutate.Mutation.prototype.swapFinished = function() {
    this.playerNew.visible = true;
    this.playerNew.scale.setTo(1);
    this.playerNew.filters = [this.filterPixelate];
    this.playerOld.visible = false;

    var bmd = this.game.add.bitmapData(this.game.width, this.game.height);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.game.width, this.game.height);
    bmd.ctx.fillStyle = '#ffffff';
    bmd.ctx.fill();

    var t = this.game.add.tween(this.topBG).to({alpha: 1}, 1000, Phaser.Easing.Linear.None);
    this.emitter.start(false, 4000, 15);
    
    t.onComplete.add(function() {
        var heroname = Mutate.Player.getHeroName();
        this.textPointer = 0;
        this.textSource = "Congratulations! Your " + Mutate.GameManager.Player.name.toUpperCase() + "\nevolved into " + heroname.toUpperCase();
        this.game.time.events.repeat(25, this.textSource.length, this.updateText, this);
        this.game.time.events.add(3000, function() {
            this.game.state.start('GameOver', true, false, null, 'win', this.playerNew.key, heroname);
        }, this);
    }, this);
    this.game.add.tween(this.game.add.sprite(0, 0, bmd)).to({alpha: 0}, 2000, Phaser.Easing.Quadratic.Out, true, 25).chain(t);
}

Mutate.Mutation.prototype.preRender = function() {
    if (this.tweenFilter)
    {
        if (this.currentWhite <= 1)
        {
            this.currentWhite += 0.01;
            this.filterColorMatrix.matrix = [
            1, this.currentWhite, this.currentWhite, this.currentWhite, 
            this.currentWhite, 1, this.currentWhite, this.currentWhite,
            this.currentWhite, this.currentWhite, 1, this.currentWhite,
            0, 0, 0, this.currentWhite];
        }
        else
        {
            this.tweenFilter = false;
            this.swapFrames();
        }
    }
}