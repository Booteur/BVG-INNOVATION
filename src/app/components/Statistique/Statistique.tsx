"use client";

import {
  Box,
  useBreakpointValue,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

import { StatsDataTable } from "./components/StatsDataTable";
import { DataComponentOverview } from "./dummyStats";
import { BVG_CUSTOM_COLORS } from " _/app/theme/variables";
import { DataMobile } from "./components/StatsDataMobile";

export const Statistique = () => {
  const responsive = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });

  return (
    <Box p={5} width={"100%"}>
      {responsive === "web" ? (
        <>
          <StatsDataTable valueColor={BVG_CUSTOM_COLORS.Primary} />
        </>
      ) : (
        <SimpleGrid spacing={4} columns={2}>
          {DataComponentOverview?.map((value, index) => (
            <GridItem key={index}>
              <DataMobile
                value={value.value}
                subValue={value.subValue}
                description={value.description}
                valueColor={BVG_CUSTOM_COLORS.Primary}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
