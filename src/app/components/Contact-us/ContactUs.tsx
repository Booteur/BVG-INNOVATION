import React, { ReactNode } from "react";
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
  useColorMode,
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

export const ContactCard = ({
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
    <Center>
      <HStack>
        <Flex
          align={"center"}
          justify={"space-between"}
          bgColor={"white"}
          borderRadius={"30px"}
          borderWidth={2}
          borderColor={"#E8E8E8"}
          width={{ md: "70vw", lg: "30vw", "2xl": "20vw" }}
          gap={10}
          p={4}
          boxShadow={"lg"}
        >
          <Flex align={"center"} justify={"center"} gap={2}>
            <Flex
              width={"55px"}
              height={"55px"}
              bgColor={colorMode === "light" ? "primary.500" : "secondary.500"}
              borderRadius={"12px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {icon}
            </Flex>
            <Text color={"black"}>{title}</Text>
          </Flex>
          <Text fontSize={"15 px"} color={"gray.500"}>
            {info}
          </Text>
        </Flex>
      </HStack>
    </Center>
  );
};

export default ContactUs;
