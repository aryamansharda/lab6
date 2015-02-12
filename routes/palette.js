var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	res.json(randomPalette);
}