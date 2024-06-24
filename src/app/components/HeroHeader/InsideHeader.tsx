"use client";

import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MyCalenderIcon } from "../../../../public/assets/svg";

export const InsideHeader = () => {
  return (
    <Box mt={"50px"}>
      <Box>
        <Center>
          <Text fontSize={22}>Nous sommes au coeur de linnovations</Text>
        </Center>
      </Box>
      <Center>
        <Flex width={"600px"} mt={"26px"}>
          <Text fontWeight={"bold"} textAlign={"center"} fontSize={38}>
            We Are Premium Cleaning Company located in USA ready to make your
            life easier!!
          </Text>
        </Flex>
      </Center>
      <Center>
        <Flex width={"550px"} mt={"47px"}>
          <Text textAlign={"center"} fontSize={16}>
            At Cleanzer Crystal Clean, we believe in building a relationship
            with every one of our customers. Our cleaning programs are tailored
            to meet your needs. We dont believe in a one size fits all approach.
            Need us to wash dishes? Do laundry? Make the beds? Not a problem!
          </Text>
        </Flex>
      </Center>
      <Box mt={"63px"}>
        <Center>
          <Stack direction={"row"} spacing={4}>
            <Button
              color={"white"}
              bgColor={"primary.500"}
              _hover={{ backgroundColor: "primary.700" }}
              size={"lg"}
              rightIcon={
                <MyCalenderIcon fill={"white"} width={"18px"} height={"18px"} />
              }
            >
              Book A Schedule
            </Button>
            <Button
              borderColor={"primary.500"}
              variant={"outline"}
              size={"lg"}
              color={"black"}
            >
              Our Best Offer
            </Button>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};
