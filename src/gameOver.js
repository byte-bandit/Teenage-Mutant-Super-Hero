"use strict";
var Mutate = window.Mutate || {};

Mutate.GameOver = function (game) {

};

Mutate.GameOver.prototype = {
  constructor: Mutate.GameOver,

  init: function(header, desc, resultState) {
    this.header = header;
    this.desc = desc;
    this.resultState = resultState;
  },

  create: function() {
    var img;
    var header;
    var subHeader;

    switch(this.resultState)
    {
      case "win":
        img = Mutate.game.rnd.pick(['win01', 'win02', 'win03', 'win04']);
        header = "Worth it!";
        subHeader = "Not the hero we deserve, but the hero we need."
        break;
      case "dead":
        img = 'gameOverDeadBoy';
        header = this.header;
        subHeader = this.desc;
        break;
      case "old":
        img = 'gameOverOld';
        header = 'So long, Grampa...';
        subHeader = 'How are you supposed to become a TEENAGE mutant super hero, old fart?!';
        break;
    }

    this.game.add.sprite(Mutate.game.world.centerX, Mutate.game.world.centerY, img).anchor.setTo(0.5);
    Mutate.Util.createText(Mutate.game.world.centerX, 32, header, 48).anchor.setTo(0.5, 0.0);
    Mutate.Util.createText(Mutate.game.world.centerX, 128, subHeader, 32).anchor.setTo(0.5, 0.0);

    Mutate.ButtonLib.createButton(this.game.world.width * 0.85, this.game.world.height * 0.9, 'btnTryAgain', this.restartGame, this);
  },

  restartGame: function() {
    Mutate.GameManager.restart();
  }
}
