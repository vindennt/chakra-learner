// import React from "react";
// import ChakraUIRenderer from "chakra-ui-markdown-renderer";
// import ReactMarkdown from "react-markdown";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
// import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import Head from "next/head";
import Layout from "../../components/layout";

// const Links = [
//   { name: "About", to: "/" },
//   { name: "Projects", to: "/projects" },
//   { name: "Blog", to: "/blog" },
//   { name: "Art", to: "/art" },
//   { name: "Contact", to: "/contact" },
// ];

// const allPostsData = getSortedPostsData();
export default function Home() {
  return (
    <Layout>
      <Box p={4}>
        <Flex height="20vh" alignItems="center" direction="column">
          <Flex
            direction="column"
            background="grey.100"
            p={12}
            rounded={6}
            alignItems="center"
            justifyContent="top"
          >
            <Heading mb={6}>Dennis Truong</Heading>
            <Text mb={6}>
              Web developer with experience in JavaScript, Java, C+ +, and
              Python.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
