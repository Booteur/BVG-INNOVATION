"use client";

import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import HowItWork from "./components/HowItWork/HowItWork";
import ServicesSection from "./components/OurServices/OurServices";
import { PlatformOverview } from "./components/PlatformOverview/PlatformOverview";
import { TeamWork } from "./components/TeamWork/TeamWork";
import { Statistique } from "./components/Statistique/Statistique";
import { OurMission } from "./components/OurMission/OurMission";
import { OurValues } from "./components/OurValues/OurValues";
import { BVGHistory } from "./components/BVGHistory/BVGHistory";
import { Suscribe } from "./components/Suscribe/Suscribe";
import ContactUs from "./components/Contact-us/ContactUs";
import { Footer } from "./components/Footer/Footer";

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
      <Box mt={"10px"} mb={"10px"}>
        <ServicesSection />
      </Box>
      <Box mt={"10px"} mb={"10px"}>
        <PlatformOverview />
      </Box>
      <Box mt={"10px"} mb={"10px"}>
        <TeamWork />
      </Box>
      <Box>
        <BVGHistory />
      </Box>
      <Box mt={"50px"}>
        <ContactUs />
      </Box>
      <Box mt={"50px"}>
        <Footer />
      </Box>
    </Box>
  );
}
