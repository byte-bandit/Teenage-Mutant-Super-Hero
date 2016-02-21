"use strict";
var Mutate = window.Mutate || {};

Mutate.Hud = function() {
    this.nameText = Mutate.Util.createText(32, 32, "");
    this.nameText = Mutate.Util.createText(32, 32, "");
    this.ageText = Mutate.Util.createText(32, 56, "");
    this.lifeText = Mutate.Util.createText(32, 80, "");
    this.iqText = Mutate.Util.createText(32, 104, "");

    this.mutationText = Mutate.Util.createText(100, 110, "", 20);
    this.mutationText.angle = -30;
    this.mutationText.align = 'center';
    this.mutationText.lineSpacing = -10;
    this.mutationText.fontWeight = 'bold';
    this.update();
};

Mutate.Hud.prototype.update = function() {
    this.nameText.setText(Mutate.GameManager.Player.name);
    this.ageText.setText("Age: " + Mutate.GameManager.Player.getYears() + " years");
    this.lifeText.setText("Life: " + Mutate.GameManager.Player.life + " %");
    this.mutationText.setText("Chance to mutate:\n " + Mutate.GameManager.Player.mutation + " %");
    this.iqText.setText("IQ: " + Mutate.GameManager.Player.iq);
};