import CommonButton from "@/components/common/CommonButton";
import { Box, Center, Flex, useDisclosure } from "@chakra-ui/react";
import DepositModal from "./DepositModal";

function DepositSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      alignItems="center"
      justify="center"
      w={["full"]}
      direction="column"
      fontFamily="'Catamaran', sans-serif"
      mb="8"
      mt={[4, 4, 0, 0]}
    >
      <Center>
        <Flex
          direction={["column", "column", "row", "row", "row"]}
          border="1px"
          borderColor="rgba(168, 162, 158, 1)"
          minW={["21rem", "21rem", "45rem", "60rem", "80rem"]}
          gap={[8]}
          p="10"
          alignItems="center"
          fontFamily="'Catamaran', sans-serif"
          justify="space-between"
        >
          <Box
            fontSize={["3xl"]}
            fontWeight="semibold"
            w="full"
            textAlign={["center", "center", "start", "start"]}
            fontFamily="'Catamaran', sans-serif"
          >
            Deposit Money
          </Box>
          <CommonButton
            name="Deposit"
            onClick={onOpen}
            bg="rgba(0, 233, 223, 1)"
          />
          <DepositModal isModalOpen={isOpen} onModalClose={onClose} />
        </Flex>
      </Center>
    </Flex>
  );
}

export default DepositSection;
