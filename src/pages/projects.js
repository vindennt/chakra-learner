import { Box, Text, Flex } from "@chakra-ui/react";
import Layout from "../../components/layout";

export default function Projects() {
  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} alignItems="center" justifyContent="top">
        <Text>NLGDP</Text>
        <Text>Nathan Lu Genomic Duplication Project</Text>
      </Flex>
    </Box>
  );
}
