import { Box, Heading, Image, ScaleFade, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const Card = ({ imageSrc }: { imageSrc: string }) => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Box w="100%">
      <ScaleFade
        initialScale={0.9}
        in={enterCount > 0}
        whileHover={{ scale: 1.1 }}
      >
        <Box
          w="full"
          borderRadius="lg"
          borderWidth="1px"
          cursor="pointer"
          overflow="hidden"
          ref={ref}
        >
          <Image src={imageSrc}></Image>
          <Box p={6}>
            <Heading fontSize={20} letterSpacing="1px" pb="20px">
              123 Long Road, America
            </Heading>
            <Text>
              Sint commodo enim elit consectetur proident culpa aliqua voluptate
              ea pariatur mollit nisi esse nulla. Deserunt consectetur ullamco
              incididunt commodo ullamco quis ullamco commodo. Sint velit duis
              incididunt eiusmod reprehenderit nisi sunt laboris magna labore
              nisi.
            </Text>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};
