import { Badge, Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CTA = () => {
  return (
    <Box bg='#1B2A4D'>
      <Box maxW='720px' m='auto' py='50px' color='white'>
        <Flex>
          <VStack>
            <Badge>Get Started</Badge>
            <Heading textAlign='center'>Get Landkit and save your time.</Heading>
            <Text mt='20px' textAlign='center'>Stop wasting time trying to do it the "right way" and build a site from scratch. Landkit is faster, easier, and you still have complete control.</Text>
            <Button mt='30px'>Buy it now</Button>
          </VStack>
        </Flex>
      </Box>
    </Box>
    
  )
}

export default CTA