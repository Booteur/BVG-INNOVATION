import { Box, Flex, Text } from "@chakra-ui/react";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import HowItWork from "./components/HowItWork/HowItWork";

export default function Home() {
  return (
    <Flex bgColor={"white"}>
      <Box>
        <HeroHeader />
      </Box>
      {/* <Box
        mt={"100px"}
        mb={"500px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <HowItWork />
      </Box>*/}
    </Flex>
  );
}
