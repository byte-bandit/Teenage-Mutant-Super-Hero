"use strict";
var Mutate = window.Mutate || {};

Mutate.MainMenu = function (game) {

};

Mutate.MainMenu.prototype = {
  constructor: Mutate.MainMenu,

  create: function() {
    this.game.add.sprite(0, 0, 'mainMenuBackground');

    var startButton = Mutate.ButtonLib.createButton(this.game.world.centerX, this.game.world.height * 0.75, 'startbutton', this.startGame, this);
  },

  update: function() {

  },

  startGame: function() {
  	this.game.state.start('Map');
  }
}
