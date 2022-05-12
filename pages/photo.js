import {
  Container,
  Flex,
  Center,
  Box
} from '@chakra-ui/react'
import Gifty from '../hook/gifty.js'

const Photo =()=> {
  return (
    <Container h={"80vh"} flexDirection='column' display='flex'>
      <Center overflowY="hidden" overflowX='scroll' >
        <Gifty  />
      </Center>
    </Container>
  )
}

export default Photo
