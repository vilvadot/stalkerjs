import { Matrix } from "../../data-structures/Matrix.js";
import ROT from "../../lib/rot.js";
import { TILES } from "../../tiles.js";
import { CellularGenerator } from "./CellularGenerator.js";

export class GrassGenerator extends CellularGenerator {
  constructor(width: number, height: number) {
    super();
    this.engine = new ROT.Map.Cellular(width, height);
  }

  run(result: Matrix) {
    return super.generate(result, 0.2, (isFilled, originalTile) => isFilled ? TILES.grass : originalTile
    );
  }
}