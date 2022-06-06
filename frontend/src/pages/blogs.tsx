import React, { ReactNode, useEffect, useState } from "react"
import Helmet from "react-helmet";
import Navbar from "../components/nav"
import { ChakraProvider, Text, SimpleGrid } from "@chakra-ui/react"
import theme from "../theme"

const BlogsPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet title="foo bar blogs" defer={false} />
      <Navbar />
      <main>
        <SimpleGrid pt={{ base: '75', md: '75' }} p={{ base: '10' }}>
          <Text fontSize='2xl'>Blogs List</Text>
        </SimpleGrid>
      </main>
    </ChakraProvider>
  )
}

export default BlogsPage