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
            variant="soft-rounded"
            colorScheme="cyan"
            defaultIndex={0}
            align="center"
          >
            <TabList>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.300",
                  borderRadius: "8",
                }}
              >
                Skills
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.300",
                  borderRadius: "8",
                }}
              >
                Projects
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.300",
                  borderRadius: "8",
                }}
              >
                Education
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>A few</p>
              </TabPanel>
              <TabPanel>
                <Flex
                  direction="column"
                  p={12}
                  alignItems="center"
                  justifyContent="top"
                  background="grey.100"
                >
                  <Text>NLGDP</Text>
                  <Text>Nathan Lu Genomic Duplication Project</Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>School</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
}
