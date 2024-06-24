"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import FlagSocialMedia from "./social-data/FlagIcon";

const Socialheader = () => {
  return (
    <Box
      width={"auto"}
      height={"66px"}
      bg={"primary.500"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Flex ml={"100px"} mr={"100px"} justifyContent={"space-between"}>
        <Text padding={"5px"} color={"white"} fontSize={"16px"}>
          Appelez-nous pour une consultation! Nous sommes toujours disponibles :{" "}
          <span style={{ fontWeight: "bold" }}> +242 06 600 00 00</span>
        </Text>
        <Flex>
          <FlagSocialMedia />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Socialheader;
