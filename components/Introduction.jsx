import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  VStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";

function Introduction() {
  return (
    <Stack
      spacing={[10, 10, 5]}
      bg={"black"}
      color={"white"}
      direction={["column", "column", "column", "row"]}
      paddingTop={"10vh"}
      align={"center"}
      justify={["center", "center", "center", "space-around"]}
      height={"fit-content"}
      minH={"100vh"}
      pb={"5vh"}
    >
      <VStack
        width={["80vw", "70vw", "60vw", "30vw"]}
        align={["left"]}
        spacing={5}
      >
        <Heading
          fontFamily={"sans-serif"}
          fontWeight={"900"}
          fontSize={["2.5em", "3.5em", "4.5em"]}
        >
          Maximize your crypto returns
        </Heading>
        <Text fontSize={"18px"}>
          Additionally, our platform is user-friendly and easy to navigate,
          making it accessible to all skill levels. With a focus on security and
          transparency, you can trust that your investments are in good hands.
          So join us today and start maximizing your profits in the exciting
          world of defi arbitrage!
        </Text>
        <Button colorScheme={"green"} width={"fit-content"}>
          Get started
        </Button>
      </VStack>
      <Img
        src="./intro.jpg"
        height={"60vh"}
        objectFit={"contain"}
        borderRadius={"20px"}
      />
    </Stack>
  );
}

export default Introduction;
