import { DebugPath } from "../../infra/debug.js";
import ROT from '../../lib/rot.js'

export class AStarPathfinder {
  static calculateNextStep(id, origin, target, terrain) {
    const path = [];

    const checkFreeCell = (x, y) => {
      const isFree = !terrain.isBlocked(x, y);
      return isFree;
    };
    const engine = new ROT.Path.AStar(target.x, target.y, checkFreeCell, {
      topology: 4,
    });

    engine.compute(origin.x, origin.y, (x, y) => {
      path.push([x, y]);
    });
    DebugPath.draw(id, path);

    const firstPathStep = path[1];
    if (!firstPathStep)
      return;

    return { x: firstPathStep[0], y: firstPathStep[1] };
  }
}
