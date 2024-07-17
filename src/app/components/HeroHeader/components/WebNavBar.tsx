import {
  useBreakpointValue,
  Button,
  Heading,
  Flex,
  ButtonGroup,
  Text,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Links } from "../dummyLinks";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const WebNavBar = () => {
  const responsiveMode = useBreakpointValue({ base: "mobile", md: "web" });
  const { colorMode, toggleColorMode } = useColorMode();

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
    <Flex align={"center"} justify={"space-between"} p={4}>
      <Flex align={"center"} justifyContent={"center"} gap={2}>
        <MotionBox
          width={{ base: "30px", sm: "35px", md: "65px" }}
          height={{ base: "30px", sm: "35px", md: "65px" }}
          borderRadius="9px"
          bgColor="#F5F5F5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MotionImage
            alt="hero-image"
            width={65}
            height={65}
            src="/assets/logo/losange-icon.png"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </MotionBox>
        <MotionText
          fontSize={{ base: "md", sm: "lg", md: "2xl" }}
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          BVG - INNOVATION
        </MotionText>
      </Flex>
      <Flex
        w={{ sm: "20vw", md: "40vw" }}
        align={"center"}
        justify={"space-between"}
        p={4}
      >
        {Links?.map((link, index) => (
          <MotionText
            _hover={{ color: "secondary.200" }}
            fontSize={{ base: "md", sm: "lg", md: "2xl" }}
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.1 }}
          >
            {link.title}
          </MotionText>
        ))}
      </Flex>

      <Flex>
        <ButtonGroup spacing={2}>
          <MotionButton
            fontSize={{ base: "md", sm: "lg", md: "3xl" }}
            size={{ sm: "sm", md: "lg" }}
            height={{ sm: "40px", md: "56px" }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            color={"white"}
            bgColor={"primary.500"}
          >
            Contact us
          </MotionButton>

          <MotionButton
            fontSize={{ base: "md", sm: "lg", md: "3xl" }}
            size={{ sm: "md", md: "lg" }}
            height={{ sm: "40px", md: "56px" }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            bgColor={"secondary.500"}
            color={"white"}
          >
            Book a schedule
          </MotionButton>
          <MotionButton
            size={{ sm: "md", md: "lg" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleColorMode}
            bgColor={colorMode === "light" ? "white" : "black"}
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
          >
            {colorMode === "light" ? (
              <SunIcon color="black" />
            ) : (
              <MoonIcon color="white" />
            )}
          </MotionButton>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
