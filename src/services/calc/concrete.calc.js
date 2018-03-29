const foundationVolume = (width, height, rows, cols, fw, fh) => {
  const outer = width * height;
  const inner = (width - (2 + cols) * fw) * (height - (2 + rows) * fw);
  return (outer - inner) * fh;
};

export default {
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
};
