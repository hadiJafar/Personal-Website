import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Container from '../components/Container'

export default function BlogLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const router = useRouter()
    const slug = router.asPath.replace('/blog', '')
    return (
        <Container>
            <Head>
                <title>Contact - Hadi Jafar</title>
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
            <Heading mb={{base: 0}}>Contact Info</Heading>
            </Flex>
            </Stack>
        </Container>
    )
}