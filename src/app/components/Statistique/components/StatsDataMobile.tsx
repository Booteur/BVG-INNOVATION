import { Center, Flex, Text, Box, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";
import CardComponent from "../../PlatformOverview/components/card";
import { IDataComponent } from "../interface/stats";

export const DataMobile: FC<IDataComponent> = ({
  value,
  valueColor,
  description,
  subValue,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Center>
      <CardComponent
        width={{ base: "180px", sm: "300px" }}
        size={"lg"}
        bgColor={colorMode === "light" ? "#F9F9F9" : "primary.500"}
        showButton={false}
      >
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Text
            fontSize={{
              base: "3xl",
              sm: "6xl",
            }}
            fontWeight={"bold"}
            color={colorMode === "light" ? "black" : "white"}
          >
            {value}{" "}
            <span style={{ color: valueColor, fontWeight: "bold" }}>
              {subValue}
            </span>
          </Text>
          <Text
            fontSize={{
              base: "md",
              sm: "2xl",
            }}
            width={{ base: "180px", sm: "250px" }}
            textAlign={"center"}
            color={colorMode === "light" ? "black" : "white"}
          >
            {description}
          </Text>
        </Flex>
      </CardComponent>
    </Center>
  );
};
