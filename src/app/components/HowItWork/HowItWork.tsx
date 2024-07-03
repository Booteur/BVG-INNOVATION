"use client";

import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserIcon } from "../../../../public/assets/svg";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const HowItWork = () => {
  const textWidth = useBreakpointValue({ base: "100%", md: "400px" });
  const iconSize = useBreakpointValue({ base: "40px", md: "60px" });
  const iconPadding = useBreakpointValue({ base: "10px", md: "20px" });

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
      },
    },
  };

  return (
    <MotionBox
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
      p={4}
    >
      <Center>
        <VStack spacing={6}>
          <MotionButton
            color={"primary.500"}
            bgColor={"#EFECFF"}
            size={"lg"}
            borderRadius={"39px"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Comment ça marche
          </MotionButton>
          <MotionText
            mt={"30px"}
            w={textWidth}
            fontWeight={"bold"}
            fontSize={"2xl"}
            textAlign={"center"}
            variants={boxVariants}
          >
            Travaillez plus intelligemment avec un accès facile pour a toutes
            vos données.
          </MotionText>
        </VStack>
      </Center>
      <Center mt={"80px"}>
        <HStack spacing={10} flexDirection={{ base: "column", md: "row" }}>
          <MotionBox width={{ base: "100%", md: "400px" }}>
            <HStack spacing={5}>
              <MotionBox
                bgColor={"#DBDCFF"}
                width={iconSize}
                height={iconSize}
                borderRadius={"20px"}
                paddingY={iconPadding}
                variants={boxVariants}
              >
                <Center>
                  <UserIcon width={25} height={25} fill={"primary.500"} />
                </Center>
              </MotionBox>
              <Box width={{ base: "auto", md: "155px" }}>
                <MotionText fontSize={"xl"} variants={boxVariants}>
                  Nous rendons vos idées réelles
                </MotionText>
              </Box>
            </HStack>
            <MotionBox mt={"10px"} variants={boxVariants}>
              <Text fontSize={"xl"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                impedit, labore consectetur, magnam corrupti ipsam aliquid nulla
                omnis vitae eos officia accusantium aperiam illum? Ut dolore est
                modi perspiciatis nam.
              </Text>
            </MotionBox>
            <MotionButton
              mt={"20px"}
              bgColor={"primary.500"}
              color={"white"}
              borderRadius={"72px"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={boxVariants}
            >
              Commencer
            </MotionButton>
          </MotionBox>
          <MotionBox variants={boxVariants}>
            <Image
              alt={"test"}
              src={"/assets/logo/Image.png"}
              width={{ base: "250px", md: "300px" }}
              height={{ base: "150px", md: "200px" }}
            />
          </MotionBox>
        </HStack>
      </Center>
    </MotionBox>
  );
};

export default HowItWork;
