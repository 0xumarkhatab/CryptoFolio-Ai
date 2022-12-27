import React from "react";
import { Box, Image, Badge, HStack, Heading, VStack } from "@chakra-ui/react";
import {
  currencies,
  currenciesList,
  currencySymbolMap,
  exchanges,
  exchangesList,
} from "./data/fetchData";

const CryptoItem = ({ name, count, onClick }) => {
  let name_ = name;

  if (currenciesList.includes(name_)) {
    name_ = currencySymbolMap[name_];
  } else {
    return <></>;
  }
  let iconUrl = `https://raw.githubusercontent.com/umaresso/cryptocurrency-icons/master/128/color/${name_}.png`;

  return (
    <Box  onClick={onClick} cursor="pointer" position="relative">
      <VStack>
      <Image width={20} src={iconUrl} alt={name_} />
      <Heading fontSize={"1.5em"} >{name_.toUpperCase()}</Heading>

      </VStack>

      {count > 0 && (
        <Badge
          colorScheme={"red"}
          variant="solid"
          fontSize="1em"
          position="absolute"
          top="-0.6em"
          right="-0.6em"
        >
          {count}
        </Badge>
      )}
    </Box>
  );
};

export default CryptoItem;
