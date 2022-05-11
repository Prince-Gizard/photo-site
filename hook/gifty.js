import {Box,Image,Flex, Stack} from '@chakra-ui/react'
import {useEffect, useState} from 'react';
import axios from 'axios';

const Gifty = () => {
    
  const [data, setData] = useState([])
  //fetching Gift
    useEffect(()=>{
      const fetchData = async () => {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key:"SvtZSGg3DboeCXZ7y50Yisb11w7Dw6Og",
            limit:"3"
          }
        },);

        console.log(results);
        setData(results.data.data);
      };

      fetchData()
    }, [])
  //return Gift
  const renderGifts =()=> {
    return(
    data.map(el=>{
      return(
        <Stack display="inline-block"  w={40} key={el.id}>
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
