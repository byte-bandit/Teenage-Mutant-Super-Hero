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
    var x = Mutate.game.add.text(32, 32, this.header);
    console.log(x);
    Mutate.ButtonLib.createButton(this.game.world.width * 0.85, this.game.world.height * 0.9, 'btnTryAgain', this.restartGame, this);
  },

  restartGame: function() {
    Mutate.game.state.start('Map');
  }
}
