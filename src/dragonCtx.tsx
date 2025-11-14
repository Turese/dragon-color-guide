import React from "react";

import { Color_t } from "./constants/colors";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "./constants/genes";
import { Dragon_t } from "./constants/dragonBreeds";
import { ParameterProps_i } from "./helpers/scryLink";
import { Pose_t, Age_t, Element_t, EyeType_t } from "./constants/posesElements";

interface DragonState {
  breed: Dragon_t;
  setBreed: (b: Dragon_t) => void;
  primary: Color_t;
  secondary: Color_t;
  tertiary: Color_t;
  setPrimary: (c: Color_t) => void;
  setSecondary: (c: Color_t) => void;
  setTertiary: (c: Color_t) => void;
  primaryGene: PrimaryGene_t;
  setPrimaryGene: (g: PrimaryGene_t) => void;
  secondaryGene: SecondaryGene_t;
  setSecondaryGene: (g: SecondaryGene_t) => void;
  tertiaryGene: TertiaryGene_t;
  setTertiaryGene: (g: TertiaryGene_t) => void;
  pose: Pose_t;
  setPose: (p: Pose_t) => void;
  age: Age_t;
  setAge: (a: Age_t) => void;
  element: Element_t;
  setElement: (e: Element_t) => void;
  eyeType: EyeType_t;
  setEyeType: (e: EyeType_t) => void;
}

const DragonCtx = React.createContext<DragonState | undefined>(undefined);

export const DragonStateProvider: React.FC<{
  children: React.ReactNode;
  defaults: Partial<ParameterProps_i>;
}> = ({ children, defaults }) => {
  const [breed, setBreed] = React.useState<Dragon_t>(
    defaults.breed || "Aberration",
  );

  const [primary, setPrimary] = React.useState<Color_t>(
    defaults.primary || "Maize",
  );
  const [secondary, setSecondary] = React.useState<Color_t>(
    defaults.secondary || "Maize",
  );
  const [tertiary, setTertiary] = React.useState<Color_t>(
    defaults.tertiary || "Maize",
  );

  const [primaryGene, setPrimaryGene] = React.useState<PrimaryGene_t>(
    defaults.primaryGene || "Basic",
  );
  const [secondaryGene, setSecondaryGene] = React.useState<SecondaryGene_t>(
    defaults.secondaryGene || "Basic",
  );

  const [tertiaryGene, setTertiaryGene] = React.useState<TertiaryGene_t>(
    defaults.tertiaryGene || "Basic",
  );

  const [pose, setPose] = React.useState<Pose_t>(defaults.pose || "Female");

  const [age, setAge] = React.useState<Age_t>(defaults.age || "Adult");

  const [element, setElement] = React.useState<Element_t>(
    defaults.element || "Wind",
  );

  const [eyeType, setEyeType] = React.useState<EyeType_t>(
    defaults.eyeType || "Common",
  );

  return (
    <DragonCtx.Provider
      value={{
        breed,
        setBreed,
        primary,
        setPrimary,
        secondary,
        setSecondary,
        tertiary,
        setTertiary,
        primaryGene,
        setPrimaryGene,
        secondaryGene,
        setSecondaryGene,
        tertiaryGene,
        setTertiaryGene,
        pose,
        setPose,
        age,
        setAge,
        element,
        setElement,
        eyeType,
        setEyeType,
      }}
    >
      {children}
    </DragonCtx.Provider>
  );
};

export const useDragonCtx = () => {
  const context = React.useContext(DragonCtx);
  if (!context) {
    throw new Error("useDragonCtx must be used within a DragonCtx provider");
  }
  return context;
};
