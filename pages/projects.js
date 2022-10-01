import React from 'react'
import Head from 'next/head'
import {
    useColorModeValue,
    Spacer,
    useColorMode,
    Heading,
    Image,
    Text,
    Flex,
    Link,
    Stack,
    Box,
    Divider,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

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
    
    .tag {
    	display: inline-block;
        /* Add shadows to create the "card" effect */
      max-width: auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 10px;
        background-color: ${useColorModeValue("#9973ff", "#6e37ff")};
        padding: 5px 10px 5px 10px;
	margin-right: 10px;
	margin-bottom: 10px;
      }
    `
    const ProjectBox = styled.span`
    img {
      align="right"  
      height: 100%;
      width: 100%;
      transition: filter 250ms ease, transform 250ms ease;
    }
    `;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
    <Container maxW='md'>
	<div width="100%">
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
		<Heading style={{ fontSize: 23 }} mt={{base: 4}} mb={{base: 4}}>Personal Website</Heading>
    

	<Tag>
	    <p>
            <div className="tag">JavaScript</div>
            <div className="tag">React</div>
            <div className="tag">Next.js</div>
            <div className="tag">Front end</div>
            <div className="tag">CSS</div>
            <div className="tag">Chakra-UI</div>
	    </p>
    </Tag>
	<Spacer mt={{base: 2}} />
    <p>
    My personal website acts as my portfolio for my projects and gives a little insight about me. Building my personal website allowed me to practically apply my web development skills and helps viewers gain a better understanding about my skillset.
    </p>
    <br></br>
    
	<Text>
	Check out more about this project on my {" "}
    <a href="https://github.com/hadiJafar/personal-website">
        <Link color={useColorModeValue("#6e37ff", "#9973ff")}>GitHub</Link>
	</a>
    </Text>

    <Spacer mt={{base: 4}} />
    <Divider/>
    <Heading style={{ fontSize: 23 }} mt={{base: 4}} mb={{base: 4}}>ECommerce Platform</Heading>
    <Tag>
	    <p>
            <div className="tag">Java</div>
            <div className="tag">CLI</div>
            <div className="tag">Interactive</div>
            <div className="tag">ECommerce Platform operations</div>
	    </p>
    </Tag>
    <Spacer mt={{base: 2}} />
    <p>
    A CLI program that operates as a simple ECommerce platform might by including functions such as adding items to cart, shipping orders, customer/product info, etc. The aim of this project was to gain a better understanding of how a real ECommerce platform might operate and apply a variety of my Java skills.
    </p>
    <br></br>

    <Box align="center" w="100%">
        <ProjectBox>
            <Image
              mb={{ base: 2 }}
              maxWidth="850px"
              borderRadius="25px"
              src={"../images/ECommercePic.png"}
              alt="ECommerce"
            />
          </ProjectBox>
      </Box>

    <br></br>
	<Text>
	Check out more about this project on my {" "}
    <a href="https://github.com/hadiJafar/CLI-ecommerce-platform">
        <Link color={useColorModeValue("#6e37ff", "#9973ff")}>GitHub</Link>
	</a>
    </Text>


    <Spacer mt={{base: 4}} />
    <Divider/>
    <Heading style={{ fontSize: 23 }} mt={{base: 4}} mb={{base: 4}}>Tic Tac Toe Game</Heading>
    <Tag>
	    <p>
            <div className="tag">Java</div>
            <div className="tag">GUI</div>
            <div className="tag">JPanel</div>
            <div className="tag">Game</div>
	    </p>
    </Tag>
    <Spacer mt={{base: 2}} />
    <p>
    Tic Tac Toe is a simple GUI game that has interactive buttons and includes a welcome screen, rules, an interactive grid, and a winning screen.
    This Tic tac Toe game is one of the first coding projects I completed. It was very fun experimenting around with the JPanel library and creating this game.
    </p>
    <br></br>

    <Box align="center" w="100%">
        <ProjectBox>
            <Image
              mb={{ base: 2 }}
              maxWidth="450px"
              borderRadius="25px"
              src={"../images/TicTacToeProjectsPic.gif"}
              alt="Tic Tac Toe"
            />
          </ProjectBox>
      </Box>
      
    <br></br>
	<Text>
	Check out more about this project on my {" "}
    <a href="https://github.com/hadiJafar/tic-tac-toe-gui">
        <Link color={useColorModeValue("#6e37ff", "#9973ff")}>GitHub</Link>
	</a>
    </Text>

    <Spacer mt={{base: 4}} />
    <Divider/>

    </Flex>
    </Stack>
	</div>
    </Container>
    </motion.div>
    )
}