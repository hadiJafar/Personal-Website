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
    const slug = router.asPath.replace('/blog', '')
    const CardStyle = styled.div`
.card {
	/* Add shadows to create the "card" effect */
  margin-right: 25px;
  margin-bottom: 25px;
  max-width: auto;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	border-radius: 10px;
	background-color: ${useColorModeValue("#DBD8E3", "#2e2d30")};
  padding: 20px;
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
	box-shadow: 0 8px 16px 0 ${useColorModeValue("#a989fd", "#9973ff")};
	border-radius: 10px;
  }
  
  /* Add some padding inside the card container */
  .container {
	padding: 2px 16px;
  }
  .grid-container{
    display: grid;
    grid-template-columns: auto auto auto;
  }
  `
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
            <Heading mb={{base: 4}}>Reach Me Here!!</Heading>

            <Text style={{ fontSize: 23 }} mt={{base: 2}}>You can find me at:</Text>

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
                  <Text color={useColorModeValue("#6e37ff", "#9973ff")}>@hadiJafar
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

            <Spacer mt={{ base: 3 }} />

            <CardStyle>
            <div class="grid-container">
            <a href="https://www.linkedin.com/in/hadi-jafar-950916205/">
              <div class="card">
                <div class="container" align="center">
                <FontAwesomeIcon icon={faLinkedin} fontSize="120" fixedWidth="true"/>
                <Heading>LinkedIn</Heading>
                </div>
              </div>
              </a>

              <a href="https://twitter.com/Hadi_Jafar10">
              <div class="card">
                <div class="container" align="center">
                <FontAwesomeIcon icon={faTwitter} fontSize="120" fixedWidth="true"/>
                <Heading>Twitter</Heading>
                </div>
              </div>
              </a>

              <a href="https://github.com/hadiJafar">
              <div class="card">
                <div class="container" align="center">
                <FontAwesomeIcon icon={faGithub} fontSize="120" fixedWidth="true"/>
                <Heading>GitHub</Heading>
                </div>
              </div>
              </a>

            </div>
            </CardStyle>
            </Flex>
            </Stack>
        </Container>
    )
}