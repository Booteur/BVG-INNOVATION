import {
  Flex,
  SimpleGrid,
  HStack,
  VStack,
  Text,
  Heading,
  useBreakpointValue,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { OurValuesData } from "./dummyOurValues";
import { OurValuesMobileDisplay } from "./components/OurValuesMobileDisplay";

export const OurValuesComponent = () => {
  const responsive = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });

  return (
    <Flex align={"center"} justify={"center"}>
      {responsive === "web" ? (
        <SimpleGrid columns={2} spacing={5}>
          {OurValuesData?.map((values, index) => (
            <GridItem key={index}>
              <HStack
                width={"450px"}
                rounded={"lg"}
                bgColor={"#F9F9F9"}
                p={5}
                spacing={5}
              >
                <Flex
                  rounded={"lg"}
                  width={"250px"}
                  height={"120px"}
                  bgColor={"primary.500"}
                  align={"center"}
                  justify={"center"}
                >
                  {values.icon}
                </Flex>
                <VStack align={"start"}>
                  <Text
                    fontSize={{
                      md: "20px",
                      lg: "25px",
                    }}
                    color={"black"}
                  >
                    {values.title}
                  </Text>
                  <Text lineHeight={2} color={"black"}>
                    {values.description}
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
          ))}
        </SimpleGrid>
      ) : (
        <OurValuesMobileDisplay />
      )}
    </Flex>
  );
};
