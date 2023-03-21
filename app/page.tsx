"use client";

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
            <Box bg="white" minH="100vh">
              <NavigationBar />
            </Box>
          </WagmiConfig>
        </ChakraProvider>
      </CacheProvider>
    </main>
  );
}
