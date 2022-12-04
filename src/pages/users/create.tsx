import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { TitlePage } from '../../components/Title'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateUserFormData = {
  name?: string
  email?: string
  password?: string
  password_confirmation?: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Sua senha deve conter 6 ou mais caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log(values)
  }

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} ml={['6', '0']} mx='6' px='6'>
        <Sidebar />
        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <TitlePage name='Criar Usuário' />

          <Divider my='6' borderColor='gray.700' />
          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input
                label='Nome completo'
                {...register('name')}
                error={errors.name}
              />
              <Input
                // name='email'
                type='email'
                label='E-mail'
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                type='password'
                label='Senha'
                {...register('password')}
                error={errors.password}
              />
              <Input
                // name='password_confirmation'
                type='password'
                label='Confirme sua senha'
                {...register('password_confirmation')}
                error={errors.password_confirmation}
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
              <Button
                type='submit'
                colorScheme='pink'
                ml={['8', '0']}
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
