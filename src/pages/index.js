import { Box, Flex, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Layout from "../../components/layout";

export default function Home() {
  return (
    <Box>
      <Layout></Layout>
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
            Programmer with experience in JavaScript, Java, C++, and Python.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
