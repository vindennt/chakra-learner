import { Box, Text, Flex, Link, Heading, SimpleGrid, useColorMode } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
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
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Header></Header>
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
            <Box m={2} padding={3} border="1px" borderRadius={5} bg={"BlackAlpha 50"} boxShadow={"lg"}>
              <Text>
                <Link color={colorMode === "light" ? "teal.500" : "teal.300"}
                      href={`posts/${id}`}>
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
      <Footer></Footer>
    </Box>
  );
}
