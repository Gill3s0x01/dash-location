import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { TitlePage } from '../../components/Title'

export default function UsersList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} ml={['6', '0']} mx='6' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <TitlePage name=' Listagem de Usuários' />

            {isWideVersion && (
              <Link href='/users/create' passHref>
                <Button
                  as='a'
                  size='sm'
                  fontSize='sm'
                  colorScheme='pink'
                  leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                  cursor='pointer'
                >
                  Criar novo
                </Button>
              </Link>
            )}
            {!isWideVersion && (
              <Link href='/users/create' passHref>
                <IconButton
                  aria-label='create new user'
                  as='a'
                  size='sm'
                  fontSize='sm'
                  colorScheme='pink'
                  icon={<Icon as={RiAddLine} fontSize='20' />}
                  cursor='pointer'
                  rounded='full'
                />
              </Link>
            )}
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'> Lorison Usuario</Text>
                    <Text fontWeight='sm' color='gray.300'>
                      lorison.usuario@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>25 de Maio 2022</Td>}
                {/* <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    bg='gray.700'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    cursor='pointer'
                    _hover={{
                      bgColor: 'gray.900',
                      color: 'gray.400',
                    }}
                  >
                    Editar
                  </Button>
                </Td> */}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
