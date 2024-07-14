import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  Box,
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Links } from "../dummyLinks";

export const NavBar = () => {
  const MotionText = motion(Text);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bgColor={"red"}
      position="fixed"
      width="100%"
      zIndex="10000"
      transition="background-color 0.3s"
      bg={isScrolled ? "primary.500" : "white"}
    >
      <Flex align={"center"} justifyContent={"space-between"} p={4}>
        <Flex align={"center"} gap={2}>
          <MotionBox
            width={{ base: "50px", sm: "35px" }}
            height={{ base: "50px", sm: "35px" }}
            borderRadius="9px"
            bgColor="#F5F5F5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MotionImage
              alt="hero-image"
              width={{ base: 50, sm: 35 }}
              height={{ base: 50, sm: 35 }}
              src="/assets/logo/losange-icon.png"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </MotionBox>
          <MotionText
            color={isScrolled ? "white" : "black"}
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            BVG - INNOVATION
          </MotionText>
        </Flex>

        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          _hover={{ backgroundColor: "secondary.500" }}
          aria-label="Open Menu"
        />

        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bgColor={"white"} flex={1}>
              <DrawerCloseButton />
              <DrawerBody
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                bgColor={"white"}
                mt={"100px"}
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
                  <Flex direction="row" gap={2} width={"100%"}>
                    <Button
                      width={"50%"}
                      colorScheme="primary"
                      onClick={onClose}
                    >
                      Contact-us
                    </Button>
                    <Button
                      width={"50%"}
                      colorScheme="secondary"
                      onClick={onClose}
                    >
                      Book a schedule
                    </Button>
                  </Flex>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};
