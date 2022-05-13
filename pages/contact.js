import {
  Container,
  Center,
  Flex,
  Link
} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

const Contact  =()=> {
  return (
    <Container>
      <Flex alignContent="center" justifyContent="center" >
        <Center  height={"80vh"}>
          <Link as='samp' href='https://github.com/Prince-Gizard' isExternal>
            @family_council <ViewIcon mx='1px' />
          </Link>
        </Center>
      </Flex>
    </Container>
  )
}

export default Contact 
