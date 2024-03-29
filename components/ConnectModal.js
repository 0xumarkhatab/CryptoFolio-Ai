import {
  Box,
  VStack,
  Center,
  Button,
  Text,
  Wrap,
  WrapItem,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { exchangesList, exchangeColors } from "./data/fetchData";
import ExchangeConnectButton from "./ExchangeConnectButton";
const ConnectModal = ({ ModalStateToggler }) => {
  return (
    <>
      <Center
        position={"sticky"}
        top={"0"}
        left={"0"}
        width={"100vw"}
        height={"100vh"}
        bg={"rgba(0,0,0,0.8)"}
        zIndex={"10"}
      >
        <VStack
          spacing={10}
          height={"80vh"}
          width={"80vw"}
          paddingTop={"5vh"}
          bg={"rgba(0,0,0,0.5)"}
          borderRadius={"20px"}
        >
          <Heading color={"white"}>Connect With</Heading>
          <Wrap width={"70vw"} spacing={2}>
            {exchangesList.map((exchange) => {
              return (
                <WrapItem key={"wrap" + exchange}>
                  <ExchangeConnectButton
                    key={"connectButton" + exchange}
                    exchange={exchange}
                  />
                </WrapItem>
              );
            })}
          </Wrap>
          <Button
            onClick={() => ModalStateToggler(false)}
            colorScheme={"green"}
          >
            Go Back
          </Button>
        </VStack>
      </Center>
    </>
  );
};

export default ConnectModal;
