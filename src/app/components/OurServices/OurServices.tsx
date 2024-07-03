"use client";

import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WorlMobile } from "../../../../public/assets/svg";
import ServiceCard from "./ServiceData";

// Définir des composants Motion pour les animations
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const services = [
  {
    icon: <WorlMobile width={20} height={20} />,
    title: "Developpement d'applications",
    description:
      "Où que vous soyez, 24h/24 et 7j/7, consultez facilement votre portefeuille immobilier en ligne",
  },
  {
    icon: <WorlMobile width={20} height={20} />,
    title: "Design",
    description:
      "Organisez facilement les informations sur vos propriétés sous gestion, vos locataires et propriétaires",
  },
  {
    icon: <WorlMobile width={20} height={20} />,
    title: "Infographie",
    description:
      "Automatisez vos quittances mensuelles en quelques clics ainsi que la confirmation et l’envoi des quittances post-paiement.",
  },
  {
    icon: <WorlMobile width={20} height={20} />,
    title: "Refonte site & applications",
    description: "Facilitez le paiement des loyers via mobile money.",
  },
  {
    icon: <WorlMobile width={20} height={20} />,
    title: "Consulting IT",
    description:
      "Publiez vos annonces directement sur les plateformes spécialisées.",
  },
];

const ServicesSection = () => {
  return (
    <Box>
      <VStack spacing={4} textAlign="center" mb={12}>
        <MotionButton
          color={"primary.500"}
          bgColor={"#EFECFF"}
          size={"lg"}
          borderRadius={"39px"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Services
        </MotionButton>
        <Heading maxW={{ base: "90%", md: "500px" }}>
          Des services mis à votre disposition pour booster votre productivité
        </Heading>
        <Text fontSize="lg" color="gray.500" maxW="3xl">
          Découvrez comment nous pouvons vous aider à redéfinir votre efficacité
        </Text>
      </VStack>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        align={"center"}
        justify="center"
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default ServicesSection;
