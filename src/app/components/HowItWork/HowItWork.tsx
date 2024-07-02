"use client";

import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { UserIcon } from "../../../../public/assets/svg";

const HowItWork = () => {
  return (
    <Box
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
    >
      <Center>
        <VStack>
          <Button
            color={"primary.500"}
            bgColor={"#EFECFF"}
            size={"lg"}
            borderRadius={"39px"}
          >
            Comment ça marche
          </Button>
          <Text
            mt={"30px"}
            w={"400px"}
            fontWeight={"bold"}
            fontSize={"2xl"}
            textAlign={"center"}
          >
            Travaillez plus intelligemment avec un accès facile pour a toutes
            vos données.
          </Text>
        </VStack>
      </Center>
      <Center mt={"80px"}>
        <HStack>
          <Box width={"400px"}>
            <HStack spacing={5}>
              <Box
                bgColor={"#DBDCFF"}
                width={"60px"}
                height={"60px"}
                borderRadius={"20px"}
                paddingY={"20px"}
              >
                <Center>
                  <UserIcon width={25} height={25} fill={"primary.500"} />
                </Center>
              </Box>
              <Box width={"155px"}>
                <Text fontSize={"xl"}>Nous rendons vos idées réelles </Text>
              </Box>
            </HStack>
            <Box mt={"10px"}>
              <Text fontSize={"xl"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                impedit, labore consectetur, magnam corrupti ipsam aliquid nulla
                omnis vitae eos officia accusantium aperiam illum? Ut dolore est
                modi perspiciatis nam.
              </Text>
            </Box>
            <Button
              mt={"20px"}
              bgColor={"primary.500"}
              color={"white"}
              borderRadius={"72px"}
            >
              Commencer
            </Button>
          </Box>
          <Box>
            <Image
              alt={"test"}
              src={"/assets/logo/Image.png"}
              width={300}
              height={200}
            />
          </Box>
        </HStack>
      </Center>
    </Box>
  );
};

export default HowItWork;
