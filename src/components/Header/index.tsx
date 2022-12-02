import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex as='header' w='100%' maxW={1480} h='20' mt='4' align='center' px='6'>
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
        DashLocation
        <Text as='span' color='pink.500' ml='1' fontSize='6xl'>
          .
        </Text>
      </Text>
      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxW={400}
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Buscar veiculos'
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize='20' />
      </Flex>
      <Flex align='center' ml='auto'>
        <HStack
          spacing='8'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize='20'></Icon>
          <Icon as={RiUserAddLine} fontSize='20'></Icon>
        </HStack>
        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Name user</Text>
            <Text color='gray.300' fontSize='small'>
              nameuser@outlook.com
            </Text>
          </Box>
          <Avatar
            size='md'
            name='GillesLorison'
            src='https://github.com/Gilles30.png'
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
