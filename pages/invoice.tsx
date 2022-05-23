import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { InvoiceTable } from "../components/Invoice/InvoiceTable";

const Invoice = () => {
  return (
    <Box my={5}>
      <Flex justify="space-between" px={5}>
        <Heading fontSize="24">Invoices</Heading>
        <Flex
          fontWeight="semibold"
          gap={2}
          bg="blue.50"
          color="blue.400"
          cursor="pointer"
          px={3}
          _hover={{ bg: "blue.100", color: "blue.500" }}
          fontSize="14px"
          rounded="full"
          alignItems="center"
        >
          +<Text>New invoice</Text>
        </Flex>
      </Flex>
      <Box my={4} px={1}>
        <Tabs>
          <TabList color="gray.400">
            <Tab
              _selected={{
                color: "gray.700",
                fontWeight: "semibold",
                borderColor: "gray.600",
              }}
              _focus={{ outline: "none" }}
            >
              All Invoices
            </Tab>
            <Tab
              _selected={{
                color: "gray.700",
                fontWeight: "semibold",
                borderColor: "gray.600",
              }}
              _focus={{ outline: "none" }}
            >
              Drafts
            </Tab>
            <Tab
              _selected={{
                color: "gray.700",
                fontWeight: "semibold",
                borderColor: "gray.600",
              }}
              _focus={{ outline: "none" }}
            >
              Outstanding
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel mx={"-6"}>
              <InvoiceTable />
            </TabPanel>
            <TabPanel mx={"-6"}>
              <InvoiceTable />
            </TabPanel>
            <TabPanel mx={"-6"}>
              <InvoiceTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Invoice;
