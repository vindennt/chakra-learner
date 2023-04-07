import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";
import Layout from "../../components/layout";

export default function Travel() {
  return (
    <Box>
      <Layout></Layout>
      <Flex direction="column" p={12} background="grey.100" rounded={6}>
        <Image
          borderRadius="10px"
          boxSize="md"
          objectFit="fill"
          src="https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80"
          alt="Ninh Binh, Vietnam"
        />
      </Flex>
    </Box>
  );
}
