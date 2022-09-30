import { Matrix } from "../data-structures/Matrix.js";
import ROT from "../lib/rot.js";
import { TILES } from "../tiles.js";

export class Generator {
  constructor(width, height) {
    this.generators = [
      new DirtGenerator(width, height),
      new RockGenerator(width, height),
      new GrassGenerator(width, height),
      new BuildingGenerator(width, height),
    ];
  }

  setSeed(seed) {
    ROT.RNG.setSeed(seed);
    return this;
  }

  generate() {
    let result = new Matrix();
    this.generators.forEach((generator) => generator.run(result));

    return result;
  }
}

class BuildingGenerator{
  run(result){
    // left
    result.setValue(5, 10, TILES.woodWall)
    result.setValue(5, 11, TILES.woodWall)
    result.setValue(5, 12, TILES.woodWall)
    result.setValue(5, 13, TILES.woodWall)
    result.setValue(5, 14, TILES.woodWall)

    // top
    result.setValue(6, 10, TILES.woodWall)
    result.setValue(7, 10, TILES.woodWall)
    result.setValue(8, 10, TILES.woodWall)
    result.setValue(9, 10, TILES.woodWall)
    result.setValue(10, 10, TILES.woodWall)

    // right
    result.setValue(10, 11, TILES.woodWall)
    result.setValue(10, 12, TILES.woodWall)
    result.setValue(10, 13, TILES.woodWall)
    result.setValue(10, 14, TILES.woodWall)

    // bottom
    result.setValue(6, 14, TILES.woodWall)
    result.setValue(7, 14, TILES.woodWall)
    result.setValue(9, 14, TILES.woodWall)

    //inside
    result.setValue(6, 11, TILES.plank)
    result.setValue(6, 12, TILES.plank)
    result.setValue(6, 13, TILES.plank)
    result.setValue(7, 11, TILES.plank)
    result.setValue(7, 12, TILES.plank)
    result.setValue(7, 13, TILES.plank)
    result.setValue(8, 11, TILES.plank)
    result.setValue(8, 12, TILES.plank)
    result.setValue(8, 13, TILES.plank)
    result.setValue(9, 11, TILES.plank)
    result.setValue(9, 12, TILES.plank)
    result.setValue(9, 13, TILES.plank)

    return result
  }
}

class CellularGenerator {
  generate(result, fullness = 0.5, tileSelectorCallback) {
    this.engine.randomize(fullness).create((x, y, isFilled) => {
      const originalTile = result.getValue(x, y);
      const tile = tileSelectorCallback(isFilled, originalTile);
      result.setValue(x, y, tile);
    });
  }
}

class DirtGenerator extends CellularGenerator {
  constructor(width, height) {
    super();
    this.engine = new ROT.Map.Cellular(width, height);
  }

  run(result) {
    return super.generate(result, 0.5, (isFilled) =>
      isFilled ? TILES.dirt : TILES.empty
    );
  }
}

class RockGenerator extends CellularGenerator {
  constructor(width, height) {
    super()
    this.engine = new ROT.Map.Cellular(width, height);
  }

  run(result) {
    return super.generate(result, 0.25, (isFilled, originalTile) =>
      isFilled ? TILES.rock : originalTile
    );
  }
}

class GrassGenerator extends CellularGenerator {
  constructor(width, height) {
    super()
    this.engine = new ROT.Map.Cellular(width, height);
  }

  run(result) {
    return super.generate(result, 0.2, (isFilled, originalTile) =>
      isFilled ? TILES.grass : originalTile
    );
  }
}
