import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IPlatform } from "../interface/platform";
import Image from "next/image";

export const CardItem = ({
  icon,
  image,
  title,
  description,
  bgColor,
}: IPlatform) => {
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const responsive = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });
  return (
    <Flex
      bgColor={"#F8F8F8"}
      align={"center"}
      justify={"center"}
      borderRadius={"10px"}
      p={4}
      boxShadow={"lg"}
    >
      <Box p={5}>
        <Flex>
          <VStack spacing={{ base: 2, sm: 4, md: 6 }} align={"start"}>
            <Image alt="test-button" src={icon} width={150} height={150} />
            <Heading
              color={"black"}
              fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}
            >
              {title}
            </Heading>
            <Text color={"black"} fontSize={{ base: "md", md: "xl" }}>
              {description}
            </Text>
          </VStack>
        </Flex>
      </Box>
      {(image && responsive === "web") || responsive === "tablet" ? (
        <Box bgColor={bgColor ?? "none"} me={6}>
          <Image alt="hero-image" src={image ?? ""} width={300} height={300} />
        </Box>
      ) : null}
    </Flex>
  );
};
