import {
  Container,
  Flex,
  Center,
  Box
} from '@chakra-ui/react'
import Gifty from '../hook/gifty.js'

const Photo =()=> {
  return (
    <Container>
      <Center bg="red" h={"80vh"}>
       <Gifty  /> 
      </Center>
    </Container>
  )
}

export default Photo
