import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xAxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-12-01T00:00:00.000Z',
      '2022-12-02T00:00:00.000Z',
      '2022-12-03T00:00:00.000Z',
      '2022-12-04T00:00:00.000Z',
      '2022-12-05T00:00:00.000Z',
      '2022-12-06T00:00:00.000Z',
      '2022-12-07T00:00:00.000Z',
      '2022-12-08T00:00:00.000Z',
      '2022-12-09T00:00:00.000Z',
      '2022-12-10T00:00:00.000Z',
      '2022-12-11T00:00:00.000Z',
      '2022-12-12T00:00:00.000Z',
      '2022-12-13T00:00:00.000Z',
      '2022-12-14T00:00:00.000Z',
      '2022-12-15T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFromL: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [
  {
    name: 'Qtd carros alugados',
    data: [31, 120, 10, 200, 51, 250, 31, 120, 10, 200, 51, 250, 10, 30, 400],
  },
]

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          alignItems='flex-start'
        >
          <Box p={['4', '8']} bg='gray.800' borderRadius={8} pb={['2', '4']}>
            <Text fontSize='lg' mb={['2', '4']}>
              Locações da semana
            </Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
          <Box p={['4', '8']} bg='gray.800' borderRadius={8} pb={['2', '4']}>
            <Text fontSize='lg' mb={['2', '4']}>
              Taxa de locação
            </Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
