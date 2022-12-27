import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PlatformOpportunities from "./PlatformOpportunities";

function PlatformModal({ data, selector }) {
  const [isOpen, setIsOpen] = useState(true);
  let name = data?.name;


  return (
    <>
      <Modal
        size={"6xl"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={()=>{
          selector(null);
        }}
        bg={"black"}
        color={"white"}
      >
        <ModalOverlay />
        <ModalContent  >
          <ModalHeader>Arbitrage Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PlatformOpportunities
              name={name}
              opportunities={data.opportunities}
              key={name + "opportunities"}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blackAlpha"
              mr={3}
              onClick={() => {
                setIsOpen(false);
                selector(null);
                
              }}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PlatformModal;
