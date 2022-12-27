import {
  Heading,
  HStack,
  Img,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ArbitrageInstance from "./ArbitrageInstance";
import {currencySymbolMap, symbolToCurrencyMap} from "../components/data/fetchData"
function PlatformOpportunities({ name, opportunities }) {
  let keys = Object.keys(opportunities);
  
  let currencySymbol = currencySymbolMap[name];
  let currencyLogo = `https://raw.githubusercontent.com/umaresso/cryptocurrency-icons/master/128/color/${currencySymbol}.png`;

  return (
    <VStack>
      <HStack>
        {" "}
        <Text>{name.toUpperCase()}</Text>
        <Img height={"30px"} src={currencyLogo} />
      </HStack>
      <TableContainer>
        <Table width={"40vw"} size={"md"} variant="striped" colorScheme="cyan">
          <TableCaption>Arbitrage Opportunities</TableCaption>
          <Thead>
            <Tr>
              <Th>Source + Sink</Th>
              <Th>Per Coin Profit</Th>
              <Th display={["none", "none", "flex", "flex"]}>Estimation</Th>
            </Tr>
          </Thead>
          <Tbody>
            {keys &&
              keys.map((theKey) => {
                return (
                  <ArbitrageInstance
                    key={theKey}
                    opportunity={opportunities[theKey]}
                  />
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
}

export default PlatformOpportunities;
