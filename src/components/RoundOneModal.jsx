import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const RoundOneModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Button onClick={onOpen}>Instructions</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Here's how to play!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Click or tap to reveal the card. Use your super memory to remember
            where the cards are! Match two cards to reveal the facial
            expressions. You've won when you've matched all of the cards.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">I know how to play!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RoundOneModal;
