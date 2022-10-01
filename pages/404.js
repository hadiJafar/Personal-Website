import { Heading, Link, Divider, Stack, useColorModeValue } from "@chakra-ui/react";
import Head from 'next/head'
import NextLink from "next/link";
import Container from '../components/Container'

const NotFound = () => {
  return (
    <Container>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Stack
        as="article"
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
        px={2}
      >
        <Heading as="h1"> The page you&#39;re looking for can&#39;t <br></br>be found.</Heading>
        <Divider mb={{ base: 2 }} mt={{ base: 1 }} />
        <p>
            Would you like to return to the{" "}
            <NextLink href="/" scroll={false}>
            <Link color={useColorModeValue("#6e37ff", "#9973ff")}>home</Link>
            </NextLink>{" "}
            page?
        </p>
      </Stack>
    </Container>
  );
};

export default NotFound;