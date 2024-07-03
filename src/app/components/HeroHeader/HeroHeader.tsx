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

  return <Box p={4}>cc</Box>;
};

export default HeroHeader;
