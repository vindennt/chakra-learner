import { Box, Text, Flex } from "@chakra-ui/react";
import Layout from "../../components/layout";

export default function Projects() {
  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} alignItems="center">
        <Flex alignItems="left" justifyContent="left" direction="column">
          <Text>NLGDP</Text>
          <Text>Nathan Lu Genomic Duplication Project</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
