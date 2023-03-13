import { Box, Text, Flex, Link } from "@chakra-ui/react";
import Layout from "../../components/layout";

export default function Contact() {
  return (
    <Box>
      <Layout></Layout>
      <Flex
        direction="column"
        p={12}
        alignItems="center"
        justifyContent="top"
        background="grey.100"
      >
        <Link href="mailto:vindennt@gmail.com">vindennt@gmail.com</Link>
        <Link href="https://www.twitter.com/vindennt" target="_blank">
          Twitter
        </Link>
        <Link
          href="https://www.linkedin.com/in/dennis-truong-111291264/"
          target="_blank"
        >
          LinkedIn
        </Link>
      </Flex>
    </Box>
  );
}
