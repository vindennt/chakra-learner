import {
  Box,
  Flex,
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Layout from "../../components/layout";

function ProfileTab({ text }) {
  return (
    <Tab
      _selected={{
        color: "white",
        bg: "blue.500",
        borderRadius: "8",
      }}
    >
      text
    </Tab>
  );
}

export default function Home() {
  return (
    <Box>
      <Layout></Layout>
      <Flex height="20vh" alignItems="center" direction="column">
        <Flex
          direction="column"
          background="grey.100"
          p={12}
          rounded={6}
          alignItems="center"
          justifyContent="top"
        >
          <Heading mb={6}>Dennis Truong</Heading>
          <Text mb={6}>
            Web developer and artist with experience in JavaScript, Java, C++,
            and Python.
          </Text>
          <Tabs
            variant="none"
            colorScheme="cyan"
            defaultIndex={0}
            align="center"
          >
            <TabList>
              <Tab
                _selected={{
                  borderBottom: "2px",
                  mb: "2px",
                }}
              >
                Bio
              </Tab>
              <Tab
                _selected={{
                  borderBottom: "2px",
                  mb: "2px",
                }}
              >
                Skills
              </Tab>
              <Tab
                _selected={{
                  borderBottom: "2px",
                  mb: "2px",
                }}
              >
                Projects
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex
                  direction="column"
                  p={5}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>Hi im denis </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction="column"
                  p={5}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>Yes </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction="column"
                  p={5}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>NLGDP</Text>
                  <Text>Nathan Lu Genomic Duplication Project</Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
}
