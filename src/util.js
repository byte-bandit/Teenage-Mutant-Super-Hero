"use strict";
var Mutate = window.Mutate || {};

Mutate.Util = {
    createText: function(x, y, text, size, stroke, fill, strokefill) {
        size = typeof size !== 'undefined' ? size : 16;
        stroke = typeof stroke !== 'undefined' ? stroke : 4;
        fill = typeof fill !== 'undefined' ? fill : '#ffffff';
        strokefill = typeof strokefill !== 'undefined' ? strokefill : '#000000';

        var text = Mutate.game.add.text(x, y , text);
        text.font = 'Raleway';
        text.fontSize = size;
        text.fill = fill;
        text.stroke = strokefill;
        text.strokeThickness = stroke;
        return text;
    }
};