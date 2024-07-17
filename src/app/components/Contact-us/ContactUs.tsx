import React from "react";
import {
  Box,
  Flex,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Text,
  useBreakpointValue,
  Center,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { MailIcon, TelIcon } from "../../../../public/assets/svg";
import { ContactUsWebDisplay } from "./components/ContactUsWebDisplay";
import { ContactUsMobileDisplay } from "./components/ContactUsMobileDisplay";

const ContactUs = () => {
  const responsive = useBreakpointValue({
    base: "mobile",
    sm: "tablet",
    md: "web",
  });

  return (
    <Box>
      {responsive === "web" ? (
        <Flex
          bgImage={"/assets/images/contact/background.png"}
          align={"center"}
          justify={"center"}
          backgroundRepeat="no-repeat"
          backgroundPosition="right"
          backgroundSize="contain"
          h="150vh"
        >
          <ContactUsWebDisplay />
        </Flex>
      ) : (
        <Flex
          bgImage={"/assets/images/contact/background.png"}
          align={"center"}
          justify={"center"}
          backgroundRepeat="no-repeat"
          backgroundPosition="right"
          backgroundSize="contain"
        >
          <ContactUsMobileDisplay />
        </Flex>
      )}
    </Box>
  );
};

export const ContactCard = ({ icon, title, info }: any) => {
  return (
    <Center>
      <HStack>
        <Flex
          align={"center"}
          justify={"space-between"}
          bgColor={"white"}
          borderRadius={"30px"}
          borderWidth={2}
          borderColor={"#E8E8E8"}
          width={{ md: "40vw", lg: "30vw", "2xl": "20vw" }}
          gap={10}
          p={4}
          boxShadow={"lg"}
        >
          <Flex align={"center"} justify={"center"} gap={2}>
            <Flex
              width={"73px"}
              height={"73px"}
              bgColor={"primary.500"}
              borderRadius={"20px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {icon}
            </Flex>
            <Text color={"black"}>{title}</Text>
          </Flex>
          <Text fontSize={"16px"} color={"gray.500"}>
            {info}
          </Text>
        </Flex>
      </HStack>
    </Center>
  );
};

export default ContactUs;
