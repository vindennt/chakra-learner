import { Box, Text, Flex, Link, Heading } from "@chakra-ui/react";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts"
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


// Blog.getInitialProps = () => {
//   return {
//     blogTitle: "dtruong Blog",
//   };
// };


export default function Blog({allPostsData}) {


  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} alignItems="center">
        <Flex alignItems="left" justifyContent="left" direction="column">
          <Heading>Title</Heading>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}

          
        </Flex>
      </Flex>
    </Box>
  );
}
