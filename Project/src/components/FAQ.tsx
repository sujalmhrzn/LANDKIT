import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const FAQ = () => {
  return (
    <Box bg='#1B2A4D' pt='300px' pb='50px' mt='-200px' color='white'>
      <Box maxW='960px' m='auto' my='20px' p={4}>
        <SimpleGrid columns={2} spacing={4}>
          <GridItem>
            <Text fontWeight='semibold' fontSize='18px'>Can I use Landkit for my clients?</Text>
            <Text>Absolutely. The Bootstrap Themes license allows you to build a website for personal use or for a client.</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight='semibold' fontSize='18px'>Is there a money back guarantee?</Text>
            <Text>Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a return and get your money back.</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight='semibold' fontSize='18px'>Do I get free updates?</Text>
            <Text>Yes. We update all of our themes with each Bootstrap update, plus are constantly adding new components, pages, and features to our themes.</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight='semibold' fontSize='18px'>Does it work with Rails? React? Laravel?</Text>
            <Text>Yes. Landkit has basic CSS/JS files you can include. If you want to enable deeper customization, you can integrate it into your assets pipeline or build processes.</Text>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
    
  )
}

export default FAQ