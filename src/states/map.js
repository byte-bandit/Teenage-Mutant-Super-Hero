"use strict";
var Mutate = window.Mutate || {};

Mutate.Map = function(game) {

};

Mutate.Map.prototype = {
    constructor: Mutate.Map,
    
    create: function() {
        this.hotspots = [];

        this.game.add.sprite(0, 0, 'msLayer4');
        new Mutate.Sun(1280 - 128, 96);

        this.spawnClouds();

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

        this.hud = new Mutate.Hud();

        this.tooltipHeaderText = Mutate.Util.createText(0, 0, "", 32);
        this.tooltipHeaderText.setTextBounds(16, 16, 1266, 48);
        this.tooltipHeaderText.boundsAlignH = "center";
        this.tooltipHeaderText.boundsAlignV = "middle";
        this.tooltipDescText = Mutate.Util.createText(0, 0, "");
        this.tooltipDescText.setTextBounds(16, 48, 1266, 72);
        this.tooltipDescText.boundsAlignH = "center";
        this.tooltipDescText.boundsAlignV = "middle";

        this.activeActions = this.game.add.group();

        Mutate.GameManager.onWin.add(function(msg) {
            Mutate.game.state.start("Mutation");
        }, this);

         Mutate.GameManager.onLoose.add(function(msg) {
            Mutate.game.state.start("GameOver", true, false, this.lastAction, msg);
        }, this);
    },

    spawnClouds: function() {
        var wind = this.game.rnd.pick([-1, 1]);

        for (var i = 1; i <= this.game.rnd.between(3, 5); i++) {
            var cloud = this.game.add.sprite(this.game.rnd.between(0, this.game.renderer.width), this.game.rnd.between(0, 132), 'cloud');
            cloud.alpha = .9;
            cloud.checkWorldBounds = true;
            cloud.events.onOutOfBounds.add(function(c) {
                if (c.x < 0) {
                    c.x = Mutate.game.renderer.width + c.width;
                } else {
                    c.x = 0 - c.width;
                }
                c.y = c.game.rnd.between(0, 132);
                c.schpeed = (Mutate.game.rnd.realInRange(0.1, 0.5)) * wind;
            });
            cloud.schpeed = (Mutate.game.rnd.realInRange(0.1, 0.5)) * wind;
            cloud.update = function() { this.x += this.schpeed; };
        }
    },

    update: function() {
        this.hud.update();
    },

    createHotspot: function(x, y, name, actions) {
        var tmp = this.game.add.sprite(x, y, name);
        tmp.actions = actions;
        tmp.events.onInputDown.add(this.hotspotClick, this);
        tmp.inputEnabled = true;
        tmp.input.pixelPerfectOver = true;
        tmp.input.pixelPerfectClick = true;
        tmp.anchor.setTo(0.5, 0.5);
        tmp.events.onInputOver.add(Mutate.ButtonLib.onHotspotOver);
        tmp.events.onInputOut.add(Mutate.ButtonLib.onHotspotOut);
        tmp.events.onInputDown.add(Mutate.ButtonLib.onHotspotDown);
        this.hotspots.push(tmp);
    },

    hotspotClick: function(spot) {
        if (this.activeActions.total > 0) {
            this.activeActions.removeAll(true);
        }

        for (var i = 0; i < spot.actions.length; i++) {
            var btn = Mutate.ButtonLib.createActionButton(spot.actions[i].img, spot.actions[i], i + 1, spot.actions.length, this.actionClick, this);
            btn.events.onInputOver.add(this.updateTooltip, this);
            btn.events.onInputOut.add(this.clearTooltip, this);
            this.activeActions.add(btn);
        }
    },

    updateTooltip: function(btn) {
        this.tooltipHeaderText.setText(btn.action.name);
        this.tooltipDescText.setText(btn.action.desc);
    },

    clearTooltip: function(btn) {
        this.tooltipHeaderText.text = "";
        this.tooltipDescText.text = "";
    },

    actionClick: function(btn) {
        if (btn.action.iq > Mutate.GameManager.Player.iq)
        {
            return;
        }

        this.activeActions.forEach(function(b) {
            Mutate.game.add.tween(b).to({ x: b.originalPosition.x, y: b.originalPosition.y }, 250, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() { b.destroy(); });
            Mutate.game.add.tween(b).to({ alpha: 0 }, 250, Phaser.Easing.Quadratic.Out, true);
        }, this);

        this.clearTooltip();

        this.lastAction = btn.action;

        var result = Mutate.Actions.GetResult(btn.action);
        var mods = result.mod();

        this.lastAction.result = result;

        this.tooltipHeaderText.setText(result.name);
        this.tooltipDescText.setText(result.desc);
        this.hud.createStatModifiers(mods);

        Mutate.GameManager.getTheCarHarry();

        this.hud.updateInfo();
    },
}
