import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Products from '../src/components/Products'

const App = () => {
  return <div>
    {/* TODO: Code here */}
    <ChakraProvider>
    <Products />
    </ChakraProvider>
  </div>;
};

export default App;
