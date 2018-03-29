const meshVolume = (width, depth, diameter, cellspadding) => {
  const rows = Math.round(depth / cellspadding);
  const cols = Math.round(width / cellspadding);

  var radius = diameter / 2
  const sampleVol = Math.PI * radius * radius;

  console.log(cellspadding)
  return rows * (sampleVol * depth) + cols * (sampleVol * width)
};

const convert = value => {
  return value && (value / 1000000).toFixed(5);
}

export default {
  wireMesh: {
    volume: mesh =>
      convert(meshVolume(mesh.width, mesh.depth, mesh.diameter, mesh.cellspadding)),

    count: (width, depth, mesh) => {
      const rows = Math.ceil(depth / mesh.depth);
      const cols = Math.ceil(width / mesh.width);
      return rows * cols;
    }
  }
};
