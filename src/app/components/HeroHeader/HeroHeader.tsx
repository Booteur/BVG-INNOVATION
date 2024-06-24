import React from "react";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Links } from "./dummyLinks";
import { InsideHeader } from "./InsideHeader";

const HeroHeader = () => {
  return (
    <>
      <Box>
        <Flex ml={"100px"} mr={"100px"} justifyContent={"space-between"}>
          <Box
            width={"auto"}
            height={"auto"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Center>
              <Image
                alt="hero-image"
                width={100}
                height={100}
                src={"/assets/logo/BVG_Black_Plan de travail 1 copie 2.png"}
              />
            </Center>
          </Box>
          <Center>
            <Flex
              width={500}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {Links?.map((link, index) => (
                <Text fontSize={"18px"} cursor={"pointer"} key={index}>
                  {link?.title}
                </Text>
              ))}
            </Flex>
          </Center>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Button
              _hover={{ backgroundColor: "secondary.700" }}
              bgColor={"secondary.500"}
              color={"white"}
              size={"lg"}
            >
              Contactez -nous
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Center>
        <InsideHeader />
      </Center>
    </>
  );
};

export default HeroHeader;
