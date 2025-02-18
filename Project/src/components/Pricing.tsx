import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Heading, HStack, Icon, Stack, StackProps, Text, VStack } from '@chakra-ui/react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Children } from 'react'

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='20px' {...rest}>
      <FontAwesomeIcon icon={faCircleCheck} width='22px' height='22px' />
      <Text>{children}</Text>
    </HStack>
  )
}

const Pricing = () => {
  return (
    <>
      <Box as='section' pb='112px' bg='#F7FAFC'>
        <Box color='black' pt='90px' pb='198px' px='32px' bg='#F7FAFC'>
          <Center alignItems='flex-center'>
            <VStack w='40%'>
              <Heading fontWeight='200' fontSize='36px'>Fair, simple pricing for all.</Heading>
              <Text textAlign='center' fontSize='20px' pt='16px'>All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</Text>
            </VStack>
          </Center>
        </Box>
      </Box>
      
        <Box maxW='994px' m='auto' mt='-200px' borderRadius='12px' overflow='hidden' boxShadow='md' bg='#1B2A4D'>
          <Flex position="relative" zIndex="2">
            <Box bg='#F0EAFB' p='60px'>
              <Text textAlign='center' fontSize="24px" fontWeight="800">Premium PRO</Text>
              <Heading as="h3" textAlign='center' fontSize='60px' mt='16px'>$329</Heading>
              <Text color='#171923' textAlign='center' fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
              <Button colorScheme='purple' textAlign='center' size='lg' w='282px' mt='24px'>Get Started</Button>
            </Box>
            <Box p='60px' fontSize='18px' bg='white'>
              <Text textAlign='left'>
                Access these features when you get this pricing package business.
              </Text>
              <Stack as='ul' spacing='20px' pt='24px'>
                <ListItem>International calling and meassaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated phone numbers</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
              </Stack>
            </Box>
          </Flex>
        </Box>
      
    </>
    
  )
}

export default Pricing