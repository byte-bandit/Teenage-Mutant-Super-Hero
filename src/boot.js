"use strict";
var Mutate = window.Mutate || {};

Mutate.Boot = function (game) {

};

Mutate.Boot.prototype.preload = function() {
    this.load.script('src/util');
    this.load.script('src/preload');

    this.load.image('loadingbar', 'media/HUD/healthbar.png');
};

Mutate.Boot.prototype.create = function() {
    this.game.state.add('Preload', Mutate.Preload);
    this.game.state.start('Preload');
};