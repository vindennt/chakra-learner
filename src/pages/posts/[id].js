import React from "react";
import ReactDom from "react-dom";
import Layout from "../../../components/layout";
import { Box, Text, Flex, Link, Heading } from "@chakra-ui/react";
import matter from "gray-matter";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

<ReactMarkdown children={matter.content} />;

function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  return (
    <Box>
      <Layout></Layout>
      <Flex
        direction="column"
        background="grey.100"
        p={10}
        rounded={6}
        alignItems="center"
        justifyContent="top"
      >
        <Heading p={7}>{frontmatter.title}</Heading>
        <Text p={5}>{frontmatter.date} by Dennis Truong</Text>
        <ReactMarkdown children={content} />
      </Flex>
    </Box>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { id } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../../../content/${id}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to our component props
  return { ...data };

  return { id };
};

export default PostTemplate;
