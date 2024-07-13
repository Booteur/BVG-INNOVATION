import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Flex,
  Divider,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { SocialLinks } from "./socialLinks";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

export const Footer = () => {
  return (
    <Box p={10} bgColor={"primary.500"}>
      <Flex
        direction={{ base: "column", sm: "row", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 10, md: 20 }}
      >
        <VStack
          spacing={5}
          bgColor={"white"}
          borderRadius={"20px"}
          width={{ base: "100%", sm: "400px", md: "350px" }}
          height={"250px"}
          align={"center"}
          justify={"center"}
        >
          <Flex align={"center"} justifyContent={"center"} gap={2}>
            <Box
              width={{ base: "30px", sm: "35px", md: "65px" }}
              height={{ base: "30px", sm: "35px", md: "65px" }}
              borderRadius="9px"
              bgColor="#F5F5F5"
            >
              <Image
                alt="hero-image"
                width={{ base: 30, sm: 35, md: 65 }}
                height={{ base: 30, sm: 35, md: 65 }}
                src="/assets/logo/losange-icon.png"
              />
            </Box>
            <Text
              color="black"
              fontSize={{ base: "md", sm: "lg", md: "2xl" }}
              fontWeight="extrabold"
            >
              BVG - INNOVATION
            </Text>
          </Flex>
          <VStack spacing={5}>
            <Flex gap={4} direction={"column"}>
              <Text>1811 Silverside Rd, Wilmington, DE 19810, USA</Text>
              <Text>US: +1 (001) 256-0034</Text>
              <Text>email: contact@bvg-innovation.tech</Text>
            </Flex>
          </VStack>
        </VStack>
        <VStack
          align={{ base: "center", sm: "center", md: "start" }}
          justify={{ base: "center", sm: "center", md: "start" }}
        >
          <Flex
            align={{ base: "flex-start", md: "start" }}
            justify={{ base: "flex-start", md: "start" }}
            flexDirection={{ base: "row", sm: "column", md: "column" }}
            gap={{ base: 10, sm: 10, md: 10 }}
          >
            <Text color={"white"}>Acceuil</Text>
            <Text color={"white"}>Nos Services</Text>
            <Text color={"white"}>A propos</Text>
            <Text color={"white"}>Contact-us</Text>
          </Flex>
        </VStack>
      </Flex>

      <Box mt={10} width={{ base: "100%", md: "70%" }}>
        <Flex align={"flex-start"} justify={{ base: "center", md: "flex-end" }}>
          <Divider width={{ base: "100%", md: "420px" }} />
        </Flex>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify={{ base: "flex-start", md: "space-between" }}
        width={{ base: "100%", md: "70%" }}
        mt={5}
      >
        <Flex
          align={{ base: "flex-start", md: "center" }}
          justify={{ base: "flex-start", md: "center" }}
          mb={{ base: 5, md: 0 }}
        >
          <Flex gap={5}>
            <Text color={"white"}>Follow Us : </Text>
            {SocialLinks?.map((links, index) => (
              <CustomTooltip
                placement={"bottom-start"}
                label={links.title}
                key={index}
              >
                <Link
                  key={index}
                  href={links.link}
                  isExternal
                  //_hover={{ color: "secondary.500" }}
                >
                  {links.icon}
                </Link>
              </CustomTooltip>
            ))}
          </Flex>
        </Flex>
        <HStack
          width={{ base: "100%", md: "40%" }}
          align={"center"}
          spacing={20}
          justify={"space-between"}
        >
          <Text
            color={"white"}
            fontSize={"14px"}
            textAlign={{ base: "left", md: "left" }}
          >
            Copyright © BVG-INNOVATION
          </Text>
          <Flex
            bgColor={"white"}
            w={"30px"}
            h={"30px"}
            borderRadius={"50px"}
            align={"center"}
            justify={"center"}
          >
            <ArrowUpIcon />
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};
