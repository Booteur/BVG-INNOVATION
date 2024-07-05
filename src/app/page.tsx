"use client";

import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import HowItWork from "./components/HowItWork/HowItWork";
import ServicesSection from "./components/OurServices/OurServices";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Flex align="center" justify="center" height="100vh" bgColor="white">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box bgColor={"white"}>
      <Box>
        <HeroHeader />
      </Box>
      <Box mb={"10px"}>
        <HowItWork />
      </Box>
      <Box
        mt={"100px"}
        mb={"100px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ServicesSection />
      </Box>
    </Box>
  );
}
