import CommonButton from "@/components/common/CommonButton";
import {
  Box,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { transactionTableDummyData } from "./TransactionTableData";

function TransactionTable() {
  return (
    <TableContainer w={["21rem", "21rem", "45rem", "60rem", "70rem"]} overflowX="auto">
      <Table
        variant="unstyled"
        size={["sm", "sm", "sm", "md"]}
        border="1px"
        borderColor="rgba(168, 162, 158, 1)"
      >
        <Thead
          bg="rgba(30, 30, 30, 1)"
          fontSize="sm"
          fontWeight="medium"
          color="white"
        >
          <Tr>
            <Td>Currency</Td>
            <Td>Price</Td>
            <Td>24h Change</Td>
            <Td></Td>
          </Tr>
        </Thead>
        <Tbody>
          {transactionTableDummyData.map(({ name, description, price, change }) => (
              <Tr key={name} cursor="pointer" fontSize="sm" fontWeight="medium" _hover={{ bg: "white" }}>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">
                  <Flex gap={1}>
                    <Box fontWeight={"semibold"}>{name}</Box>
                    <Box color="gray.400">{description}</Box>
                  </Flex>
                </Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">
                  <Box
                    color="rgba(0, 233, 223, 1)"
                    py="1"
                    px="2"
                    borderRadius="md"
                    w="min-content"
                    fontWeight={"semibold"}
                    bg="rgba(0, 233, 223, .05)"
                  >
                    {price}
                  </Box>
                </Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">
                  <Box
                    color="rgba(33, 68, 84, 1)"
                    py="1"
                    px="2"
                    borderRadius="md"
                    w="min-content"
                    bg="rgba(33, 68, 84, .075)"
                  >
                    {change}
                  </Box>
                </Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">
                  <CommonButton name="Trade" width={["100%"]} bg="rgba(33, 68, 84, 1)" />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
