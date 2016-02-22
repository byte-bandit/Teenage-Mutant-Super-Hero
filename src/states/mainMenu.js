"use strict";
var Mutate = window.Mutate || {};

Mutate.MainMenu = function (game) {

};

Mutate.MainMenu.prototype = {
  constructor: Mutate.MainMenu,

  create: function() {
    this.game.stage.backgroundColor = '#4d4d4d';
    this.game.add.sprite(Mutate.game.world.centerX, Mutate.game.height * 0.45, 'mainMenuLogo').anchor.setTo(0.5);

    this.kna = this.game.add.sprite(78, 648, 'knasl');
    this.kna.anchor.setTo(0.5);
    this.kna.angle = -15;
    this.maaten = this.game.add.sprite(235, 650, 'maaten');
    this.maaten.anchor.setTo(0.5);
    this.maaten.angle = 15;

    this.company = Mutate.Util.createText(160, 554, "Team Klaus Klapper", 24, 8, "#ff5555", "#000000", "Sigmar One");
    this.company.anchor.setTo(0.5);
    this.game.add.tween(this.company.scale).to({x:1.05, y:1.05}, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);

    Mutate.ButtonLib.createButton(this.game.world.centerX, this.game.world.height * 0.75, 'startbutton', this.startGame, this);
  },

  update: function() {
  },

  startGame: function() {
  	this.game.state.start('Intro');
  }
}
