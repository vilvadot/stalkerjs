import { Position, Sprite } from "../components/index.js";
import {uid} from '../util.js'

export class Artifact{
  constructor() {
    this.id = `anomaly-${uid()}`;
    this.name = "Artifact";
    this.sprite = new Sprite('bottle', 2, "animation--float");
    this.position = new Position();
    this.isStatic = true; // TODO: Change for collision (go trough)
  }
}
