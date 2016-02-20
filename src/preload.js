"use strict";
var Mutate = window.Mutate || {};

Mutate.Preload = function (game) {

};

Mutate.Preload.prototype = {
  constructor: Mutate.Preload,

  preload: function() {
    // Insert Shiny Loading here
    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Loading...");
    text.font = 'Arial Black';
    text.fontSize = 72;
    text.fontWeight = 'bold';
    text.fill = '#ffffff';
    text.anchor.setTo(0.5, 0.5);

    // Scripts
    this.load.script('src/util');
    this.load.script('src/buttonlib');
    this.load.script('src/stats');
    this.load.script('src/actions');
    this.load.script('src/player');
    this.load.script('src/sun');
    this.load.script('src/mainMenu');
    this.load.script('src/map');

    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

    // Load game assets
    this.load.image('mainMenuBackground', 'media/titlescreen/background.png');
    this.load.image('mute', 'media/titlescreen/mute.png');
    this.load.image('sound', 'media/titlescreen/sound.png');
    this.load.image('startbutton', 'media/titlescreen/startbutton.png');

    this.load.image('msLayer1', 'media/backgrounds/msLayer1.png');
    this.load.image('msLayer2', 'media/backgrounds/msLayer2.png');
    this.load.image('msLayer3', 'media/backgrounds/msLayer3.png');
    this.load.image('msLayer4', 'media/backgrounds/msLayer4.png');

    this.load.image('cloud', 'media/backgrounds/happylittlecloud.png');
    this.load.image('sun', 'media/backgrounds/sun.png');
    this.load.image('sunray', 'media/backgrounds/sunray.png');

    this.load.image('airport', 'media/buildings/airport.png');
    this.load.image('hole', 'media/buildings/hole.png');
    this.load.image('home', 'media/buildings/home.png');
    this.load.image('hospital', 'media/buildings/hospital.png');
    this.load.image('library', 'media/buildings/library.png');
    this.load.image('powerplant', 'media/buildings/powerplant.png');
    this.load.image('tracks', 'media/buildings/tracks.png');
    this.load.image('zoo', 'media/buildings/zoo.png');

    this.load.image('airportJetEngine', 'media/HUD/buttons/airport1.png');
    this.load.image('airportFukushima', 'media/HUD/buttons/airport2.png');
    this.load.image('homeSunbath', 'media/HUD/buttons/home1.png');
    this.load.image('homeMicrowave', 'media/HUD/buttons/home2.png');
    this.load.image('hospitalXRay', 'media/HUD/buttons/hospital1.png');
    this.load.image('hospitalHeal', 'media/HUD/buttons/hospital2.png');
    this.load.image('hospitalVaccine', 'media/HUD/buttons/hospital3.png');
    this.load.image('libraryStudy', 'media/HUD/buttons/library1.png');
    this.load.image('powerplantPlay', 'media/HUD/buttons/powerplant1.png');
    this.load.image('powerplantVisit', 'media/HUD/buttons/powerplant2.png');
    this.load.image('powerplantBuy', 'media/HUD/buttons/powerplant3.png');
    this.load.image('sewerFind', 'media/HUD/buttons/sewer1.png');
    this.load.image('tracksCastor', 'media/HUD/buttons/tracks1.png');
    this.load.image('zooBite', 'media/HUD/buttons/zoo1.png');
  },

  create: function() {
    this.game.state.add('Map', Mutate.Map);
    this.game.state.add('MainMenu', Mutate.MainMenu);

    this.state.start('MainMenu');
  }
}
