import {
  Button,
  Heading,
  Flex,
  Text,
  Image,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export const Header = () => {
  const responsiveMode = useBreakpointValue({ base: "mobile", md: "web" });

  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };
  return (
    <Box p={4}>
      {responsiveMode === "web" ? (
        <Box alignItems={"center"} justifyItems={"center"} mt={"80px"}>
          <Flex
            mt={"30px"}
            align={"center"}
            justify={"center"}
            px={"20px"}
            py={"20px"}
            gap={30}
          >
            <Box maxW={{ base: "100%", md: "50%" }}>
              <MotionHeading
                fontSize={"6xl"}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                Offer The Best{" "}
                <Text as="span" color="primary.500">
                  Conversational Experience
                </Text>{" "}
                With Our Primchat Software
              </MotionHeading>
              <MotionText
                fontSize={"2xl"}
                mt={"20px"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Provide Excellent Customer Service. Answer More Tickets
                All-In-One Primarily Software.
              </MotionText>
              <MotionButton
                colorScheme="primary"
                fontSize={{ base: "md", sm: "lg", md: "3xl" }}
                size={{ sm: "sm", md: "lg" }}
                height={{ sm: "40px", md: "56px" }}
                mt={10}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact us
              </MotionButton>
            </Box>
            <MotionBox
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MotionImage
                alt="hero-image"
                width="100%"
                height="100%"
                src="/assets/banner/bvg-shadow.png"
              />
            </MotionBox>
          </Flex>
        </Box>
      ) : (
        <Box alignItems={"center"} justifyContent={"space-between"} mt={"80px"}>
          <Flex
            mt={"30px"}
            align={"center"}
            justify={"center"}
            direction={"column"}
            px={"20px"}
            py={"20px"}
            gap={30}
          >
            <Box maxW={{ base: "100%" }}>
              <MotionHeading
                fontSize={{ base: "xl", sm: "2xl" }}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                Offer The Best{" "}
                <Text as="span" color="primary.500">
                  Conversational Experience
                </Text>{" "}
                With Our Primchat Software
              </MotionHeading>
              <MotionText
                fontSize={{ base: "xl", sm: "2xl" }}
                mt={"20px"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Provide Excellent Customer Service. Answer More Tickets
                All-In-One Primarily Software.
              </MotionText>
              <MotionButton
                colorScheme="primary"
                fontSize={{ base: "xl" }}
                size={{ base: "lg" }}
                height={{ base: "36px" }}
                mt={"20px"}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact us
              </MotionButton>
            </Box>
            <MotionBox
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MotionImage
                alt="hero-image"
                width="100%"
                height="100%"
                src="/assets/banner/bvg-shadow.png"
              />
            </MotionBox>
          </Flex>
        </Box>
      )}
    </Box>
  );
};
