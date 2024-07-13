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

export const FirstCardItem = ({ icon, title, description }: IPlatform) => {
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);

  return (
    <Flex
      bgColor={"#F8F8F8"}
      align={"center"}
      justify={"space-between"}
      borderRadius={"10px"}
      width={{ base: "100%", md: "332px" }}
      height={{ base: "auto", sm: "210px", md: "225px", "2xl": "260px" }}
    >
      <Box p={5}>
        <Flex>
          <VStack spacing={6} align={"start"}>
            <Image
              alt="test-button"
              src={icon}
              width={{ base: "50%", sm: "40%", md: "30%" }}
              height={{ base: "50%", sm: "40%", md: "30%" }}
            />
            <Heading fontSize={{ base: "xl", md: "2xl" }}>{title}</Heading>
            <Text fontSize={{ base: "md", md: "2xl" }}>{description}</Text>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};
