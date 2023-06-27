import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import React from "react";

function iframe() {
  return {
    __html:
      '<iframe src="projects/heart-disease-model.html" width="600" height="900"></iframe>',
  };
}

export default function HeartModel() {
  return (
    <Box>
      <Header></Header>
      <Flex alignItems="center" direction="column" minH="100vh">
        <Flex>
          <div dangerouslySetInnerHTML={iframe()} />
        </Flex>
      </Flex>
      <Footer></Footer>
    </Box>
  );
}
