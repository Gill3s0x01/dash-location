import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
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
  )
}
