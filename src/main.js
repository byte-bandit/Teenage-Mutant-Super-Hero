"use strict";
var Mutate = window.Mutate || {};

var WebFontConfig = {};

(function() {
  Mutate.Engine = function(width, height) {
    this.game = new Phaser.Game(width, height, Phaser.AUTO, "", {preload: this.onPreload, create: this.onCreate, update: this.onUpdate, render: this.onRender}, false, true);

    WebFontConfig = {

    active: function() { Mutate.game.time.events.add(Phaser.Timer.SECOND, null, this); },

    google: {
      families: ['Raleway']
    }
};

    Mutate.game = this.game;
  };

  Mutate.Engine.prototype = {
    constructor: Mutate.Engine,

    destroy: function() {
      this.game.destroy();
    },

    onPreload: function() {
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.refresh();

      this.game.state.add('Preload', Mutate.Preload);
      this.game.state.start('Preload');
    },

    onUpdate: function() {
    },

    onCreate: function() {
    },

    onRender: function() {
    }
  };
})();
