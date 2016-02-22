"use strict";
var Mutate = window.Mutate || {};

Mutate.GameOver = function (game) {

};

Mutate.GameOver.prototype = {
  constructor: Mutate.GameOver,

  init: function(header, desc) {
    this.header = header;
    this.desc = desc;
  },

  create: function() {
    this.game.add.sprite(Mutate.game.world.centerX, Mutate.game.world.centerY, 'gameOverDeadBoy').anchor.setTo(0.5);
    Mutate.Util.createText(Mutate.game.world.centerX, 32, this.header, 48).anchor.setTo(0.5, 0.0);
    Mutate.Util.createText(Mutate.game.world.centerX, 128, this.desc, 32).anchor.setTo(0.5, 0.0);

    Mutate.ButtonLib.createButton(this.game.world.width * 0.85, this.game.world.height * 0.9, 'btnTryAgain', this.restartGame, this);
  },

  update: function() {

  },

  restartGame: function() {
    Mutate.GameManager.restart();
  }
}
