import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'

export function Header() {
  return (
    <Flex as='header' w='100%' maxW={1480} h='20' mt='4' align='center' px='6'>
      <Logo />
      <Flex align='center' ml='auto'>
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  )
}
