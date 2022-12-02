import { Box, HStack, Stack } from '@chakra-ui/react'
import { PaginationItems } from './PaginationItems'

export function Pagination() {
  return (
    <HStack mt='8' spacing='6' justify='space-between' align='center'>
      <Box>
        <strong>0</strong> - <strong>25</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>
        <PaginationItems number={1} isCurrent />
        <PaginationItems number={2} />
        <PaginationItems number={3} />
        <PaginationItems number={4} />
      </Stack>
    </HStack>
  )
}
