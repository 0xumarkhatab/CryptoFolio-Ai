import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import {
  currencies,
  currenciesList,
  currencySymbolMap,
  exchanges,
  exchangesList,
} from "./data/fetchData";

const CryptoItem = ({ name, count }) => {
  let name_ = name;
  console.log("name is ", name_);

  if (currenciesList.includes(name_)) {
    name_ = currencySymbolMap[name_];
    console.log("coin is ", name_);
  } else {
    console.log(name, "is not crypto in ", currenciesList);
  }
  let iconUrl = `https://raw.githubusercontent.com/umaresso/cryptocurrency-icons/master/128/color/${name_}.png`;

  return (
    <Box cursor="pointer" position="relative">
      <Image width={20} src={iconUrl} alt={name_} />
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
