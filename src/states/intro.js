"use strict";
var Mutate = window.Mutate || {};

Mutate.Intro = function (game) {
}

Mutate.Intro.prototype.create = function() {
    this.scenes = [
    {
        id: 1,
        background: 'intro1_bg',
        frames: [{
            img: 'intro1_1',
            x: Mutate.game.world.centerX,
            y: Mutate.game.height * 0.75
        },
        {
            img: 'intro1_2',
            x: Mutate.game.world.centerX,
            y: Mutate.game.height * 0.75
        }]
    },
    {
        id: 2,
        background: 'intro2_bg',
        frames: [{
            img: 'intro2_1',
            x: Mutate.game.world.width * 0.71,
            y: Mutate.game.height * 0.55
        },
        {
            img: 'intro2_2',
            x: Mutate.game.world.width * 0.71,
            y: Mutate.game.height * 0.55
        }]
    },
    {
        id: 3,
        background: 'intro3_bg',
        frames: [{
            img: 'intro3_1',
            x: 700,
            y: 235
        },
        {
            img: 'intro3_2',
            x: 700,
            y: 235
        }]
    },
    {
        id: 4,
        background: 'intro4_bg',
        frames: [{
            img: 'intro4_1',
            x: 500,
            y: 380
        },
        {
            img: 'intro4_2',
            x: 500,
            y: 380
        }]
    },
    {
        id: 5,
        background: 'intro4_bg',
        frames: [{
            img: 'intro5_1',
            x: Mutate.game.world.centerX,
            y: Mutate.game.world.centerY
        },
        {
            img: 'intro5_2',
            x: Mutate.game.world.centerX,
            y: Mutate.game.world.centerY
        }]
    }];

    this.currentScene = {id: 0};
    this.frames = this.game.add.group();
    this.animationTimer = Mutate.game.time.events.loop(500, this.updateAnimation, this);

    this.nextScene();
}

Mutate.Intro.prototype.nextScene = function() {
    this.currentScene = this.scenes[this.currentScene.id];
    this.background = Mutate.game.add.image(0, 0, this.currentScene.background);
    this.frames.create(this.currentScene.frames[0].x, this.currentScene.frames[0].y, this.currentScene.frames[0].img);
    this.frames.create(this.currentScene.frames[1].x, this.currentScene.frames[1].y, this.currentScene.frames[1].img);
    this.frames.forEach(function(frame) {frame.anchor.setTo(0.5);});
    this.frames.getTop().visible = false;

    Mutate.game.world.bringToTop(this.frames);
    Mutate.game.time.events.add(3000, this.cleanUp, this);
}

Mutate.Intro.prototype.cleanUp = function() {
    this.animationTimer.timer.pause();

    if (typeof this.background !== 'undefined') {
        this.background.destroy();
    }

    this.frames.removeAll(true);

    if (this.currentScene.id < this.scenes.length)
    {
        this.nextScene();
        this.animationTimer.timer.resume();
    }
    else
    {
        this.animationTimer.timer.remove(this.animationTimer);

        this.game.state.start('MainMenu');
    }
}

Mutate.Intro.prototype.updateAnimation = function() {
    this.frames.forEach(function(frame) {frame.visible = !frame.visible;});
}