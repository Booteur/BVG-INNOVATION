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
  useToast,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MailIcon, TelIcon } from "../../../../../public/assets/svg";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextInput } from " _/app/components/Input/TextInput";
import { contactValues } from " _/app/components/Contact-us/types/contact-values";
import { contactValidationSchema } from " _/app/components/Contact-us/validation/contact-validation";

export const ContactUsMobileDisplay = () => {
  const toast = useToast();

  const handleSubmit = async (values: any, actions: any) => {
    console.log("Submitting form with values:", values);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await res.json();
      if (result.success) {
        toast({
          title: "Message sent successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        actions.resetForm();
      } else {
        toast({
          title: "Failed to send message.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

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
        <Formik
          enableReinitialize
          initialValues={contactValues}
          validationSchema={contactValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, errors, values }) => (
            <Form>
              <Text>{JSON.stringify(values)}</Text>
              <Text>{JSON.stringify(errors)}</Text>
              <VStack spacing={6}>
                <TextInput
                  name="userInfo"
                  label="Nom & Prenom"
                  placeholder="Enter your name"
                  required
                  onChangefunc={(e: { target: { value: any } }) =>
                    setFieldValue("userInfo", e.target.value)
                  }
                />
                <TextInput
                  name="email"
                  label="Votre Email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChangefunc={(e: { target: { value: any } }) =>
                    setFieldValue("email", e.target.value)
                  }
                />

                <TextInput
                  name="objectMessage"
                  label="Object"
                  placeholder="Enter the Subject"
                  required
                  maxLength={100}
                  onChangefunc={(e: { target: { value: any } }) =>
                    setFieldValue("objectMessage", e.target.value)
                  }
                />
                <TextInput
                  name="message"
                  label="Message"
                  as="textarea"
                  placeholder="Enter your message"
                  height={"150px"}
                  required
                  maxLength={500}
                  onChangefunc={(e: { target: { value: string } }) =>
                    setFieldValue("message", e.target.value)
                  }
                />
                <Center>
                  <Button
                    size="lg"
                    w="206px"
                    borderRadius={"12px"}
                    color={"white"}
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Envoyer le message
                  </Button>
                </Center>
              </VStack>
            </Form>
          )}
        </Formik>
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
