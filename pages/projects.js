import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
    useColorModeValue,
    Spacer,
    useColorMode,
    Heading,
    Text,
    Flex,
    Link,
    Stack,
    Box,
    Divider,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Container from '../components/Container'
import styled from '@emotion/styled'

export default function BlogLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
        
    }
    const router = useRouter()
    const slug = router.asPath.replace('/projects', '')
    const Tag = styled.div`
    display: inline-block;
    .tag {
        /* Add shadows to create the "card" effect */
      max-width: auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 10px;
        background-color: ${useColorModeValue("#DBD8E3", "#2e2d30")};
        padding: 5px 10px 5px 10px;
      }
    `
    return (
        
        <Container maxW='md'>

            <Head>
                <title>Projects - Hadi Jafar</title>
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
  
            <Heading mb={{base: 4}}>My Projects</Heading>
            <Divider/>
            <Heading style={{ fontSize: 23 }} mt={{base: 4}}>Personal Website</Heading>
    

            <Tag>
            <div className="tag">tag</div>
            <div className="tag">hi</div>
            </Tag>



            </Flex>
            </Stack>
        </Container>
    )
}