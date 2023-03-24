import amountAtom, { AmountAtom } from "@/atoms/amountAtom";
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
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useState } from "react";

interface modalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

const DepositModal = ({ isModalOpen, onModalClose }: modalProps) => {
  const [amount, setAmount] = useAtom(amountAtom);
  const [value, setValue] = useState(0);

  const deposit = () => {
    let numberValue: AmountAtom = {
      selectAmount: value,
    };
    setAmount(numberValue);
  };

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
                {["ETH"].map((item) => (
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
              <NumberInput
                placeholder="Amount"
                value={value}
                onChange={(e) => {
                  setValue(Number(e));
                }}
                precision={2}
                step={0.1}
                min={0}
                max={30}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <CommonButton
            name="Deposit"
            onClick={deposit}
            bg="rgba(0, 233, 223, 1)"
          />
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
