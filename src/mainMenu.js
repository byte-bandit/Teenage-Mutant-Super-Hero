"use strict";

Mutate.MainMenu = function (game) {

};

Mutate.MainMenu.prototype = {
  constructor: Mutate.MainMenu,

  create: function() {
    this.game.add.sprite(0, 0, 'mainMenuBackground');

    var startButton = this.game.add.button(this.game.world.centerX, this.game.world.height * 0.75, 'startbutton', this.startGame, this);
    startButton.anchor.setTo(0.5, 0.5);
    startButton.onInputOver.add(this.onInputOver);
    startButton.onInputOut.add(this.onInputOut);
    startButton.onInputUp.add(this.onInputUp);
    startButton.onInputDown.add(this.onInputDown);
  },

  update: function() {

  },

  onInputOver: function(btn) {
  	btn.tint = 0xcccccc;
  },

  onInputOut: function(btn) {
  	btn.tint = 0xffffff;
  },

  onInputUp: function(btn) {
  	btn.scale.setTo(1.0, 1.0);
  },

  onInputDown: function(btn) {
  	btn.scale.setTo(0.95, 0.95);
  },

  startGame: function() {
  	this.game.state.start('Map');
  }
}
