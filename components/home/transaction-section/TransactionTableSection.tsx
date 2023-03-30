import {
  Box,
  Center,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";

function TransactionTableSection() {
  //const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      alignItems="center"
      justify="center"
      w={["100%"]}
      direction="column"
      fontFamily="'Catamaran', sans-serif"
      px={[4]}
      pb={[8, 8, 12, 12]}
    >
      <Center>
        <Box w="100%">
          <Box
            fontSize={["3xl"]}
            fontWeight="semibold"
            w="full"
            mb="2"
            fontFamily="'Catamaran', sans-serif"
          >
            Transaction Table
          </Box>
          <TransactionTable />
        </Box>
      </Center>
    </Flex>
  );
}

export default TransactionTableSection;
