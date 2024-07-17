import {
  Flex,
  Box,
  HStack,
  Center,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { MailIcon, TelIcon } from "../../../../../public/assets/svg";
import { ContactCard } from "../ContactUs";

export const ContactUsWebDisplay = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <HStack
        spacing={20}
        align={"center"}
        justify={"center"}
        width={{ md: "85vw", lg: "30vw", "2xl": "20vw" }}
      >
        <ContactCard
          icon={<MailIcon width={"42px"} height={"42px"} fill={"white"} />}
          title="Mail Us"
          info="contact@bvg-innovation.tech"
        />
        <ContactCard
          icon={<TelIcon width={"42px"} height={"42px"} fill={"white"} />}
          title="Call Us"
          info="+216 51 719 140"
        />
      </HStack>

      <Center>
        <Box
          mt={"40px"}
          bgColor={"white"}
          borderRadius={"40px"}
          boxShadow={"lg"}
          width={{ md: "80vw", lg: "80vw", "2xl": "55vw" }}
        >
          <VStack align={"start"} justify={"center"} spacing={10} p={"50px"}>
            <HStack spacing={5} width={"100%"}>
              <FormControl id="message" isRequired>
                <FormLabel color={"black"}>Email address</FormLabel>
                <Input borderColor={"gray.300"} type="email" height={"47px"} />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel color={"black"}>Email address</FormLabel>
                <Input borderColor={"gray.300"} type="email" height={"47px"} />
              </FormControl>
            </HStack>
            <FormControl id="message" isRequired width={"50%"}>
              <FormLabel color={"black"}>Email address</FormLabel>
              <Input borderColor={"gray.300"} type="email" height={"47px"} />
            </FormControl>
            <FormControl id="message" isRequired width={"100%"}>
              <FormLabel color={"black"}>Message</FormLabel>
              <Textarea borderColor={"gray.300"} size={"lg"} height={"200px"} />
            </FormControl>
          </VStack>

          <Center pb={10}>
            <Button size="lg" w="206px" borderRadius={"79px"} color={"white"}>
              Envoyer le message
            </Button>
          </Center>
        </Box>
      </Center>
    </Flex>
  );
};
