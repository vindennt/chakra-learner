import {
  Box,
  Flex,
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Image,
  Stack,
  Link,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Stack p={5} background="grey.100" maxW="xlg">
      <Text align="left">
        Hey! My name is Dennis and I&apos;m a student who pivoted to studying
        Computer Science after finishing an Honours in Biology. Right now,
        I&apos;m absorbed with computer hardware, mobile app development, and
        front-end design.
      </Text>
      <br />
      <Text>
        I dove into the accelerated second bachelors degree for Computer Science
        (BCS) at the University of British Columbia after being fascinated by
        the tailored hardware and software setup that played a critical in my
        thesis research on fruit fly memory formation. During my studies, I hope
        to use the skills I gained during my Biology degree to deepen my
        understanding of how programs communicate with hardware and to catch up
        to the breakneck pace of today&apos;s technological integration.
      </Text>
      <br />
      <Heading size={"md"}>Education</Heading>
      <Heading size={"sm"}>The University of British Columbia</Heading>
      <Text as={"i"}>Vancouver, BC</Text>
      <Text paddingLeft={5}>Bachelor of Computer Science (2022 - Present)</Text>
      <Text paddingLeft={5}>
        Bachelor of Science, Honours in Animal Biology (2018 - 2022)
      </Text>
      <br />
      <Heading size={"md"}>Work Experience</Heading>
      <Heading size={"sm"}>Research Assistant</Heading>
      <Text as={"i"}>Vancouver, BC</Text>
      <Text paddingLeft={5}>
        During the summer of 2022, I followed up with my undergraduate
        thesis&apos; work by characterizing the feeding behaviour of different
        fruit fly lines with the help of Principle Investigator Dr. Michael
        Gordon at UBC&apos;s{" "}
        <Link
          href="https://www.zoology.ubc.ca/~gordon/index.html"
          color={"teal.500"}
          target="blank"
        >
          Gordon Lab
        </Link>
      </Text>

      <br />
      <Text paddingLeft={5}>
        Through confocal microscopy and behavioural assessments, I analyzed 21
        genetic lines and compared the fluorescent imaging of their taste
        neurons to baseline wildtype flies. My project helped expand the current
        fruit fly model of visual memory formation and taste processing by
        revealing behavioural anomalies and taste neuron deficiencies for
        certain genetic lines.
      </Text>
    </Stack>
  );
};

export default Profile;
