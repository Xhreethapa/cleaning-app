import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const data = [
    {
        id:1, 
        name: "Anand Pariyar",
        invoice:"DJ-003",
        amount:250.00,
        created:"May 20, 2022"
    }, 
    {
        id:2, 
        name: "John lenon",
        invoice:"DJ-008",
        amount:350.00,
        created:"May 2, 2022"
    },
    {
        id:3, 
        name: "Menuka Khadka",
        invoice:"DJ-001",
        amount:550.00,
        created:"April 10, 2022"
    },
    {
        id:2, 
        name: "John lenon",
        invoice:"DJ-008",
        amount:350.00,
        created:"May 2, 2022"
    },
    {
        id:3, 
        name: "Menuka Khadka",
        invoice:"DJ-001",
        amount:550.00,
        created:"April 10, 2022"
    }
]

export const InvoiceTable = () => {
  return (
    <Box >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Customer</Th>
              <Th>Invoice #</Th>
              <Th isNumeric>Amount</Th>
              <Th isNumeric>Created</Th>
            </Tr>
          </Thead>
          <Tbody fontSize="14px">
           {data.map(result => (
                <Tr key={result.id} color="gray.500" cursor="pointer" _hover={{bg:"gray.100"}} >
                <Td fontWeight="semibold">{result.name}</Td>
                <Td>{result.invoice}</Td>
                <Td isNumeric>{result.amount}</Td>
                <Td isNumeric>{result.created}</Td>
              </Tr>
           ))}
            {/* <Tr color="gray.500" cursor="pointer" _hover={{bg:"gray.100"}} >
              <Td fontWeight="semibold">John Lenon</Td>
              <Td>DJ-008</Td>
              <Td isNumeric>320.00</Td>
              <Td isNumeric>May 20, 2022</Td>
            </Tr>
            <Tr color="gray.500" cursor="pointer" _hover={{bg:"gray.100"}} >
              <Td fontWeight="semibold">Barsha Siwakoti</Td>
              <Td>DJ-009</Td>
              <Td isNumeric>550.00</Td>
              <Td isNumeric>April 6, 2022</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
