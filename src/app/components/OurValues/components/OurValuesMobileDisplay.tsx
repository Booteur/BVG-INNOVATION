import {
  Flex,
  SimpleGrid,
  HStack,
  VStack,
  Text,
  Heading,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { OurValuesData } from "../dummyOurValues";

export const OurValuesMobileDisplay = () => {
  return (
    <Flex align={"center"} justify={"center"}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
        {OurValuesData?.map((values, index) => (
          <VStack
            key={index}
            rounded={"lg"}
            bgColor={"#F9F9F9"}
            p={5}
            spacing={5}
            width={{ base: "300px", sm: "330px" }}
            align={"start"}
          >
            <Flex align={"center"} justify={"center"} gap={5}>
              <Flex
                rounded={"lg"}
                width={{ base: "50px", sm: "70px" }}
                height={{ base: "50px", sm: "70px" }}
                bgColor={"primary.500"}
                align={"center"}
                justify={"center"}
              >
                {values.icon}
              </Flex>
              <Heading color={"black"}>{values.title}</Heading>
            </Flex>

            <VStack align={"start"}>
              <Text lineHeight={2} color={"black"} textAlign={"justify"}>
                {values.description}
              </Text>
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
