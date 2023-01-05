import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  VStack,
  Text,
  Stack,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Introduction() {
  return (
    <>
      <Center
        zIndex={"9"}
        height={"100vh"}
        paddingBottom={"10vh"}
        background={`linear-gradient(rgba(0, 0,0, 0.1), rgba(0, 0, 0, 0.1)),url("./bg9.jpg")`}
        backgroundSize={"cover"}
        width={"100vw"}
      >
        <Box
          position={"absolute"}
          top={"0vh"}
          width={"100vw"}
          height={"30vh"}
          backgroundImage={
            "linear-gradient(0deg,transparent,rgba(0,0,0,0.4),black)"
          }
        />

        <VStack width={["80vw", "60vw", "40vw"]} spacing={5} color={"white"}>
          <Heading
            fontFamily={"sans-serif"}
            fontWeight={"900"}
            fontSize={["2.5em", "3.5em", "4.5em"]}
          >
            Maximize your crypto returns
          </Heading>
          <Text fontSize={"16px"}>
            platform for cryptocurrency portfolio management that helps
            investors optimize their investment strategy and maximize their
            returns in the fast-evolving and highly volatile cryptocurrency
            market. With features like automated arbitrage opportunities,
            advanced risk analysis, and portfolio analytics and rebalancing, our
            platform is uniquely designed to address the challenges faced by
            individual investors in the cryptocurrency market
          </Text>
          <Button colorScheme={"green"} width={"fit-content"}>
            Get started
          </Button>

          <Box
            position={"absolute"}
            top={"90vh"}
            width={"100vw"}
            height={"7.4vh"}
            backgroundImage={
              "linear-gradient(180deg,transparent,rgba(0,0,0,0.4),black)"
            }
          />
        </VStack>
      </Center>
    </>
  );
}

export default Introduction;
