export const POSE_IDS = { Male: 0, Female: 1 };

export type Pose_t = keyof typeof POSE_IDS;

export const POSES: Pose_t[] = Object.keys(POSE_IDS) as Pose_t[];

export const AGE_IDS = { Hatchling: 0, Adult: 1 };

export type Age_t = keyof typeof AGE_IDS;

export const AGES: Age_t[] = Object.keys(AGE_IDS) as Age_t[];

export const ELEMENT_IDS = {
  Earth: 1,
  Plague: 2,
  Wind: 3,
  Water: 4,
  Lightning: 5,
  Ice: 6,
  Shadow: 7,
  Light: 8,
  Arcane: 9,
  Nature: 10,
  Fire: 11,
};

export type Element_t = keyof typeof ELEMENT_IDS;

export const ELEMENTS: Element_t[] = Object.keys(ELEMENT_IDS) as Element_t[];

export const EYETYPE_IDS = {
  Bright: 13,
  Button: 14,
  Common: 0,
  Dark: 16,
  "Dark Sclera": 8,
  Faceted: 4,
  Faded: 15,
  Glowing: 7,
  Goat: 9,
  Innocent: 11,
  "Multi-gaze": 5,
  Pastel: 12,
  Primal: 6,
  Rare: 3,
  Swirl: 10,
  Uncommon: 1,
  Unusual: 2,
};

export type EyeType_t = keyof typeof EYETYPE_IDS;

export const EYETYPES: EyeType_t[] = Object.keys(EYETYPE_IDS) as EyeType_t[];
