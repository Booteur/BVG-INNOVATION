"use client";

import React from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionHeading = motion(Heading);
const MotionImage = motion(Flex);

const HeroHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgImage="url('/assets/banner/banner.png')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      minW="100vw"
      p={4}
      position="relative"
    >
      <Flex
        justify="space-between"
        align="center"
        px={{ base: "10px", md: "50px" }}
        py={{ base: "5px", md: "10px" }}
      >
        <MotionImage
          display={"flex"}
          align="center"
          justify={"center"}
          gap={4}
          mt={{ base: 4, md: 0 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            width={{ base: "30px", md: "35px" }}
            height={{ base: "30px", md: "35px" }}
            borderRadius="9px"
            bgColor="#F5F5F5"
          >
            <Image
              alt="hero-image"
              width={{ base: 30, md: 35 }}
              height={{ base: 30, md: 35 }}
              src="/assets/logo/losange-icon.png"
            />
          </Box>
          <Text
            color="black"
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="bold"
          >
            BVG - INNOVATION
          </Text>
        </MotionImage>

        <HStack
          display={{ base: "none", md: "flex" }}
          spacing={3}
          width={"50%"}
          justifyContent={"space-between"}
        >
          {["About Us", "Platform", "Resources", "Solution", "Pricing"].map(
            (text, index) => (
              <MotionText
                as={Link}
                key={index}
                color={"black"}
                href={`#${text.toLowerCase().replace(" ", "-")}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                fontSize={"18px"}
              >
                {text}
              </MotionText>
            )
          )}

          <MotionButton
            colorScheme="white"
            display={{ base: "none", md: "block" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            color={"black"}
            width={"150px"}
            height={"50px"}
            size={"lg"}
            borderRadius={"72px"}
            me={"-90px"}
          >
            Contact Us
          </MotionButton>
        </HStack>
        <HStack />
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box display={{ md: "none" }} mt={4}>
          <VStack spacing={4} align="start">
            {["About Us", "Platform", "Resources", "Solution", "Pricing"].map(
              (text, index) => (
                <Link
                  key={index}
                  color={"black"}
                  href={`#${text.toLowerCase().replace(" ", "-")}`}
                  onClick={onClose}
                >
                  {text}
                </Link>
              )
            )}
            <Button colorScheme="white" color="black" onClick={onClose}>
              Contact Us
            </Button>
          </VStack>
        </Box>
      )}

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        position="absolute"
        top={{ base: "120px", md: "150px" }}
        left={{ base: "0", md: "100px" }}
        px={{ base: 4, md: 10 }}
      >
        <VStack
          align={{ base: "center", md: "start" }}
          spacing={8}
          maxW={{ base: "100%", md: "50%" }}
          px={{ base: "5px", md: "40px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <MotionHeading
            as="h1"
            size="3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            lineHeight={{ base: "45px", md: "65px" }}
            color={"black"}
          >
            Offer The Best{" "}
            <Text as="span" color="primary.500">
              Conversational Experience
            </Text>{" "}
            With Our Primchat Software
          </MotionHeading>

          <MotionText
            fontSize="xl"
            color={"black"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Provide Excellent Customer Service. Answer More Tickets All-In-One
            Primarily Software.
          </MotionText>

          <MotionButton
            colorScheme="blue"
            alignSelf={{ base: "center", md: "start" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contact Us
          </MotionButton>
        </VStack>

        <MotionImage
          align="center"
          justify="center"
          mt={{ base: 4, md: 0 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt="hero-image"
            width="100%"
            height="100%"
            src="/assets/banner/bvg-shadow.png"
          />
        </MotionImage>
      </Flex>
    </Box>
  );
};

export default HeroHeader;
