'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <CacheProvider>
        <ChakraProvider>
          <Button>Meh</Button>
        </ChakraProvider>
      </CacheProvider>
    </main>
  );
}
