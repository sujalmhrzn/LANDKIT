import React from 'react'
import Airbnb from '../logos/Airbnb'
import Coinbase from '../logos/Coinbase'
import Instagram from '../logos/Instagram'
import Dribble from '../logos/Dribble'
import Netflix from '../logos/Netflix'
import Pinterest from '../logos/Pinterest'
import { Box, Divider, HStack } from '@chakra-ui/react'

type LogoProps = {
    color: string
}

const Partners = () => {
  return (
    <>
        <Divider orientation='horizontal' />
        <Box>
            <HStack alignContent='center' height={5} justifyContent='center' my={50}>
                <Box width='150px' height='50px' mx='20px'><Airbnb color='#8699B7' /></Box>
                <Box width='150px' height='50px' mx='20px'><Coinbase color='#8699B7' /></Box>
                <Box width='150px' height='50px' mx='20px'><Dribble color='#8699B7' /></Box>
                <Box width='150px' height='50px' mx='20px'><Instagram color='#8699B7' /></Box>
                <Box width='150px' height='50px' mx='20px'><Netflix color='#8699B7' /></Box>
                <Box width='150px' height='50px' mx='20px'><Pinterest color='#8699B7' /></Box>
            </HStack>
        </Box>
        <Divider orientation='horizontal' />
    </>
    )
}

export default Partners