export const shadowMagnitude = (distance) => {
  const FLASHLIGHT_INTENSITY = 2;
  let shadowing = 1 / distance * FLASHLIGHT_INTENSITY;

  if(shadowing > 1) shadowing = 1

  return shadowing;
};