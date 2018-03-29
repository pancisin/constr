export default {
  boarding: {
    typeA: (width, height, brick, rows) => {
      const outer = width * height;
      const inner = (width - 2 * brick.depth) * (height - 2 * brick.depth);

      const vol = (outer - inner) * (brick.height * rows);
      const brickVol = brick.width * brick.height * brick.depth;

      return vol / brickVol;
    },
    typeB: (width, height, brick, rows) => {
      const outer = width * height;
      const inner = (width - 2 * brick.depth) * (height - 3 * brick.depth);

      const vol = (outer - inner) * (brick.height * rows);
      const brickVol = brick.width * brick.height * brick.depth;

      return vol / brickVol;
    }
  },
  enclosure: (width, height, depth, brick) => {
    const outer = width * depth;
    const inner = (width - 2 * brick.depth) * (depth - 2 * brick.depth);

    const vol = (outer - inner) * height;
    const brickVol = brick.width * brick.height * brick.depth;

    return vol / brickVol;
  }
};
