import Head from 'next/head'
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faJava, faJsSquare, faPython, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { 
  useColorModeValue,
  useColorMode,
  Heading,
  Text,
  Flex,
  Link,
  Stack,
  Button,
} from '@chakra-ui/react'
import Container from '../components/Container'
import { redirect } from 'next/dist/server/api-utils';
import styled from '@emotion/styled'

export default function Home() {
  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
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
          <Heading mb={{base: 0}}>Hi, I{"'"}m Hadi Jafar</Heading>
          <Text style={{ fontSize: 20 }} mb={{base: 5}} >Developer • Student • Plant Parent • Animal Lover</Text>

          <Heading style={{ fontSize: 23 }}>About me</Heading>
          <Text mt={{base: 2}}>Hi!! I am currently a second year studying computer science at <strong>Toronto Metropolitan University </strong> (formerly known as <strong>Ryerson</strong>).I find learning fun, exiting, and interesting!! I enjoy taking intiative and challenging myself by building projects for fun. Check out some of my work in {" "}
          <NextLink href="/projects" scroll={false}>
            <Link color={useColorModeValue("#6e37ff", "#9973ff")}>projects</Link>
          </NextLink>{" "}
          !!<br /> <br /> 
          </Text>

          <Heading style={{ fontSize: 23 }}>A Little More About Me Personally </Heading>
          <Text mt={{base: 2}}>Apart from coding, I really like taking care of plants, drawing, spending time outdoors, wall art decor, exploring museums, and cycling. I frequently visit the A.G.O, go bicycling around twice a week, and have been working on improving my hatching art style. Take a look at my {" "}
          <NextLink href="/blog" scroll={false}>
            <Link color={useColorModeValue("#6e37ff", "#9973ff")}>blogs</Link>
          </NextLink>{" "}
           to learn more about me :)<br /> <br />
           </Text>

          <Heading style={{ fontSize: 23 }}>My Love Languages <FontAwesomeIcon icon={faHeart}/> </Heading>
          <Text mt={{base: 2}}>
          </Text>
          <Text mb={{base: 3}}>Some of my favourite coding languages are <strong>Java, Javascript, Python</strong>, and <strong>React</strong>. Apart from coding languages, I use VS code as my IDE and love using git to help me complete projects and use open source code. Take a look at some of my coding related {" "}
          <NextLink href="/blog" scroll={false}>
            <Link color={useColorModeValue("#6e37ff", "#9973ff")}>blogs</Link>
          </NextLink>{" "}
           to learn more about why I like these tools/languages<br /> <br /> 
          </Text>

          <CardStyle>
            <div className="grid-container">
              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faJava} fontSize="100" fixedWidth/>
                <strong style={{ fontSize: 25 }}>Java</strong>
                </div>
              </div>

              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faReact} fontSize="100" fixedWidth/>
                <strong style={{ fontSize: 25 }}>React</strong>
                </div>
              </div>


              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faPython} fontSize="100" fixedWidth/>
                <strong style={{ fontSize: 25 }}>Python</strong>
                </div>
              </div>

              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faGithub} fontSize="100" fixedWidth/>
                <strong style={{ fontSize: 25 }}>Git</strong>
                </div>
              </div>

              

              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faFileCode} fontSize="100" fixedWidth/>
                <strong style={{ fontSize: 25 }}>VS Code</strong>
                </div>
              </div>

              <div className="card">
                <div className="container" align="center">
                <FontAwesomeIcon icon={faJsSquare} fontSize="100" fixedWidth/>
                <strong style={{ fontSize: 25 }}>JavaScript</strong>
                </div>
              </div>

            </div>
          </CardStyle>
         
        </Flex>
      </Stack>
    </Container>
  )
}