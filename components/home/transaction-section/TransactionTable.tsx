import {
  Box,
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
    <TableContainer w={["21rem", "21rem", "45rem", "60rem", "80rem"]} overflowX="scroll">
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
            <Td>Date</Td>
            <Td>Description</Td>
            <Td>Amount</Td>
            <Td>Currency Type</Td>
            <Td>Transaction type</Td>
          </Tr>
        </Thead>
        <Tbody>
          {transactionTableDummyData.map(({ date, description, amount, currencyType, transactionType }) => (
              <Tr key={date} cursor="pointer" fontSize="sm" fontWeight="medium" _hover={{ bg: "white" }}>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">{date}</Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">{description}</Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">{amount}</Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">
                  <Box
                    color="rgba(0, 233, 223, 1)"
                    py="1"
                    px="2"
                    borderRadius="md"
                    w="min-content"
                    bg="rgba(0, 233, 223, .075)"
                  >
                    {currencyType}
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
                    {transactionType}
                  </Box>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
