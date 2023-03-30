import {
  Box,
  Center,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import TradeAreaChart from "./TradeAreaChart";
import TradeBarChart from "./TradeBarChart";

const TradeChartSection = () => {
  return (
    <Flex
      alignItems="center"
      justify="center"
      w={["100%"]}
      direction="column"
      fontFamily="'Catamaran', sans-serif"
      px={[4]}
      pb={[8, 8, 20, 20]}
      pt={[4, 4, 12, 12]}
    >
      <Center>
        <Box w="100%">
          <Box
            fontSize={["2xl"]}
            fontWeight="semibold"
            w="full"
            mb="-8"
            fontFamily="'Catamaran', sans-serif"
          >
            Trade Chart
          </Box>
          <Tabs align="end" variant="enclosed">
            <TabList borderBottom="1px" borderColor="rgba(168, 162, 158, 1)">
              <Tab
                color="rgba(33, 68, 84, 1)"
                border="1px"
                borderColor="rgba(168, 162, 158, 1)"
                _selected={{
                  border: "1px",
                  borderColor: "rgba(33, 68, 84, 1)",
                  bg: "rgba(33, 68, 84, 1)",
                  color: "white",
                }}
              >
                Area
              </Tab>
              <Tab
                color="rgba(33, 68, 84, 1)"
                border="1px"
                borderColor="rgba(168, 162, 158, 1)"
                _selected={{
                  border: "1px",
                  borderColor: "rgba(33, 68, 84, 1)",
                  bg: "rgba(33, 68, 84, 1)",
                  color: "white",
                }}
              >
                Bar
              </Tab>
            </TabList>
            <TabPanels border="1px" borderColor="rgba(168, 162, 158, 1)">
              <TabPanel padding="3">
                <TradeAreaChart />
              </TabPanel>
              <TabPanel padding="3">
                <TradeBarChart />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </Flex>
  );
};

export default TradeChartSection;
