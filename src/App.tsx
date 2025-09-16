import React from "react";
import { Color_t, COLORS } from "./constants/colors";

import { Dragon_t, dragonHasGene, DRAGONS } from "./constants/dragonBreeds";
import Selector from "./Selector";
import BreedImage from "./BreedImage";

import GeneList, { LefthandGeneView, Swatch } from "./GeneList";
import { generateScryLink } from "./helpers/scryLink";
import {
  Age_t,
  Element_t,
  ELEMENTS,
  EyeType_t,
  EYETYPES,
  Pose_t,
} from "./constants/posesElements";
import { useDragonCtx } from "./dragonCtx";
import { BASIC } from "./constants/genes/Basic";
import { getGeneColorList } from "./helpers/colorMapping";
import {
  ActionIcon,
  Button,
  Flex,
  MantineStyleProp,
  Modal,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { IconBrandGithub, IconInfoCircle } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { InfoModal } from "./InfoModal";

function App() {
  const [pose, setPose] = React.useState<Pose_t>("Female");

  const [age, setAge] = React.useState<Age_t>("Adult");

  const [element, setElement] = React.useState<Element_t>("Wind");

  const [eyeType, setEyeType] = React.useState<EyeType_t>("Common");

  const theme = useMantineTheme();

  const {
    primary,
    setPrimary,
    secondary,
    setSecondary,
    tertiary,
    setTertiary,
    primaryGene,
    secondaryGene,
    tertiaryGene,
    breed,
    setBreed,
  } = useDragonCtx();

  const scryLink = generateScryLink({
    primary,
    secondary,
    tertiary,
    primaryGene,
    secondaryGene,
    tertiaryGene,
    breed,
    pose,
    age,
    element,
    eyeType,
  });

  const [opened, { open, close }] = useDisclosure(false); // for Info modal

  return (
    <Flex style={{ height: "100%", width: "100%" }} direction="column">
      <Modal opened={opened} onClose={close} title="About" centered>
        <InfoModal />
      </Modal>
      <Flex
        style={{
          padding: 8,
          background: theme.colors.blue[4],
          flex: 1,
        }}
      >
        <Text size="xl" fw={700} c={theme.colors.blue[0]}>
          0palite's Scry Helper
        </Text>
        <Flex style={{ marginLeft: "auto", gap: 8 }}>
          <Tooltip label="View on Github">
            <ActionIcon
              size="lg"
              onClick={() => {
                window
                  .open(
                    "https://github.com/Turese/dragon-color-guide",
                    "_blank"
                  )
                  ?.focus();
              }}
            >
              <IconBrandGithub />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="About">
            <ActionIcon size="lg" onClick={open}>
              <IconInfoCircle />
            </ActionIcon>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        style={{
          gap: 12,
          padding: 4,
          overflow: "hidden",
        }}
      >
        <Flex
          flex="1 1 0"
          style={{
            overflowY: "scroll",
            flexDirection: "column",
            padding: 4,
            width: "100%",
            overflowX: "scroll",
          }}
        >
          <Selector<Dragon_t>
            options={DRAGONS}
            onSelect={setBreed}
            value={breed}
            title="Breed"
            search
            getImage={(breed: Dragon_t) => (
              <img
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                src={require(`./images/dragons/${breed}.png`)}
                style={{ height: 20, width: 20 }}
              />
            )}
          />
          <Selector<"Female" | "Male" | "Hatchling">
            options={["Female", "Male", "Hatchling"]}
            onSelect={(option) => {
              if (option === "Female" || option === "Male") {
                setPose(option);
                setAge("Adult");
              } else if (option === "Hatchling") {
                setAge("Hatchling");
              }
            }}
            value={age === "Hatchling" ? "Hatchling" : pose}
            title="Pose"
            getImage={(pose) => (
              <img
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                src={require(`./images/poses/${pose}.png`)}
                style={{ height: 20, width: 20 }}
              />
            )}
          />
          <BreedImage age={age} pose={pose} />
          <Flex
            direction="row"
            style={{ width: "100%", justify: "space-between" }}
          >
            <Selector<Element_t>
              options={ELEMENTS}
              onSelect={setElement}
              value={element}
              title="Element"
              flexDirection="column"
              search
              getImage={(element: Element_t) => (
                <img
                  // eslint-disable-next-line @typescript-eslint/no-require-imports
                  src={require(`./images/elements/${element}.png`)}
                  style={{ height: 20, width: 20 }}
                />
              )}
            />
            <Selector<EyeType_t>
              options={EYETYPES}
              onSelect={setEyeType}
              value={eyeType}
              title="Eye Type"
              flexDirection="column"
              search
              getImage={(pose) => <></>}
            />
          </Flex>
          <Selector<Color_t>
            options={COLORS}
            onSelect={setPrimary}
            value={primary}
            title="Primary"
            getImage={(color: Color_t) => (
              <Swatch color={BASIC[color]["Main"]} isPrimary />
            )}
            search
          />
          <LefthandGeneView
            gene={primaryGene}
            palette={getGeneColorList(primary, primaryGene, "primary")}
            isAvailable={dragonHasGene(breed, "primary", primaryGene)}
          />
          <Selector<Color_t>
            options={COLORS}
            onSelect={setSecondary}
            value={secondary}
            title="Secondary"
            getImage={(color: Color_t) => (
              <Swatch color={BASIC[color]["Main"]} isPrimary />
            )}
            search
          />
          <LefthandGeneView
            gene={secondaryGene}
            palette={getGeneColorList(secondary, secondaryGene, "secondary")}
            isAvailable={dragonHasGene(breed, "secondary", secondaryGene)}
          />
          <Selector<Color_t>
            options={COLORS}
            onSelect={setTertiary}
            value={tertiary}
            title="Tertiary"
            getImage={(color: Color_t) => (
              <Swatch color={BASIC[color]["Main"]} isPrimary />
            )}
            search
          />
          <LefthandGeneView
            gene={tertiaryGene}
            palette={getGeneColorList(tertiary, tertiaryGene, "tertiary")}
            isAvailable={dragonHasGene(breed, "tertiary", tertiaryGene)}
          />
          <Button
            variant="outline"
            fullWidth
            onClick={() => {
              if (scryLink) window.open(scryLink, "_blank")?.focus();
            }}
            disabled={!scryLink}
          >
            View scry
          </Button>
        </Flex>
        <GeneList key="primary" category="primary" />
        <GeneList key="secondary" category="secondary" />
        <GeneList key="tertiary" category="tertiary" />
      </Flex>
    </Flex>
  );
}

export default App;
