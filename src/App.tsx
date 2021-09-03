import * as React from "react";
import { Box, ChakraProvider, Heading, HStack, theme } from "@chakra-ui/react";
import { Card } from "./components/card";
import House1 from "./assets/house1.jpg";
import House2 from "./assets/house2.jpg";
import House3 from "./assets/house3.jpg";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box h="100vh" w="full" bg="gray.700"></Box>
    <Box h="100vh" w="full" px="250px" py="60px">
      <Heading
        textAlign="center"
        color="teal.500"
        letterSpacing="1px"
        pb="60px"
      >
        Our Properties
      </Heading>
      <HStack spacing="50px">
        <Card imageSrc={House1} />
        <Card imageSrc={House2} />
        <Card imageSrc={House3} />
      </HStack>
    </Box>
    <Box h="100vh" w="full" bg="gray.700"></Box>
  </ChakraProvider>
);
