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
    <Flex flexDirection="column" align={"center"} width={"100%"} p={5}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
        <GridItem>
          <ContactCardMobile
            icon={<MailIcon width={"18px"} height={"18px"} fill={"#FFF"} />}
            title="Mail Us"
            info="contact@bvg-innovation.tech."
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
        w={"100%"}
        p={5}
      >
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Nom Et Prénom</FormLabel>
          <Input
            placeholder="john david"
            height={"47px"}
            fontSize="16px" // Set the font size to 16px
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Votre Email</FormLabel>
          <Input
            type="email"
            placeholder="exemple@votremail.com"
            height={"47px"}
            fontSize="16px" // Set the font size to 16px
          />
        </FormControl>
        <FormControl id="subject" mb={4} isRequired>
          <FormLabel>Objet</FormLabel>
          <Input
            placeholder="comment pouvons nous aider"
            height={"47px"}
            fontSize="16px" // Set the font size to 16px
          />
        </FormControl>
        <FormControl id="message" isRequired mb={8}>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="bonjour, je voudrais parler de la facon de..."
            fontSize="16px" // Set the font size to 16px
          />
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
        width={"100%"}
        boxShadow={"lg"}
        p={2}
      >
        <Box width={"100%"}>
          <HStack>
            <Flex
              rounded={"lg"}
              width={{ base: "40px", sm: "40px" }}
              height={{ base: "40px", sm: "40px" }}
              bgColor={"primary.500"}
              align={"center"}
              justify={"center"}
            >
              {icon}
            </Flex>

            <VStack align={"start"}>
              <Text fontSize={{ base: "14px", sm: "18px" }} color={"black"}>
                {title}
              </Text>
              <Text fontSize={{ base: "14px", sm: "18px" }} color={"gray.500"}>
                {info}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Flex>
    </HStack>
  );
};
