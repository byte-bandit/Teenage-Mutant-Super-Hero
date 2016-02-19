"use strict";
var Mutate = window.Mutate || {};

Mutate.Map = function (game) {

};

Mutate.Map.prototype = {
  constructor: Mutate.Map,

  create: function() {
    this.hotspots = [];

  	this.game.add.sprite(0, 0, 'msLayer4');
    this.sun = new Mutate.Sun(1280-128, 96);

    this.game.add.sprite(0, 0, 'msLayer3');
    this.createHotspot(543, 260, 'airport', [Mutate.Actions.JetEngine, Mutate.Actions.Fukushima]);
    this.createHotspot(188, 255, 'hospital', [Mutate.Actions.XRay, Mutate.Actions.Heal, Mutate.Actions.Vaccine]);
    this.createHotspot(1147, 294, 'powerplant', [Mutate.Actions.Play, Mutate.Actions.Visit, Mutate.Actions.Buy]);

  	this.game.add.sprite(0, 0, 'msLayer2');
    this.createHotspot(330, 502, 'tracks', [Mutate.Actions.Castor]);
    this.createHotspot(860, 355, 'library', [Mutate.Actions.Study]);
    this.createHotspot(1242, 576, 'zoo', [Mutate.Actions.Bite]);

  	this.game.add.sprite(0, 0, 'msLayer1');
    this.createHotspot(30, 478, 'home', [Mutate.Actions.Sunbath, Mutate.Actions.Microwave]);
    this.createHotspot(703, 662, 'hole', [Mutate.Actions.Find]);

  	var graphics = this.game.add.graphics(0,0);
  	graphics.beginFill(0xffc400, 0.8);
  	graphics.drawRoundedRect(16, 16, 256, 128, 8);

    this.drawText(32, 32, "Name: " + Mutate.Player.name);
    this.drawText(32, 32, "Name: " + Mutate.Player.name);
    this.drawText(32, 56, "Life: " + Mutate.Player.life);
    this.drawText(32, 80, "Mutation: " + Mutate.Player.mutation);
    this.drawText(32, 104, "IQ: " + Mutate.Player.iq);

    this.hotspots.forEach(function(hotspot) {
      hotspot.inputEnabled = true;
      hotspot.input.pixelPerfectOver = true;
      hotspot.input.pixelPerfectClick = true;
      hotspot.anchor.setTo(0.5, 0.5);
      hotspot.events.onInputOver.add(Mutate.ButtonLib.onHotspotOver);
      hotspot.events.onInputOut.add(Mutate.ButtonLib.onHotspotOut);
      hotspot.events.onInputDown.add(Mutate.ButtonLib.onHotspotDown);
    });

    this.activeActions = this.game.add.group();
  },

  update: function() {
  },

  createHotspot: function(x, y, name, actions) {
    var tmp = this.game.add.sprite(x, y, name);
    tmp.actions = actions;
    tmp.events.onInputDown.add(this.hotspotClick, this);
    this.hotspots.push(tmp);
  },

  drawText: function(x, y, text) {
    var text = this.game.add.text(x, y, text);
    text.font = 'Arial Black';
    text.fontSize = 16;
    text.fontWeight = 'bold';
    text.fill = '#000000';
    text.stroke = '#ffffff';
    text.strokeThickness = 2;
    return text;
  },

  hotspotClick: function(spot) {
    if (this.activeActions.total > 0)
    {
      this.activeActions.removeAll(true);
    }

    for (var i = 0; i < spot.actions.length; i++)
    {
      var btn = Mutate.ButtonLib.createActionButton(spot.actions[i].img, i + 1, spot.actions.length, this.actionClick, this);
      btn.action = spot.actions[i];
      this.activeActions.add(btn);
    }
  },

  actionClick: function(btn) {
    this.activeActions.forEach(function(b) {
      Mutate.game.add.tween(b).to({x: b.originalPosition.x, y: b.originalPosition.y}, 250, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {b.destroy();});
      Mutate.game.add.tween(b).to({alpha: 0}, 250, Phaser.Easing.Quadratic.Out, true);
    }, this);
  }
}
