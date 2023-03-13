import { Box, Text, Flex, Link, Heading } from "@chakra-ui/react";
import Layout from "../../components/layout";

Blog.getInitialProps = () => {
  return {
    blogTitle: "vindennt Blog",
  };
};

export default function Blog(props) {
  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} alignItems="center">
        <Flex alignItems="left" justifyContent="left" direction="column">
          <Heading>{props.blogTitle}</Heading>
          <Text>What to cook after your mom yells at you</Text>
          <Text>Mar 12, 2023</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
