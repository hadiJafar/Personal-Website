import Head from 'next/head'
import { 
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'
import Container from '../components/Container'

export default function Home() {
  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Hadi Jafar</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={2}>Hi, I'm Hadi Jafar</Heading>
          <Text color={colorSecondary[colorMode]}>D E S C R I P T I O N</Text>
        </Flex>
      </Stack>
    </Container>
  )
}