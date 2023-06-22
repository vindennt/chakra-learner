// code reference: Telmo Goncalves
//"https://www.pullrequest.com/blog/build-a-blog-with-nextjs-and-markdown/?ref=morioh.com&utm_source=morioh.com

import React from "react";
import Layout from "../../../components/header";
import {
  Box,
  Text,
  Flex,
  Link,
  Heading,
  Container,
  Button,
} from "@chakra-ui/react";
import matter from "gray-matter";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import Date from "../../../components/date";
import { FaChevronLeft } from "react-icons/fa";

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
        <Heading marginTop={5}>{frontmatter.title}</Heading>

        <Container
          direction="column"
          background="grey.100"
          p={3}
          centerContent
          maxW="2xl"
        >
          <Text color="teal.500">By Dennis Truong</Text>
          <Text color="teal.500" marginBottom={5}>
            <Date dateString={frontmatter.date} />
          </Text>

          <ReactMarkdown children={content} />

          <Container alignContent="flex-start" marginBottom="50px">
            <a href="/blog/">
              <Button
                marginTop={10}
                leftIcon={<FaChevronLeft />}
                colorScheme="gray"
                variant="solid"
              >
                Back to blog
              </Button>
            </a>
          </Container>
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
};

export default PostTemplate;
