import { Box, Stack, Text } from '@chakra-ui/react'

interface NavSectioProps {
  title: string
  children: React.ReactNode
}

export function NavSection({ title, children }: NavSectioProps) {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>
        {title}
      </Text>
      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}
