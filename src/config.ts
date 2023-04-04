const urlParams = new URLSearchParams(window.location.search);
export const DEBUG_ENABLED = urlParams.get("debug");
export const FOV_ENABLED = urlParams.get("fov");
export const TEXT_MODE_ENABLED = urlParams.get("text");

const DISPLAY_TEXT = "text";
const DISPLAY_TILES = "tiles";
const DISPLAY_MODE = TEXT_MODE_ENABLED ? DISPLAY_TEXT : DISPLAY_TILES;
// @ts-ignore
export const isTextMode = () => DISPLAY_MODE === DISPLAY_TEXT;

export const TILE_SIZE = 24;
export const WIDTH = Math.ceil(1100 / TILE_SIZE);
export const HEIGHT = Math.ceil(600 / TILE_SIZE);

export const FPS_CAP = 30;

export const LIMIT = {
  enemies: 1,
  anomalies: 0,
};
