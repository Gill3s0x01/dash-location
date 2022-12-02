import { Text } from '@chakra-ui/react'
export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
      w='64'
    >
      DashLocation
      <Text as='span' color='pink.500' ml='1' fontSize='6xl'>
        .
      </Text>
    </Text>
  )
}
