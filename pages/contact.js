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
    SimpleGrid,
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
    const slug = router.asPath.replace('/contact', '')
    const CardStyle = styled.div`
    text-align: center;
    justify-content: center;
    width: 100%;
  .card {
    /* Add shadows to create the "card" effect */
  
    margin-right: 1.5em;
    margin-bottom: 1.5em;
    height: auto;
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    background-color: ${useColorModeValue("#DBD8E3", "#2e2d30")};
    padding: 1.25em;
    }
    
    /* On mouse-over, add a deeper shadow */
    .card:hover {
    box-shadow: 0 8px 16px 0 ${useColorModeValue("#a989fd", "#9973ff")};
    border-radius: 10px;
    }
    
  
    `
    return (
        <Container width='100%'>
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
            width='100%'
            px={2}
        >
            <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
            width='100%'
            >
            <Heading mb={{base: 4}}>Reach Me Here!!</Heading>

            <Text style={{ fontSize: 23 }} mt={{base: 2}}>You can find me at: </Text>

            <Spacer mt={{ base: 1 }} />

            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                &ensp;{" "}
              </p>{" "}
              <Link href="https://www.linkedin.com/in/hadi-jafar-950916205/">
                  <Text color={useColorModeValue("#6e37ff", "#9973ff")}>@hadi-jafar
                  </Text>
              </Link>
            </Box>

            <Spacer mt={{ base: 1 }} />

            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faTwitter} fixedWidth />
                &ensp;{" "}
              </p>{" "}
              <Link href="https://twitter.com/Hadi_Jafar10">
                  <Text color={useColorModeValue("#6e37ff", "#9973ff")}>@hadi_jafar10
                  </Text>
                  </Link>
            </Box>

            <Spacer mt={{ base: 1 }} />

            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faGithub} fixedWidth />
                &ensp;{" "}
              </p>{" "}
              <Link href="https://github.com/hadiJafar">
                  <Text color={useColorModeValue("#6e37ff", "#9973ff")}>@hadijafar
                  </Text>
              </Link>
            </Box>

            <Spacer mt={{ base: 1 }} />

            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                &ensp; {" "}
              </p> {" "}
              <Text>hadi.jafar23@gmail.com
                </Text>
            </Box>

            <Spacer mt={{ base: 4 }}/>
            <CardStyle align="center">
            <SimpleGrid columns={[1, 1, 3]} gap={1}>
            
            
            <a href="https://www.linkedin.com/in/hadi-jafar-950916205/">
              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faLinkedin} fontSize="6em" fixedWidth="true"/>
                <br/>
                <strong style={{ fontSize: 25 }}>LinkedIn</strong>
                </div>
              </div>
              </a>

              <a href="https://twitter.com/Hadi_Jafar10">
              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faTwitter} fontSize="6em" fixedWidth="true"/>
                <br/>
                <strong style={{ fontSize: 25 }}>Twitter</strong>
                </div>
              </div>
              </a>

              <a href="https://github.com/hadijafar">
              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faGithub} fontSize="6em" fixedWidth="true"/>
                <br/>
                <strong style={{ fontSize: 25 }}>Github</strong>
                </div>
              </div>
              </a>
              
              </SimpleGrid>
              </CardStyle>
            </Flex>
            </Stack>
        </Container>
    )
}