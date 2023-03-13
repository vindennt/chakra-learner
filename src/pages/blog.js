import { Box, Text, Flex, Link } from "@chakra-ui/react";
import Layout from "../../components/layout";

export default function Blog() {
  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} alignItems="center">
        <Text>What to cook after your mom yells at you</Text>
        <Text>Mar 12, 2023</Text>
      </Flex>
    </Box>
  );
}
