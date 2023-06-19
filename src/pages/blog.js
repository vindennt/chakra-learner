import { Box, Text, Flex, Link, Heading, SimpleGrid } from "@chakra-ui/react";
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
      <Flex
      direction="column"
      alignItems="center">
        <Flex
        alignItems="left"
        justifyContent="left"
        direction="column">
          <Heading m={10}>Articles</Heading>
          <SimpleGrid columns={2}>
          {allPostsData.map(({ id, date, title }) => (
            <Box m={2} padding={3} border="1px" borderRadius={5} bg={"white"} boxShadow={"md"}>
              <Text>
                <Link color='teal.500' href={`posts/${id}`}>
                {title}
                </Link>
                <br />
                <Date dateString={date} />
              </Text>
            </Box>
            
          ))}
          </SimpleGrid>

        </Flex>
      </Flex>
    </Box>
  );
}
