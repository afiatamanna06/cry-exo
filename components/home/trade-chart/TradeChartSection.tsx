import { Box, Center, Flex, useDisclosure } from "@chakra-ui/react";

const TradeChartSection = () => {
  return (
    <Flex
      alignItems="center"
      justify="center"
      w={["100%"]}
      direction="column"
      fontFamily="'Catamaran', sans-serif"
      px={[4]}
      py={[8, 8, 20, 20]}
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
            Trade Chart
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};

export default TradeChartSection;
