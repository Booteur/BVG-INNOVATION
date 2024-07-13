import { Center, Flex, Text, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import CardComponent from "../../PlatformOverview/components/card";
import { IDataComponent } from "../interface/stats";

export const DataMobile: FC<IDataComponent> = ({
  value,
  valueColor,
  description,
  subValue,
}) => {
  return (
    <Center>
      <CardComponent
        width={{ base: "180px", sm: "300px" }}
        size={"lg"}
        bgColor={"#F9F9F9"}
        showButton={false}
      >
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Text
            fontSize={{
              base: "3xl",
              sm: "6xl",
            }}
            fontWeight={"bold"}
            color={"black"}
          >
            {value}
            <span style={{ color: valueColor, fontWeight: "bold" }}>
              {subValue}
            </span>
          </Text>
          <Text
            fontSize={{
              base: "md",
              sm: "2xl",
            }}
            color={"black"}
            width={{ base: "160px", sm: "250px" }}
            textAlign={"center"}
          >
            {description}
          </Text>
        </Flex>
      </CardComponent>
    </Center>
  );
};
