"use client";

import DepositSection from "@/components/home/deposit-section/DepositSection";
import TradeChartSection from "@/components/home/trade-chart/TradeChartSection";
import TransactionTableSection from "@/components/home/transaction-section/TransactionTableSection";
import NavigationBar from "@/components/navigation/NavigationBar";
import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig } from "wagmi";
import { client } from "../utils/wagmiConfig";

export default function Home() {
  return (
    <main>
      <CacheProvider>
        <ChakraProvider>
          <WagmiConfig client={client}>
            <Box bg="rgba(205, 191, 178, .1)" overflow="hidden" minH="100vh">
              <NavigationBar />
              <TransactionTableSection />
              <DepositSection />
              <TradeChartSection />
            </Box>
          </WagmiConfig>
        </ChakraProvider>
      </CacheProvider>
    </main>
  );
}
