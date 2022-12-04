import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Name user</Text>
          <Text color='gray.300' fontSize='small'>
            nameuser@outlook.com
          </Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='GillesLorison'
        src='https://github.com/Gilles30.png'
      />
    </Flex>
  )
}
