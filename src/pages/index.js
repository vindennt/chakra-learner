import {
  Box,
  Flex,
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Layout from "../../components/layout";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function ProfileTab({ children }) {
  return (
    <Tab
      _selected={{
        borderBottom: "2px",
        mb: "2px",
      }}
      _hover={{
        borderBottom: "2px",
        borderColor: "gray.300",
      }}
    >
      {children}
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
              <ProfileTab>Bio</ProfileTab>
              <ProfileTab>Skills</ProfileTab>
              <ProfileTab>Projects</ProfileTab>
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
                  <Link p={4} href="mailto:vindennt@gmail.com">
                    vindennt@gmail.com
                  </Link>
                  <Flex alignItems="center" gap="3.5">
                    <a href="https://www.github.com/vindennt" target="blank">
                      <IconButton aria-label="Github" icon={<FaGithub />} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dennis-truong-111291264/"
                      target="blank"
                    >
                      <IconButton
                        aria-label="LinkedIn"
                        icon={<FaLinkedinIn />}
                      />
                    </a>
                    <a href="https://twitter.com/vindennt" target="blank">
                      <IconButton aria-label="Twitter" icon={<FaTwitter />} />
                    </a>
                  </Flex>
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
