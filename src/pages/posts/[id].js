// code reference: Telmo Goncalves
//"https://www.pullrequest.com/blog/build-a-blog-with-nextjs-and-markdown/?ref=morioh.com&utm_source=morioh.com

import React from "react";
import Layout from "../../../components/layout";
import { Box, Text, Flex, Link, Heading, Container } from "@chakra-ui/react";
import matter from "gray-matter";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import Date from "../../../components/date";

<ReactMarkdown
  components={ChakraUIRenderer()}
  children={matter.content}
  skipHtml
/>;

function PostTemplate({ content, data }) {
  const frontmatter = data;

  return (
    <Box>
      <Layout></Layout>
      <Flex
        height="20vh"
        alignItems="center"
        direction="column"
        marginLeft="15px"
        marginRight="15px"
      >
        <Heading marginTop={70}>{frontmatter.title}</Heading>
        <Container
          direction="column"
          background="grey.100"
          p={3}
          centerContent
          maxW="2xl"
        >
          <Text>
            <Date dateString={frontmatter.date} />
          </Text>
          <Text marginBottom={5}>By Dennis Truong</Text>
          <ReactMarkdown children={content} />
        </Container>
      </Flex>
    </Box>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { id } = context.query;

  // Import our .md file using the `id` from the URL
  const content = await import(`../../../content/${id}.md`);
  // Parse .md data through `matter`
  const data = matter(content.default);
  // Pass data to our component props
  return { ...data };
  return { id };
};

export default PostTemplate;
