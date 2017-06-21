function gravity(t, x=0, v=0, g=9.8){
  return x + v*t + Math.pow(t, 2)*g/2;
}

function parabola(t, v, angle, g=9.8){
  return {
    x: Math.cos(angle * Math.PI / 180.0) * v * t,
    y: Math.sin(angle * Math.PI / 180.0) * v * t - t ** 2 * g / 2
  }
}