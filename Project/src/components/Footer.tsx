import { Box, GridItem, HStack, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { faInstagram, faPinterest, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Brand from '../assets/brand.svg'

const Footer = () => {
  return (
    <Box>
      <Box m='auto' maxW='720px' my='120px'>
        <SimpleGrid columns={5} spacing={4}>
          <GridItem colSpan={1}>
            {/* <Brand /> */}
            <Image src={Brand} />
            <Text>A better way to build.</Text>
            <HStack>
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faSquareFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faPinterest} />
            </HStack>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack>
            <Text>PRODUCTS</Text>
            <Link>Page Builder</Link>
            <Link>UI Kit</Link>
            <Link>Styleguide</Link>
            <Link>Documentation</Link>
            <Link>Changelog</Link>
            </VStack>
          </GridItem>
          
          <GridItem colSpan={1}>
          <VStack>
            <Text>SERVICES</Text>
            <Link>Documentation</Link>
            <Link>Changelog</Link>
            <Link>Pagebuilder</Link>
            <Link>UI Kit</Link>
          </VStack>
            
          </GridItem>

          <GridItem colSpan={1}>
          <VStack justify='left'>
            <Text>CONNECT</Text>
            <Link>Page Builder</Link>
            <Link>UI Kit</Link>
            <Link>Styleguide</Link>
            <Link>Documentation</Link>
            <Link>Changelog</Link>
            <Link>Documentation</Link>
            <Link>Changelog</Link>
          </VStack>
            
          </GridItem>
          <GridItem colSpan={1}>
            <VStack>
              <Text>LEGAL</Text>
              <Link>Documentation</Link>
              <Link>Changelog</Link>
              <Link>Pagebuilder</Link>
            </VStack>
            
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Footer
