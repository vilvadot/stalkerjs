import { Ammo } from "../components/index.js";
import { Point } from "../data-structures/Point.js";
import { Player } from "../entities/Player.js";
import { EVENTS } from "../events.js";
import { Bus } from "../infra/bus.js";
import { Logger } from "../infra/logger.js";

const BULLET_DAMAGE = 1;

export class Shooting {
  static run(bus: Bus, logger: Logger, entities, x, y) {
    const player = entities.find(({ isPlayer }) => isPlayer) as Player;
    const target = entities.find((entity) => {
      return entity.position.x === x && entity.position.y === y;
    });
    const ammo = player.inventory.content.find(item => item instanceof Ammo)
    if(!ammo || ammo.quantity === 0 || target?.isPlayer) return 

    bus.emit(EVENTS.SHOT_FIRED, {
      origin: new Point(player.position.x, player.position.y),
      target: new Point(x, y),
    });

    // TODO: test
    ammo.quantity--

    if (!target?.health) return;

    bus.emit(EVENTS.HIT, {x: target.position.x, y: target.position.y})

    target.health.value -= BULLET_DAMAGE;

    logger.log(
      `"${player.name}" shot at "${target.name}" for ${BULLET_DAMAGE} damage!`,
      "blue"
    );
  }
}
