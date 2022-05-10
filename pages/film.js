import {
  Container,
  Center,
  Flex
} from '@chakra-ui/react'

const Film =()=> {
  return (
    <Container>
      <Flex alignContent="center" justifyContent="center" >
        <Center  height={"80vh"}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
        </Center>
      </Flex>
    </Container>
  )
}

export default Film
