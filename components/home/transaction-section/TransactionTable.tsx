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
//import { dealsTableData } from "./DealsTableData";

function TransactionTable() {
  return (
    <TableContainer overflowX="auto">
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
          {/*{dealsTableData.map(({ name, principal, fee, region, assets }) => (
              <Tr key={name} cursor="pointer" fontSize="sm" fontWeight="medium" _hover={{ bg: "white" }}>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">{name}</Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">{principal}</Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">{fee}</Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">
                  <Box
                    color="rgba(234, 88, 12, 1)"
                    py="1"
                    px="2"
                    borderRadius="lg"
                    w="min-content"
                    bg="rgba(255, 247, 237, 1)"
                  >
                    {region}
                  </Box>
                </Td>
                <Td borderTop="1px" borderColor="rgba(168, 162, 158, 1)">
                  <Box
                    color="rgba(127, 29, 29, 1)"
                    py="1"
                    px="2"
                    borderRadius="lg"
                    w="min-content"
                    bg="rgba(222, 212, 212, 1)"
                  >
                    {assets}
                  </Box>
                </Td>
              </Tr>
            ))}*/}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
