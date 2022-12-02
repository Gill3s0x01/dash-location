import { Heading } from '@chakra-ui/react'

interface TitlePageProps {
  name: string
}
export function TitlePage({ name }: TitlePageProps) {
  return (
    <Heading size='lg' fontWeight='normal'>
      {name}
    </Heading>
  )
}
