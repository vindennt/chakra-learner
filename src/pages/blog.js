import { Box, Text, Flex, Link, Heading } from "@chakra-ui/react";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts"
import utilStyles from '../styles/utils.module.css';
import Date from "../../components/date"


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Blog({allPostsData}) {
  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} alignItems="center">
        <Flex alignItems="left" justifyContent="left" direction="column">
          <Heading>Articles</Heading>
          {allPostsData.map(({ id, date, title }) => (
            <Text key={id} padding={3}>
              <Link color='teal.500' href={`posts/${id}`}>
              {title}
              </Link>
              <br />
              <Date dateString={date} />
            </Text>
          ))}

        </Flex>
      </Flex>
    </Box>
  );
}
