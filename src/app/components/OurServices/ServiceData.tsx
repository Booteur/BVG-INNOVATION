"use client";

import { Box, Center, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description }: any) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      bgColor={"#F9F9F9"}
      p={6}
      borderRadius="12px"
      boxShadow="md"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      textAlign="center"
      w={{ base: "full", md: "350px" }}
      m={2}
    >
      <HStack spacing={4} bgColor={"yellow"}>
        <Flex
          bgColor={"white"}
          boxShadow={"lg"}
          borderRadius={"12px"}
          alignItems={"center"}
          justify={"center"}
        >
          {icon}
        </Flex>
        <Heading
          bgColor={"red"}
          fontWeight="bold"
          fontSize="22px"
          textAlign={"left"}
          width={"70%"}
        >
          {title}
        </Heading>
      </HStack>

      <Text mt={2} color="gray.600">
        {description}
      </Text>
    </MotionBox>
  );
};

export default ServiceCard;
