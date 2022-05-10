import {
  Flex,
  Box,
  Spacer,
  Button,
useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => {
  return (
    <Box
      position="center"
      as="nav"
    >
      <Flex>
      <Spacer/>
        <Box p='2'>
         <NextLink href="/photo" scroll={false} passHref>
            <Button variant='ghost'  >
              Photo
            </Button>
          </NextLink>
        </Box>
        <Box p='2'>
          <NextLink href="/film" scroll={false} passHref>
            <Button variant='ghost'  >
              Film
            </Button>
          </NextLink>
        </Box>
        <Box p='2'>
          <NextLink href="/contact" scroll={false} passHref>
            <Button variant='ghost'   >
              Contact
            </Button>
          </NextLink>
        </Box>
        <Spacer /> 
      </Flex>
      </Box>
  )
}

export default Navbar
