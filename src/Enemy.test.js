import { Bus, EVENTS } from "./Bus";
import { createWorld, stubGameContainer } from "./_test_/stubs";
import { Enemy } from "./Enemy";

describe("Enemy", () => {
  const bus = new Bus();
  const world = createWorld({ height: 3, width: 3 });
  stubGameContainer();

  it("renders a DOM node when created", () => {
    new Enemy(bus, world);

    const $enemy = document.querySelector("#enemy");

    expect($enemy).toBeTruthy();
  });

  it("starts at a random worlds free cell", () => {
    const enemy = new Enemy(bus, world);

    expect(enemy.x).toBeDefined();
    expect(enemy.y).toBeDefined();
  });

  it("moves right towards player", () => {
    const enemy = new Enemy(bus, world);
    const initialPosition = { x: enemy.x, y: enemy.y };
    bus.emit(EVENTS.PLAYER_MOVED, { x: enemy.x + 2, y: enemy.y });

    expect(enemy.x).toEqual(initialPosition.x + 1);
    expect(enemy.y).toEqual(initialPosition.y);
  });

  it("moves top towards player", () => {
    const enemy = new Enemy(bus, world);
    const initialPosition = { x: enemy.x, y: enemy.y };
    bus.emit(EVENTS.PLAYER_MOVED, { x: enemy.x, y: enemy.y - 2 });

    expect(enemy.x).toEqual(initialPosition.x);
    expect(enemy.y).toEqual(initialPosition.y - 1);
  });
});

const getPlayerNode = () => document.querySelector("#player");