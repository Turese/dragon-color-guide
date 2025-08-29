import React from "react";

import { Color_t } from "./constants/colors";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "./constants/genes";
import { Dragon_t } from "./constants/dragonBreeds";

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
}

const DragonCtx = React.createContext<DragonState | undefined>(undefined);

export const DragonStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [breed, setBreed] = React.useState<Dragon_t>("Aberration");

  const [primary, setPrimary] = React.useState<Color_t>("Maize");
  const [secondary, setSecondary] = React.useState<Color_t>("Maize");
  const [tertiary, setTertiary] = React.useState<Color_t>("Maize");

  const [primaryGene, setPrimaryGene] = React.useState<PrimaryGene_t>("Basic");
  const [secondaryGene, setSecondaryGene] =
    React.useState<SecondaryGene_t>("Basic");

  const [tertiaryGene, setTertiaryGene] =
    React.useState<TertiaryGene_t>("Basic");

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
