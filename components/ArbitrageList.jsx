import {
  Badge,
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
    <Center
      borderTopColor="grey"
      borderTop="40vw"
      width={"100vw"}
      height={"fit-content"}
      minH={"100vh"}
      bg="black"
      color={"white"}
    >
      <VStack spacing={10}>
        <VStack spacing={10}>
          <HStack  >
            <Heading fontSize={"60"} fontWeight={"900"}>
              Total Opportunities{" "}
            </Heading>
            <Heading
               color={"white"}
               fontSize={"30"}
               padding={"10px"}
               marginTop={"30px"}
               background={"red.500"}
               borderRadius={"20px"}
               
               
            >
              {opportunitiesCount}
            </Heading>
          </HStack>
          <Box width={"35vw"}>
            {" "}
            <hr bordercolor="black" borderwidth="61px" />
          </Box>
        </VStack>

        {opportunities.length > 0 && (
          <Wrap paddingTop={"5vh"} spacing={20} width={"40vw"}>
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
