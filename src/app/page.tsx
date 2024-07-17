"use client";

import React, { useState, useEffect } from "react";
import { Box, Flex, Spinner, useBreakpointValue } from "@chakra-ui/react";
import HowItWork from "./components/HowItWork/HowItWork";
import ServicesSection from "./components/OurServices/OurServices";
import { PlatformOverview } from "./components/PlatformOverview/PlatformOverview";
import { TeamWork } from "./components/TeamWork/TeamWork";
import { BVGHistory } from "./components/BVGHistory/BVGHistory";
import ContactUs from "./components/Contact-us/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/HeroHeader/components/NavBar";
import { Header } from "./components/HeroHeader/Header";
import { WebNavBar } from "./components/HeroHeader/components/WebNavBar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const responsiveMode = useBreakpointValue({ base: "mobile", md: "web" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
      <Box>{responsiveMode === "web" ? <WebNavBar /> : <NavBar />}</Box>
      <Header />
      <HowItWork />
      <ServicesSection />
      <PlatformOverview />
      <TeamWork />
      <BVGHistory />
      <Box mt={"50px"} mb={"50px"}>
        <ContactUs />
      </Box>
      <Footer />
    </Box>
  );
}
