'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <CacheProvider>
        <ChakraProvider>
          
        </ChakraProvider>
      </CacheProvider>
    </main>
  );
}
