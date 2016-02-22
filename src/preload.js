"use strict";
var Mutate = window.Mutate || {};

Mutate.Preload = function (game) {

};

Mutate.Preload.prototype = {
  constructor: Mutate.Preload,

  preload: function() {
    // Insert Shiny Loading here
    Mutate.Util.createText(this.game.world.centerX, this.game.height * 0.25, "Loading...", 72, 0).anchor.setTo(0.5);
    var loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingbar');
    loadingBar.anchor.setTo(0.5,1);
    this.load.setPreloadSprite(loadingBar,0);

    // Scripts
    this.load.script('src/buttonlib');
    this.load.script('src/hud');
    this.load.script('src/stats');
    this.load.script('src/actions');
    this.load.script('src/player');
    this.load.script('src/sun');
    this.load.script('src/mainMenu');
    this.load.script('src/gameOver');
    this.load.script('src/map');
    this.load.script('src/gameManager');

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

    //Game over
    this.load.image('gameOverDeadBoy', 'media/gameover/deadBoy.png');
    this.load.image('gameOverOld', 'media/gameover/old.png');
    this.load.image('win01', 'media/gameover/mutation1.png');
    this.load.image('win02', 'media/gameover/mutation2.png');
    this.load.image('win03', 'media/gameover/mutation3.png');
    this.load.image('win04', 'media/gameover/mutation4.png');
    this.load.image('btnTryAgain', 'media/gameover/tryagainButton.png');

    // Hud
    this.load.image('btnMute', 'media/titlescreen/mute.png');
    this.load.image('btnUnmute', 'media/titlescreen/sound.png');

    // Audio
    this.load.audio('sfxStamp', 'media/sounds/stamp.mp3');
  },

  create: function() {
    this.game.state.add('Map', Mutate.Map);
    this.game.state.add('MainMenu', Mutate.MainMenu);
    this.game.state.add('GameOver', Mutate.GameOver);

    this.game.state.start('MainMenu');
  }
}
