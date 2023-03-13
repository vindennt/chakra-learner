import { Box, Text, Flex, Link } from "@chakra-ui/react";
import Layout from "../../components/layout";

export default function Contact() {
  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} alignItems="center" justifyContent="top">
        <Link href="mailto:vindennt@gmail.com">vindennt@gmail.com</Link>
        <Link>twitter.com/vindennt</Link>
      </Flex>
    </Box>
  );
}
