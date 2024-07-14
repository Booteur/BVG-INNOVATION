import { VStack, Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Statistique } from "../Statistique/Statistique";
import { OurMission } from "../OurMission/OurMission";
import { OurValues } from "../OurValues/OurValues";

export const BVGHistory = () => {
  return (
    <Box>
      <Stack spacing={10}>
        <Statistique />
        <OurMission />
        <OurValues />
      </Stack>
    </Box>
  );
};
