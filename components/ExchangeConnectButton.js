import { Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function ExchangeConnectButton({ exchange }) {
  const [connected, setConnected] = useState(false);

  function handleConnect() {
    !connected && setConnected(true);
  }
  return (
    <Button
      onClick={handleConnect}
      key={exchange}
      padding={"30px"}
      width={"300px"}
    >
      <HStack spacing={2}>
        {connected && <Text>Connected To</Text>}{" "}
        <Heading fontSize={"20px"}>{exchange.toLocaleUpperCase()} </Heading>
        <Image
          height={6}
          borderRadius={"50%"}
          src={`https://raw.githubusercontent.com/umaresso/exchange-icons/master/png/100x100//${exchange}.png`}
        />
      </HStack>
    </Button>
  );
}

export default ExchangeConnectButton;
