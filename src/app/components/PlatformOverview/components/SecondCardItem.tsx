import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IPlatform } from "../interface/platform";

export const CardItem = ({
  icon,
  image,
  title,
  description,
  bgColor,
  width,
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
            <Image
              alt="test-button"
              src={icon}
              width={{ base: "50%", sm: "25%", md: "20%" }}
              height={{ base: "50%", sm: "25%", md: "30%" }}
            />
            <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}>
              {title}
            </Heading>
            <Text fontSize={{ base: "md", md: "2xl" }}>{description}</Text>
          </VStack>
        </Flex>
      </Box>
      {(image && responsive === "web") || responsive === "tablet" ? (
        <Box bgColor={bgColor ?? "none"} me={6}>
          <Image alt="hero-image" src={image} />
        </Box>
      ) : null}
    </Flex>
  );
};
