"use strict";
var Mutate = window.Mutate || {};

Mutate.GameOver = function (game) {

};

Mutate.GameOver.prototype = {
  constructor: Mutate.GameOver,

  init: function(action, msg, img, nam) {
    this.action = action;
    this.msg = msg;
    this.img = img;
    this.nam = nam;
  },

  create: function() {
    var img;
    var header;
    var subHeader;

    this.game.stage.backgroundColor = '#4d4d4d';

    switch(this.msg)
    {
      case "win":
        img = this.img;
        header = "Worth it!";
        subHeader = "Not the hero we deserve, but the hero we need."
        Mutate.Util.createText(Mutate.game.world.centerX, Mutate.game.height * 0.85, this.nam, 48).anchor.setTo(0.5);
        break;
      case "death":
        img = this.action.killimg;
        header = this.action.result.name;
        subHeader = this.action.result.desc;
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
