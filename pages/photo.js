import {
  Container,
  Flex,
  Center,
  Image,
  Box
} from '@chakra-ui/react'

const Photo =()=> {
  return (
   <Container>
      <Flex bg="red" alignContent="center" justifyContent="center" >
        <Center bg="green"  h={"80vh"}   >
          Photo
        </Center>
      </Flex>
    </Container>
  )
}

export default Photo
