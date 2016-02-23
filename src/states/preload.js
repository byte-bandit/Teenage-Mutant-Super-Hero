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
    this.load.script('src/core/buttonlib');
    this.load.script('src/defines/stats');
    this.load.script('src/defines/actions');
    this.load.script('src/player');
    this.load.script('src/gameManager');
    this.load.script('src/hud');
    this.load.script('src/sun');
    this.load.script('src/states/intro');
    this.load.script('src/states/mainMenu');
    this.load.script('src/states/gameOver');
    this.load.script('src/states/mutation');
    this.load.script('src/states/map');

    // Filters
    this.load.script('src/filters/Pixelate');
    this.load.script('src/filters/ColorMatrixFilter');

    // Load game assets
    this.load.image('mainMenuLogo', 'media/titlescreen/logo.png');
    this.load.image('btnMute', 'media/titlescreen/mute.png');
    this.load.image('btnUnmute', 'media/titlescreen/sound.png');
    this.load.image('startbutton', 'media/titlescreen/startbutton.png');
    this.load.image('maaten', 'media/titlescreen/maaten.png');
    this.load.image('knasl', 'media/titlescreen/knasl.png');
    this.load.image('particle', 'media/HUD/particle.png');

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

    // Intro
    this.load.image('intro1_1', 'media/intro/intro1_1.png');
    this.load.image('intro1_2', 'media/intro/intro1_2.png');
    this.load.image('intro1_bg', 'media/intro/intro1_bg.png');
    this.load.image('intro2_1', 'media/intro/intro2_1.png');
    this.load.image('intro2_2', 'media/intro/intro2_2.png');
    this.load.image('intro2_bg', 'media/intro/intro2_bg.png');
    this.load.image('intro3_1', 'media/intro/intro3_1.png');
    this.load.image('intro3_2', 'media/intro/intro3_2.png');
    this.load.image('intro3_bg', 'media/intro/intro3_bg.png');
    this.load.image('intro4_1', 'media/intro/intro4_1.png');
    this.load.image('intro4_2', 'media/intro/intro4_2.png');
    this.load.image('intro4_bg', 'media/intro/intro4_bg.png');
    this.load.image('intro5_1', 'media/intro/intro5_1.png');
    this.load.image('intro5_2', 'media/intro/intro5_2.png');

    // Game over
    this.load.image('gameOverOld', 'media/gameover/old.png');
    this.load.image('mutationBGTop', 'media/backgrounds/mutationBGTop.png');
    this.load.image('mutationBGBot', 'media/backgrounds/mutationBGBot.png');
    this.load.image('winPremutation', 'media/gameover/premutation.png');
    this.load.image('win01', 'media/gameover/mutation1.png');
    this.load.image('win02', 'media/gameover/mutation2.png');
    this.load.image('win03', 'media/gameover/mutation3.png');
    this.load.image('win04', 'media/gameover/mutation4.png');
    this.load.image('btnTryAgain', 'media/gameover/tryagainButton.png');
    this.load.image('gameOverBuy', 'media/gameover/buy.png');
    this.load.image('gameOverCastor', 'media/gameover/castor.png');
    this.load.image('gameOverFind', 'media/gameover/find.png');
    this.load.image('gameOverFukushima', 'media/gameover/fukushima.png');
    this.load.image('gameOverHeal', 'media/gameover/heal.png');
    this.load.image('gameOverJetEngine', 'media/gameover/jetengine.png');
    this.load.image('gameOverMicrowave', 'media/gameover/microwave.png');
    this.load.image('gameOverPlay', 'media/gameover/play.png');
    this.load.image('gameOverStudy', 'media/gameover/study.png');
    this.load.image('gameOverSunBathing', 'media/gameover/sunbathing.png');
    this.load.image('gameOverVaccine', 'media/gameover/vaccine.png');
    this.load.image('gameOverVisit', 'media/gameover/visit.png');
    this.load.image('gameOverXRay', 'media/gameover/xray.png');
    this.load.image('gameOverBite', 'media/gameover/zoo.png');

    // Audio
    this.load.audio('sfxStamp', 'media/sounds/stamp.mp3');
    this.load.audio('btnClick01', 'media/randomClickSounds/1.mp3');
    this.load.audio('btnClick02', 'media/randomClickSounds/2.mp3');
    this.load.audio('btnClick03', 'media/randomClickSounds/3.mp3');
    this.load.audio('btnClick04', 'media/randomClickSounds/4.mp3');
    this.load.audio('btnClick05', 'media/randomClickSounds/5.mp3');
    this.load.audio('btnClick06', 'media/randomClickSounds/6.mp3');
    this.load.audio('btnClick07', 'media/randomClickSounds/7.mp3');
    this.load.audio('btnClick08', 'media/randomClickSounds/8.mp3');
    this.load.audio('btnClick09', 'media/randomClickSounds/9.mp3');
    this.load.audio('btnClick10', 'media/randomClickSounds/10.mp3');
    this.load.audio('btnClick11', 'media/randomClickSounds/11.mp3');
    this.load.audio('btnClick12', 'media/randomClickSounds/12.mp3');
    this.load.audio('btnClick13', 'media/randomClickSounds/13.mp3');
    this.load.audio('btnClick14', 'media/randomClickSounds/14.mp3');
    this.load.audio('btnClick15', 'media/randomClickSounds/15.mp3');
  },

  create: function() {
    this.game.state.add('Intro', Mutate.Intro);
    this.game.state.add('MainMenu', Mutate.MainMenu);
    this.game.state.add('GameOver', Mutate.GameOver);
    this.game.state.add('Mutation', Mutate.Mutation);
    this.game.state.add('Map', Mutate.Map);

    this.game.state.start('MainMenu');
  }
}
