// holds properties of a color within a palette
function Color(hex, width) {
  // hex is the hex code of the color in the palette (AF35D3)
  this.hex = hex;
  // width is the percentage width of the color (0.0 - 1.0)
  this.width = width;
}

Color.prototype.getHex = function() {
  return '#' + this.hex;
};

Color.prototype.getWidth = function() {
  return (this.width * 100) + '%';
};
