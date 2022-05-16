import {
  Container,
  Center,
} from '@chakra-ui/react'
import Gifty from '../hook/gifty.js'
import HorizontalScroll from 'react-scroll-horizontal'

const Photo =()=> {
  const child = {width: '100em', height:'100%'}
  return (
    <Container h={"80vh"} flexDirection='column' display='flex'>
      <HorizontalScroll>
        <Center style={child}>
          <Gifty/>
      </Center>
    </HorizontalScroll>
    </Container>
  )
}

export default Photo
