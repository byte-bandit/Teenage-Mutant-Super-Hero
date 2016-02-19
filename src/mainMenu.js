"use strict";
var Mutate = window.Mutate || {};

Mutate.MainMenu = function (game) {

};

Mutate.MainMenu.prototype = {
  constructor: Mutate.MainMenu,

  create: function() {
    this.game.add.sprite(0, 0, 'mainMenuBackground');

    var startButton = this.game.add.button(this.game.world.centerX, this.game.world.height * 0.75, 'startbutton', this.startGame, this);
    startButton.anchor.setTo(0.5, 0.5);
    startButton.onInputOver.add(Mutate.ButtonLib.onButtonOver);
    startButton.onInputOut.add(Mutate.ButtonLib.onButtonOut);
    startButton.onInputUp.add(Mutate.ButtonLib.onButtonUp);
    startButton.onInputDown.add(Mutate.ButtonLib.onButtonDown);
  },

  update: function() {

  },

  startGame: function() {
  	this.game.state.start('Map');
  }
}
