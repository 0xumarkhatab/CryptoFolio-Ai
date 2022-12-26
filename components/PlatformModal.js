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
  const { isOpen,onOpen, onClose } = useDisclosure();

  let name = data.name;
  console.log("inside modal ", { data, selector });
  useEffect(() => {
    onOpen()
  }, []);
  return (
    <>
      <Modal
        size={"6xl"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
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
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                
                isOpen(false);
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
