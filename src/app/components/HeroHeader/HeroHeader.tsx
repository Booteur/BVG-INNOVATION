"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Heading,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";
import { Links } from "./dummyLinks";
import { MenuIcon } from "../../../../public/assets/svg";

const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionBox = motion(Box);

const HeroHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const responsiveMode = useBreakpointValue({ base: "mobile", md: "web" });

  const menuVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <Box p={4}>
      {responsiveMode === "web" ? (
        <Box alignItems={"center"} justifyItems={"center"}>
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
                  width={{ base: 30, sm: 35, md: 65 }}
                  height={{ base: 30, sm: 35, md: 65 }}
                  src="/assets/logo/losange-icon.png"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </MotionBox>
              <MotionText
                color="black"
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
                  color="black"
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
                  colorScheme="primary"
                  fontSize={{ base: "md", sm: "lg", md: "3xl" }}
                  size={{ sm: "sm", md: "lg" }}
                  height={{ sm: "40px", md: "56px" }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact us
                </MotionButton>

                <MotionButton
                  colorScheme="secondary"
                  fontSize={{ base: "md", sm: "lg", md: "3xl" }}
                  size={{ sm: "md", md: "lg" }}
                  height={{ sm: "40px", md: "56px" }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Book a schedule
                </MotionButton>
              </ButtonGroup>
            </Flex>
          </Flex>
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
        <Box alignItems={"center"} justifyContent={"space-between"}>
          <Flex align={"center"} justifyContent={"space-between"}>
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
                  width={{ base: 30, sm: 35, md: 65 }}
                  height={{ base: 30, sm: 35, md: 65 }}
                  src="/assets/logo/losange-icon.png"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </MotionBox>
              <MotionText
                color="black"
                fontSize={{ base: "md", sm: "lg", md: "3xl" }}
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                BVG - INNOVATION
              </MotionText>
            </Flex>
            <IconButton
              as={motion.nav}
              icon={
                isOpen ? (
                  <CloseIcon width={18} height={18} />
                ) : (
                  <MenuIcon width={18} height={18} />
                )
              }
              onClick={isOpen ? onClose : onOpen}
              _hover={{ backgroundColor: "secondary.500" }}
              aria-label="Open Menu"
            />
          </Flex>
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

          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay bgColor={"black.50"}>
              <DrawerContent bgColor={"white"}>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody
                  display={"flex"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                  bgColor={"white"}
                >
                  <Stack spacing={4} width={"100%"}>
                    {Links?.map((link, index) => (
                      <Button
                        key={index}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        color={"black"}
                        onClick={onClose}
                        bgColor={"white"}
                        _hover={{
                          backgroundColor: "secondary.500",
                          color: "white",
                        }}
                      >
                        {link.title}
                      </Button>
                    ))}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
      )}
    </Box>
  );
};

export default HeroHeader;
