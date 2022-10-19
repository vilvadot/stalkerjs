import { CELL_SIZE } from "./config.js";

export const isInrange = (positionA, positionB) => {
  const distanceX = Math.abs(positionA.x - positionB.x);
  const distanceY = Math.abs(positionA.y - positionB.y);

  const horizontallyInRange = distanceX === 0 && distanceY === 1;
  const verticallyInRange = distanceX === 1 && distanceY === 0;
  if (horizontallyInRange || verticallyInRange) return true;

  return false;
};

export const addNodeToGame = ($node) => {
  const $game = document.querySelector("#game");

  $game?.appendChild($node);
};

export const positionNodeInCanvas = ($node, x, y) => {
  $node.style.position = `absolute`;
  $node.style.top = `${canvasCoordinates(y)}px`;
  $node.style.left = `${canvasCoordinates(x)}px`;
};

export const canvasCoordinates = (value) => {
  return value * CELL_SIZE;
};

export const findOrCreateNode = (selector, parentSelector) => {
  const parent = document.querySelector(parentSelector);
  let node = document.querySelector(selector);

  if (!node) {
    node = document.createElement("div");
    if (selector[0] === "#") node.id = selector.slice(1);
    if (selector[0] === ".") node.className = selector.slice(1);
    if (parent) parent.appendChild(node);
  }
  return node;
};

export const findTile = (id) => document.querySelector(`#${id}`);

type NodeOptions = {
  type: string;
  className?: string;
  content?: string;
  style?: string;
};
export const createNode = ({
  type,
  className,
  content,
  style,
}: NodeOptions) => {
  const node = document.createElement(type);
  if (className) node.className = className;
  if (content) node.innerHTML = content;
  // @ts-ignore-line
  if (style) node.style = style; 

  return node;
};

export const repeat = (times, callback) => {
  for (let i = 0; i < times; i++) {
    callback();
  }
};

export const randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const randomInteger = (max = 0, min = 0) => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return parseInt(randomNumber.toString());
};

export const randomSign = (value) => {
  if (roll()) return value * -1;
  return value;
};

export const uid = () => Math.random().toString().replace(".", "");

export const pickRandom = (collection: any[] = []) => {
  const index = randomInteger(0, collection.length);
  return collection[index];
};

export const roll = (probability = 0.5) => {
  const diceRoll = Math.random();
  if (diceRoll <= probability) return true;
  return false;
};

export const capitalize = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};