import { Text, Box, SimpleGrid, Center } from "@chakra-ui/react";
import React, { FC } from "react";
import { DataComponentOverview } from "../dummyStats";
import { IDataComponent } from "../interface/stats";

export const StatsDataTable: FC<IDataComponent> = ({ valueColor }) => {
  return (
    <Center>
      <Box
        bgColor={"#F9F9F9"}
        py={10}
        px={5}
        rounded="lg"
        shadow={"md"}
        textAlign="center"
        width={"80vw"}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {DataComponentOverview.map((stats, index) => (
            <Box key={index}>
              <Text
                fontSize={{
                  md: "4xl",
                  lg: "5xl",
                  "2xl": "6xl",
                }}
                fontWeight={"bold"}
              >
                {stats.value}
                <span style={{ color: valueColor, fontWeight: "bold" }}>
                  {stats.subValue}
                </span>
              </Text>
              <Text
                fontSize={{
                  md: "xl",
                  lg: "2xl",
                  xl: "3xl",
                  "2xl": "4xl",
                }}
              >
                {stats.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
};
