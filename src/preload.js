"use strict";

Mutate.Preload = function (game) {

};

Mutate.Preload.prototype = {
  constructor: Mutate.Preload,

  preload: function() {
    // Insert Shiny Loading here

    // Load game assets
    this.load.image('mainMenuBackground', 'media/Background_LD65.png');
  },

  create: function() {
    this.state.start('MainMenu');
  }
}
