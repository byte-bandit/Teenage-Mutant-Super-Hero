"use strict";
var Mutate = window.Mutate || {};

Mutate.Intro = function (game) {
};

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
            x: Mutate.game.world.centerX,
            y: Mutate.game.height * 0.75
        },
        {
            img: 'intro2_2',
            x: Mutate.game.world.centerX,
            y: Mutate.game.height * 0.75
        }]
    }];

    this.currentScene = 0;
    this.frames = this.game.add.group();

    this.nextScene();
};

Mutate.Intro.prototype.nextScene = function() {
    this.background = Mutate.game.add.image(0, 0, this.scenes[this.currentScene].background);
    this.frames.create(this.scenes[this.currentScene].frames[0].x, this.scenes[this.currentScene].frames[0].y, this.scenes[this.currentScene].frames[0].img);
    this.frames.create(this.scenes[this.currentScene].frames[1].x, this.scenes[this.currentScene].frames[1].y, this.scenes[this.currentScene].frames[1].img);
    this.frames.getTop().kill();

    this.currentScene ++;
    Mutate.game.time.events.add(3000, this.cleanUp, this);
};

Mutate.Intro.prototype.cleanUp = function() {
    if (typeof this.background !== 'undefined') {
        this.background.destroy();
    }

    this.frames.removeAll(true);

    if (this.currentScene < this.scenes.length)
    {
        this.nextScene();
    }
}