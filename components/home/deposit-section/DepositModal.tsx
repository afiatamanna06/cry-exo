import CommonButton from "@/components/common/CommonButton";
import {
  Box,
  Button,
  Flex,
  Modal,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
  Input,
} from "@chakra-ui/react";

interface modalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

const DepositModal = ({ isModalOpen, onModalClose }: modalProps) => {
  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="white" fontFamily="'Catamaran', sans-serif">
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" pt="9" pb={4} gap={4}>
            <Flex direction="column" gap={1}>
              <Box fontWeight="semibold" fontSize="md">
                Currency
              </Box>
              <Select placeholder="Select currency">
                {["ETH", "USDC"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex direction="column" gap={1}>
              <Box fontWeight="semibold" fontSize="md">
                Amount
              </Box>
              <Input placeholder="Amount" type="number" />
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <CommonButton name="Deposit" bg="rgba(0, 233, 223, 1)" />
          <Button
            bg="black"
            color="white"
            rounded={"3px"}
            _hover={{
              bg: "black",
              color: "white",
            }}
            _active={{
              bg: "black",
            }}
            ml={3}
            onClick={onModalClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DepositModal;
