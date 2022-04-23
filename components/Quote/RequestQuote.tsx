import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MultiForm from "./Multiform/MultiForm";

interface Props { 
  quote:boolean
  setQuote: any
}

const RequestQuote = ({ quote, setQuote }: Props) => {
  return (
    <Modal size="sm" isOpen={quote} onClose={() => setQuote(!quote)}>
      <ModalOverlay />
      <ModalContent color="gray.600" py={5}>
        <ModalHeader>Request a Quote</ModalHeader>
        <ModalCloseButton mt={6} color="blue.700" />
        <ModalBody mt={-5} color="gray.500">
          <Flex fontSize="12" gap={1}>
            <Text>Fill out the form or call</Text> <Text color="red">0434343434</Text>
          </Flex>
          <Text fontSize="12">to get your quote today!</Text>
          <MultiForm/>
        </ModalBody>

        <ModalFooter>
          <Button
            w="100%"
            fontSize="15"
            backgroundColor="blue.700"
            color="gray.200"
            
            onClick={() => setQuote(!quote)}
          >
            NEXT
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RequestQuote;
