import { Box, Flex, Text } from "@chakra-ui/react";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import HowItWork from "./components/HowItWork/HowItWork";
import ServicesSection from "./components/OurServices/OurServices";

export default function Home() {
  return (
    <Box bgColor={"white"}>
      <Box>
        <HeroHeader />
      </Box>
      <Box mb={"10px"} alignItems={"center"} justifyContent={"center"}>
        <HowItWork />
      </Box>
      {/*<Box mb={"500px"} alignItems={"center"} justifyContent={"center"}>
        <ServicesSection />
      </Box> */}
    </Box>
  );
}
