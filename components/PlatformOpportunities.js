import {
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ArbitrageInstance from "./ArbitrageInstance";

function PlatformOpportunities({ name, opportunities }) {
  let keys = Object.keys(opportunities);

  return (
    <VStack>
      <Heading>{name.toUpperCase()}</Heading>
      <TableContainer>
        <Table width={"40vw"} size={"md"} variant="striped" colorScheme="teal">
          <TableCaption>Arbitrage Opportunities</TableCaption>
          <Thead>
            <Tr>
              <Th>Source + Sink</Th>
              <Th>Per Unit Profit</Th>
              <Th>Estimation</Th>
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
          <Tfoot>
            <Tr>
              <Th>Source + Sink</Th>
              <Th>Per Unit Profit</Th>
              <Th>Estimation</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  );
}

export default PlatformOpportunities;
