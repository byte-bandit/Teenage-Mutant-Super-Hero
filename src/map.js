"use strict";

Mutate.Map = function (game) {

};

Mutate.Map.prototype = {
  constructor: Mutate.Map,

  create: function() {
    this.hotspots = [];

  	this.game.add.sprite(0, 0, 'msLayer4');

    this.game.add.sprite(0, 0, 'msLayer3');
    this.createHotspot(543, 260, 'airport');
    this.createHotspot(188, 255, 'hospital');
    this.createHotspot(1147, 294, 'powerplant');

  	this.game.add.sprite(0, 0, 'msLayer2');
    this.createHotspot(330, 502, 'tracks');
    this.createHotspot(860, 355, 'library');
    this.createHotspot(1242, 576, 'zoo');

  	this.game.add.sprite(0, 0, 'msLayer1');
    this.createHotspot(30, 478, 'home');
    this.createHotspot(703, 662, 'hole');


    this.player = {
      name: "Morten",
      life: 100,
      mutation: 0,
      iq: 70
    }

  	var graphics = this.game.add.graphics(0,0);
  	graphics.beginFill(0xffc400, 0.8);
  	graphics.drawRoundedRect(16, 16, 256, 128, 8);
    
    this.drawText(32, 32, "Name: " + this.player.name);
    this.drawText(32, 56, "Life: " + this.player.life);
    this.drawText(32, 80, "Mutation: " + this.player.mutation);
    this.drawText(32, 104, "IQ: " + this.player.iq);

    this.hotspots.forEach(function(hotspot) {
      hotspot.inputEnabled = true;
      hotspot.pixelPerfectOver = true;
      hotspot.anchor.setTo(0.5, 0.5);
    });
  },

  update: function() {
    this.hotspots.forEach(function(hotspot) {
      if (hotspot.input.pointerOver())
      {
        hotspot.tint = 0x66FF66;
      }
      else
      {
        hotspot.tint = 0xFFFFFF;
      }
    });
  },

  createHotspot: function(x, y, name) {
    this.hotspots.push(this.game.add.sprite(x, y, name));
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
  }
}
