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
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { MailIcon, TelIcon } from "../../../../../public/assets/svg";

export const ContactUsMobileDisplay = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width={"100%"} p={5}>
      <SimpleGrid columns={2} spacing={5}>
        <GridItem>
          <ContactCardMobile
            icon={<MailIcon width={"18px"} height={"18px"} fill={"#FFF"} />}
            title="Mail Us"
            info="contact@gmail.com"
          />
        </GridItem>
        <GridItem>
          <ContactCardMobile
            icon={<TelIcon width={"18px"} height={"18px"} fill={"#FFF"} />}
            title="Call Us"
            info="+216 51 719 140"
          />
        </GridItem>
      </SimpleGrid>

      <Box
        mt={"40px"}
        bgColor={"white"}
        borderRadius={"20px"}
        boxShadow={"lg"}
        w={{ base: "100%", sm: "100%" }}
        p={5}
      >
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Nom Et Prénom</FormLabel>
          <Input placeholder="john david" height={"47px"} />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Votre Email</FormLabel>
          <Input
            type="email"
            placeholder="exemple@votremail.com"
            height={"47px"}
          />
        </FormControl>
        <FormControl id="subject" mb={4} isRequired>
          <FormLabel>Objet</FormLabel>
          <Input placeholder="comment pouvons nous aider" height={"47px"} />
        </FormControl>
        <FormControl id="message" isRequired height={"200px"}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="bonjour, je voudrais parler de la facon de..." />
        </FormControl>
        <Center>
          <Button
            colorScheme="primary"
            size="lg"
            w="206px"
            borderRadius={"79px"}
          >
            Envoyer le message
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export const ContactCardMobile = ({ icon, title, info }: any) => {
  return (
    <HStack>
      <Flex
        align={"center"}
        justify={"space-between"}
        bgColor={"white"}
        borderRadius={"10px"}
        borderWidth={2}
        borderColor={"#E8E8E8"}
        width={{ base: "300px", sm: "300px" }}
        p={2}
      >
        <VStack align={"start"} justify={"start"}>
          <Flex align={"center"} justify={"center"} gap={2}>
            <Flex
              rounded={"lg"}
              width={{ base: "40px", sm: "70px" }}
              height={{ base: "40px", sm: "70px" }}
              bgColor={"primary.500"}
              align={"center"}
              justify={"center"}
            >
              {icon}
            </Flex>

            <Text fontSize={"16px"} color={"black"}>
              {title}
            </Text>
          </Flex>

          <Text fontSize={{ base: "14px", sm: "22px" }} color={"gray.500"}>
            {info}
          </Text>
        </VStack>
      </Flex>
    </HStack>
  );
};
