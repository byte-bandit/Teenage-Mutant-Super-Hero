"use strict";
var Mutate = window.Mutate || {};

Mutate.Preload = function (game) {

};

Mutate.Preload.prototype = {
  constructor: Mutate.Preload,

  preload: function() {
    // Insert Shiny Loading here

    // Scripts
    this.load.script('src/buttonlib');
    this.load.script('src/mainMenu');
    this.load.script('src/map');

    // Load game assets
    this.load.image('mainMenuBackground', 'media/titlescreen/background.png');
    this.load.image('mute', 'media/titlescreen/mute.png');
    this.load.image('sound', 'media/titlescreen/sound.png');
    this.load.image('startbutton', 'media/titlescreen/startbutton.png');

    this.load.image('msLayer1', 'media/backgrounds/msLayer1.png');
    this.load.image('msLayer2', 'media/backgrounds/msLayer2.png');
    this.load.image('msLayer3', 'media/backgrounds/msLayer3.png');
    this.load.image('msLayer4', 'media/backgrounds/msLayer4.png');

    this.load.image('airport', 'media/buildings/airport.png');
    this.load.image('hole', 'media/buildings/hole.png');
    this.load.image('home', 'media/buildings/home.png');
    this.load.image('hospital', 'media/buildings/hospital.png');
    this.load.image('library', 'media/buildings/library.png');
    this.load.image('powerplant', 'media/buildings/powerplant.png');
    this.load.image('tracks', 'media/buildings/tracks.png');
    this.load.image('zoo', 'media/buildings/zoo.png');
  },

  create: function() {
    this.game.state.add('Map', Mutate.Map);
    this.game.state.add('MainMenu', Mutate.MainMenu);

    this.state.start('MainMenu');
  }
}
