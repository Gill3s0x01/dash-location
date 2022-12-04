import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { TitlePage } from '../../components/Title'

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} ml={['6', '0']} mx='6' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <TitlePage name='Criar Usuário' />

          <Divider my='6' borderColor='gray.700' />
          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='name' label='Nome Completo' />
              <Input name='email' type='email' label='E-mail' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='password' type='password' label='Senha' />
              <Input
                name='password_confirmation'
                type='password'
                label='Confirme sua senha'
              />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify={['space-around', 'flex-end']}>
            <HStack spacing={['2', '4']}>
              <Link href='/users' passHref>
                <Button colorScheme='whiteAlpha' mr={['8', '0']}>
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme='pink' ml={['8', '0']}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
