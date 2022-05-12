import {
  Box, 
  Image, 
  Center,
  Stack,
} from '@chakra-ui/react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from '../components/loader'
//import GIF_API from '../.env' 

const Gifty = () => {
    
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //fetching Gift
  useEffect(()=>{
    const fetchData = async () => {
        setIsLoading(true);
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key:"SvtZSGg3DboeCXZ7y50Yisb11w7Dw6Og",
            limit:"10"
          }
        },);

        console.log(results);
        setData(results.data.data);
        setIsLoading(false)
      };
         
      fetchData()
    }, [])
  //return Gift
  const renderGifts =()=> {
    if (isLoading) {
      return (
        <Center h={"80vh"}>
          <Loader/>
        </Center>
      )
    }
    return(
    data.map(el=>{
      return(
        <Stack m={3} w={40} key={el.id}>
           <Image alt="image" src={el.images.fixed_height.url}/>
         </Stack>
      )
    }) 
    )
  }
    
  return (
      <Box>
        {renderGifts()}
      </Box>
  )
}

export default Gifty
