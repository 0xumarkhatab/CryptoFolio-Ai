import { Box, Button, Heading, HStack, Img, VStack ,Text, Stack} from '@chakra-ui/react'
import React from 'react'

function Introduction() {
  let image =
    './images/' + (1 + (parseInt(Math.random() * 100000) % 14)) + '.png'
  console.log(image)
  return (
    <Stack bg={"black"} color={"white"} direction={["column","column","row"]} paddingTop={"10vh"} align={"center"}  justify={["center","center","space-around"]} height={"100vh"}>
      <VStack  width={"40vw"} align={"left"}>
        <Heading fontFamily={"sans-serif"} fontWeight={"900"} fontSize={"4.5em"} >Maximize your crypto returns</Heading>
        <Text fontSize={"18px"}>
          Additionally, our platform is user-friendly and easy to navigate,
          making it accessible to all skill levels. With a focus on security and
          transparency, you can trust that your investments are in good hands.
          So join us today and start maximizing your profits in the exciting
          world of defi arbitrage!
        </Text>
        <Button colorScheme={"green"} width={"fit-content"}>Get started</Button>
      </VStack>
      <Img src="./intro.jpg" width={'35vw'}   objectFit={"contain"} borderRadius={"20px"}  />
    </Stack>
  )
}

export default Introduction
