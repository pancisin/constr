const convert = value => {
  return value && (value / 1000000).toFixed(2);
}

const foundationVolume = (width, height, rows, cols, fw, fh) => {
  const outer = width * height;
  const inner = (width - (2 + cols) * fw) * (height - (2 + rows) * fw);
  return convert((outer - inner) * fh);
};

export default {
  foundation: {
    foundationVolume: (width, height, fw, fh, foundationType) =>
      foundationVolume(
        width,
        height,
        foundationType.rows,
        foundationType.cols,
        fw,
        fh
      ),

    /**
     * Simple square foundation concrete.
     */
    typeA: (width, height, fw, fh) =>
      foundationVolume(width, height, 0, 0, fw, fh),

    /**
     * Simple rectangle foundations with ledge in the middle.
     */
    typeB: (width, height, fw, fh) =>
      foundationVolume(width, height, 1, 0, fw, fh),

    /**
     * Rectangular foundations width 2 lendges making cross.
     */
    typeC: (width, height, fw, fh) =>
      foundationVolume(width, height, 1, 1, fw, fh)
  },

  plate: (width, height, depth) => {
    return convert(width * height * depth);
  }
};
