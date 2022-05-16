import {
  Box, 
  Image, 
  Center,
  HStack,
} from '@chakra-ui/react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from '../components/loader'

const Gifty = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //fetching Gift
  useEffect(()=>{
    const fetchData = async () => {
        setIsLoading(true);
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key:process.env.GIF_API,
            limit:"10"
          }
        });

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
        <Box key={el.id}>
           <Image alt="image" src={el.images.fixed_height.url}/>
         </Box>
      )
    }) 
    )
  }
    
  return (
      <HStack whiteSpace="nowrap">
        {renderGifts()}
      </HStack>
  )
}

export default Gifty
