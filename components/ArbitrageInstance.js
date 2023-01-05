import { HStack, Image, Td, Text, Tr, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { currencySymbolMap } from "./data/fetchData";

function ArbitrageInstance({ opportunity }) {
  const [isAvailed, setIsAvailed] = useState(false);
  let sourceLogo = `https://raw.githubusercontent.com/umaresso/exchange-icons/master/png/100x100/${opportunity.source}.png`;
  let sinkLogo = `https://raw.githubusercontent.com/umaresso/exchange-icons/master/png/100x100//${opportunity.sink}.png`;
  let currencyLogo = `https://raw.githubusercontent.com/umaresso/cryptocurrency-icons/master/128/color/${
    currencySymbolMap[opportunity.currency]
  }.png`;
  let price = opportunity.price;
  let currency = opportunity.currency;
  return (
    <Tr height={"fit-content"}>
      <Td>
        {" "}
        <HStack align={"center"} spacing={5}>
          <Image
            borderRadius={"20px"}
            height={"30px"}
            objectFit={"contain"}
            src={sourceLogo}
          />
          <Text>+</Text>
          <Image
            borderRadius={"20px"}
            height={"30px"}
            objectFit={"contain"}
            src={sinkLogo}
          />
        </HStack>
      </Td>
      <Td>
        <HStack spacing={2}>
          <Text>10</Text>
          <Image borderRadius={"50%"} height={"30px"} src={currencyLogo} />
          <Text>=</Text>
          <Text>{price * 10 > 0 ? parseInt(price * 10) : price * 10}$</Text>
        </HStack>
      </Td>
      <Td>
        <HStack>
          <Button
            colorScheme={"twitter"}
            onClick={() => {
              !isAvailed && setIsAvailed(true);
            }}
          >
            {isAvailed ? "Traded" : "Avail"}
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default ArbitrageInstance;
