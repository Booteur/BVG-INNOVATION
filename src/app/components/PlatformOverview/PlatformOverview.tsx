import {
  Box,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  useBreakpointValue,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { FirstCardItem } from "./components/FirstCardItem";
import { platformOverview, platformOverview2 } from "./dummyPlatform";
import { CardItem } from "./components/SecondCardItem";

export const PlatformOverview = () => {
  const responsive = useBreakpointValue({ base: "mobile", md: "web" });
  return (
    <Box mt={"50px"} mb={"50px"}>
      <Flex
        p={3}
        alignItems={"center"}
        justifyContent={{
          base: "none",
          md: "space-around",
        }}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <VStack
          align={{ base: "center", sm: "center", md: "start" }}
          justifyContent={"center"}
          width={{ base: "100%", md: "280px" }}
          spacing={4}
        >
          <Flex
            bgColor={"#FFF3E1"}
            width={"155px"}
            height={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"20px"}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} color={"secondary.500"}>
              Platform
            </Text>
          </Flex>
          <Text
            textAlign={{ base: "center", sm: "center", md: "left" }}
            fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}
          >
            Get an overview of the{" "}
            <span style={{ fontWeight: "bold" }}>BVG-INNOVATION </span> Tools
          </Text>
        </VStack>

        <Flex
          width={{ base: "100%", md: "400px" }}
          align={"center"}
          justify={"center"}
        >
          <Text
            textAlign={{ base: "center", sm: "center", md: "right" }}
            fontSize={{ base: "xl", sm: "xl", md: "xl" }}
          >
            Provide the best, most intuitive support across all channels.
            Proactively understand customer needs to serve excellence the first
            time.
          </Text>
        </Flex>
      </Flex>
      {responsive === "mobile" ? (
        <>
          <Flex
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", lg: "row" }}
            p={4}
          >
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                {platformOverview.slice(0, 1).map((platformData, index) => (
                  <CardItem
                    key={index}
                    icon={platformData.icon}
                    image={platformData.image}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>

              <GridItem>
                {platformOverview.slice(1, 2).map((platformData, index) => (
                  <FirstCardItem
                    key={index}
                    icon={platformData.icon}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>
            </Grid>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", lg: "row" }}
            p={4}
          >
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                {platformOverview2.slice(0, 1).map((platformData, index) => (
                  <FirstCardItem
                    key={index}
                    icon={platformData.icon}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>

              <GridItem>
                {platformOverview2.slice(1, 2).map((platformData, index) => (
                  <CardItem
                    key={index}
                    icon={platformData.icon}
                    image={platformData.image}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </GridItem>
            </Grid>
          </Flex>
        </>
      ) : (
        <VStack spacing={10} p={5} align={"center"} justify={"space-around"}>
          <Flex alignItems={"start"} justifyContent={"space-around"} gap={10}>
            <Box>
              <SimpleGrid>
                {platformOverview.slice(0, 1)?.map((platformData, index) => (
                  <CardItem
                    key={index}
                    icon={platformData.icon}
                    image={platformData.image}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <SimpleGrid>
                {platformOverview.slice(1, 2)?.map((platformData, index) => (
                  <FirstCardItem
                    key={index}
                    icon={platformData.icon}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
          <Flex alignItems={"start"} justifyContent={"space-around"} gap={10}>
            <Box>
              <SimpleGrid>
                {platformOverview2.slice(0, 1)?.map((platformData, index) => (
                  <FirstCardItem
                    key={index}
                    icon={platformData.icon}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <SimpleGrid>
                {platformOverview2.slice(1, 2)?.map((platformData, index) => (
                  <CardItem
                    key={index}
                    icon={platformData.icon}
                    image={platformData.image}
                    title={platformData.title}
                    description={platformData.description}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};
