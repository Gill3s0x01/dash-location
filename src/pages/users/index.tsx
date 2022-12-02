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
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { TitlePage } from '../../components/Title'

export default function UsersList() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <TitlePage name=' Listagem de Usuários' />

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
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr px='6'>
                <Td>
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
                <Td>25 de Maio de 2022</Td>
                <Td>
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
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
