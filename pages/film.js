import {
  Container,
  AspectRatio,
  Center
} from '@chakra-ui/react'

const Film =()=> {
  return (
<Container  overflowY="hidden" overflowX='scroll' h={"80vh"} flexDirection='column' display='flex'>
 <AspectRatio mt={10} h={"60vh"} ratio={1}>
  <Center mt={5} >
    <iframe width="560" height="300" src="https://www.youtube.com/embed/NUC2EQvdzmY"
    title="DJ Shadow" >
    </iframe> 
</Center>
 </AspectRatio >
</Container>
  )
}

export default Film
