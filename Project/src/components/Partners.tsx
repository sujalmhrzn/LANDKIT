import React from 'react'
import Airbnb from '../logos/Airbnb'
import Coinbase from '../logos/Coinbase'
import Instagram from '../logos/Instagram'
import Dribble from '../logos/Dribble'
import Netflix from '../logos/Netflix'
import Pinterest from '../logos/Pinterest'
import { Box, HStack } from '@chakra-ui/react'

const Partners = () => {
  return (
    <Box>
        <HStack alignContent='center' height={5} justifyContent='center' my={100}>
            <Box width='150px' height='50px' mx='20px'><Airbnb /></Box>
            <Box width='150px' height='50px' mx='20px'><Coinbase /></Box>
            <Box width='150px' height='50px' mx='20px'><Dribble /></Box>
            <Box width='150px' height='50px' mx='20px'><Instagram /></Box>
            <Box width='150px' height='50px' mx='20px'><Netflix /></Box>
            <Box width='150px' height='50px' mx='20px'><Pinterest /></Box>
        </HStack>
    </Box>
    )
}

export default Partners