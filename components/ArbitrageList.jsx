import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { useState } from "react";
import CryptoItem from "./CryptoItem";
import PlatformModal from "./PlatformModal";
const ArbitrageList = ({ data, opportunitiesCount }) => {
  const [selectedAsset, setSelectedAsset] = useState(null);

  
  let opportunities = Object.keys(data);
  return (
    <Center>
      <VStack spacing={10}>
        <VStack spacing={10}>
          <HStack alignItems={"center"}>
            <Heading fontSize={"60"} fontWeight={"900"}>
              Total Opportunities{" "}
            </Heading>
            <Text fontSize={"3em"} color={"green"}>
              {opportunitiesCount}
            </Text>
          </HStack>
          <Box width={"30vw"}>
            {" "}
            <hr bordercolor="black" borderwidth="61px" />
          </Box>
        </VStack>

        {opportunities.length > 0 && (
          <Wrap paddingTop={"5vh"} spacing={40} width={"50vw"}>
            {opportunities.map((key) => (
              <WrapItem key={"wrap " + key}>
                <CryptoItem
                  key={key + "item"}
                  name={key}
                  count={data[key].length}
                  onClick={() => {
                    setSelectedAsset({
                      name: key,
                      opportunities: data[key],
                    });
                  }}
                />
              </WrapItem>
            ))}
          </Wrap>
        )}
      </VStack>
      {selectedAsset && (
        <PlatformModal selector={setSelectedAsset} data={selectedAsset} />
      )}
    </Center>
  );
};

export default ArbitrageList;
