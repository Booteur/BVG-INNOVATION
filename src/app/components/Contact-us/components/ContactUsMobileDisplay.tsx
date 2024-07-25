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
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MailIcon, TelIcon } from "../../../../../public/assets/svg";

export const ContactUsMobileDisplay = () => {
  return (
    <Flex flexDirection="column" align={"center"} width={"100%"} p={5}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
        <ContactCardMobile
          icon={<MailIcon width={"18px"} height={"18px"} fill={"white"} />}
          title="Mail Us"
          info="contact@bvg-innovation.tech"
        />
        <ContactCardMobile
          icon={<TelIcon width={"18px"} height={"18px"} fill={"white"} />}
          title="Call Us"
          info="+216 51 719 140"
        />
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
          <FormLabel color={"black"}>Nom Et Prénom</FormLabel>
          <Input
            placeholder="john david"
            height={"47px"}
            fontSize="16px"
            borderColor={"gray.300"}
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel color={"black"}>Votre Email</FormLabel>
          <Input
            type="email"
            placeholder="exemple@votremail.com"
            height={"47px"}
            fontSize="16px"
            borderColor={"gray.300"}
          />
        </FormControl>
        <FormControl id="subject" mb={4} isRequired>
          <FormLabel color={"black"}>Objet</FormLabel>
          <Input
            placeholder="comment pouvons nous aider"
            height={"47px"}
            fontSize="16px"
            borderColor={"gray.300"}
          />
        </FormControl>
        <FormControl id="message" isRequired mb={8}>
          <FormLabel color={"black"}>Message</FormLabel>
          <Textarea
            placeholder="bonjour, je voudrais parler de la facon de..."
            fontSize="16px"
            borderColor={"gray.300"}
          />
        </FormControl>
        <Center>
          <Button color={"white"} size="lg" w="206px" borderRadius={"79px"}>
            Envoyer le message
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export const ContactCardMobile = ({
  icon,
  title,
  info,
}: {
  icon: ReactNode;
  title: string;
  info: string;
}) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      bgColor={"white"}
      borderRadius={"12px"}
      borderWidth={1}
      borderColor={"#E8E8E8"}
      width={"100%"}
      boxShadow={"lg"}
      p={2}
    >
      <HStack>
        <Flex
          rounded={"lg"}
          width={{ base: "40px", sm: "40px" }}
          height={{ base: "40px", sm: "40px" }}
          bgColor={colorMode === "light" ? "primary.500" : "secondary.500"}
          align={"center"}
          justify={"center"}
        >
          {icon}
        </Flex>

        <Stack align={"start"}>
          <Text fontSize={{ base: "14px", sm: "18px" }} color={"black"}>
            {title}
          </Text>
          <Text fontSize={{ base: "14px", sm: "18px" }} color={"gray.500"}>
            {info}
          </Text>
        </Stack>
      </HStack>
    </Flex>
  );
};
