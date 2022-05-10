import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar.js'
const Main = ({children}) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>JB Homepage</title>
      </Head>
      <Container maxW="container.md" pt={4}>
        {children}
      </Container> 

      <Navbar />
    
    </Box>

  )
}

export default Main
