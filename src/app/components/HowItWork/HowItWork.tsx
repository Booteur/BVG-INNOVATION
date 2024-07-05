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
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IdeaIcon } from "../../../../public/assets/svg";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const HowItWork = () => {
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
      //bgColor={"red"}
    >
      <Box p={3}>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          //bgColor={"pink"}
          direction={"column"}
          p={3}
        >
          <Flex
            color={"primary.500"}
            bgColor={"#EFECFF"}
            w={"170px"}
            h={"60px"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"20px"}
          >
            <Text fontSize={"xl"}>Comment ça marche</Text>
          </Flex>
          <Box
            mt={"20px"}
            //bgColor={"red"}
            alignItems={"center"}
            justifyContent={"center"}
            maxW={{ base: "100%", sm: "65%", lg: "50%", md: "100%" }}
          >
            <MotionText
              fontWeight={"bold"}
              fontSize={{ base: "xl", sm: "2xl", lg: "4xl", md: "5xl" }}
              textAlign={"center"}
              variants={boxVariants}
              color={"black"}
            >
              Travaillez plus intelligemment avec un accès facile pour a toutes
              vos données.
            </MotionText>
          </Box>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          //bgColor={"green"}
          direction={"column"}
          mt={"20px"}
        >
          <Box
            //bgColor={"red"}
            alignItems={"center"}
            justifyContent={"center"}
            maxW={{ base: "100%", sm: "65%", lg: "50%", md: "100%" }}
            p={3}
          >
            <HStack spacing={8} flexDirection={{ base: "column", md: "row" }}>
              <MotionBox width={{ base: "100%", md: "400px" }}>
                <HStack spacing={5}>
                  <Flex
                    bgColor={"primary.500"}
                    width={{ base: "45px", md: "60px" }}
                    height={{ base: "35px", md: "60px" }}
                    borderRadius={"20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <IdeaIcon
                      width={{ base: "20px", md: "30px" }}
                      height={{ base: "20px", md: "30px" }}
                      fill={"secondary.500"}
                    />
                  </Flex>
                  <Box width={{ base: "auto", md: "200px" }}>
                    <MotionText
                      fontWeight={"bold"}
                      fontSize={"2xl"}
                      variants={boxVariants}
                      color={"black"}
                    >
                      Nous rendons vos idées réelles
                    </MotionText>
                  </Box>
                </HStack>
                <MotionBox mt={"15px"} variants={boxVariants}>
                  <Text fontSize={"xs-large"} textAlign={"justify"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vero impedit, labore consectetur, magnam corrupti ipsam
                    aliquid nulla omnis vitae eos officia accusantium aperiam
                    illum? Ut dolore est modi perspiciatis nam.
                  </Text>
                </MotionBox>
                <MotionButton
                  mt={"20px"}
                  bgColor={"primary.500"}
                  color={"white"}
                  borderRadius={"12px"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={boxVariants}
                >
                  Commencer
                </MotionButton>
              </MotionBox>
              <MotionBox variants={boxVariants}>
                <Image alt="user-think" src="/assets/images/user-think.png" />
              </MotionBox>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default HowItWork;
