import {
  VStack,
  Flex,
  Box,
  Text,
  Heading,
  Stack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export const OurMission = () => {
  return (
    <Box p={5}>
      <Stack
        align={"center"}
        justify={"center"}
        direction={useBreakpointValue({ base: "column", md: "row" })}
        spacing={useBreakpointValue({ base: 10, md: 20 })}
      >
        <VStack p={4} align={"start"} spacing={10}>
          <Heading fontSize={useBreakpointValue({ base: "30px", md: "40px" })}>
            Notre Mission
          </Heading>
          <Stack
            spacing={8}
            width={useBreakpointValue({ base: "100%", md: "400px" })}
          >
            <Text fontSize={useBreakpointValue({ base: "18px", md: "20px" })}>
              Découvrez de nouvelles perspectives avec nous ! Nous sommes
              centrés sur lutilisateur et axés sur la croissance
            </Text>
            <Text fontSize={useBreakpointValue({ base: "18px", md: "20px" })}>
              Une plateforme portée par ses utilisateurs A votre écoute pour
              créer et mettre en œuvre des fonctionnalités qui vous sont utiles
              Axé sur la croissance.
            </Text>
          </Stack>
        </VStack>
        <Box>
          <Image alt="mission" src="/assets/images/missions/mission.png" />
        </Box>
      </Stack>
    </Box>
  );
};
