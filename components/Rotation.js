//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }
  },

});

tick: function () {
  var mapRotation = this.el.getAttribute("rotation");

  mapRotation.y += this.data.speedOfRotation;

  this.el.setAttribute("rotation", {
    x: mapRotation.x,
    y: mapRotation.y,
    z: mapRotation.z
  });
}





