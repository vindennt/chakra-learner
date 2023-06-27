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
  SimpleGrid,
  Button,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";

const Progress = {
  PLANNING: "Planning",
  INPROGRESS: "In Development",
  COMPLETE: "Complete",
  SUPPORTED: "Complete and Supported",
};

const ProjectList = [
  {
    name: "Sustainability Website: 2023 Google Solution Challenge",
    description: "",
    technologies: "JavaScript, React",
    image: "d.png",
    progress: Progress.COMPLETE,
    link: "https://github.com/vindennt/gsc-2023",
  },
  {
    name: "Data Science and Analyst Salary Comparison",
    description: "Desc",
    technologies: "Python",
    image: "d.png",
    progress: Progress.COMPLETE,
    link: "https://github.com/vindennt/stat-201-project-group-10/blob/main/Final Project Group 10.ipynb",
  },
  {
    name: "Heart Disease Predictor",
    description: "Desc",
    technologies: "Python",
    image: "d.png",
    progress: Progress.COMPLETE,
    link: "/heart-disease-model",
  },
  {
    name: "Flashcard Manager",
    description: "Desc",
    technologies: "Java",
    image: "d.png",
    progress: Progress.COMPLETE,
    link: "/",
  },
  {
    name: "Client Website Redesign",
    description: "Desc",
    technologies: "Balsamiq",
    image: "d.png",
    progress: Progress.COMPLETE,
    link: "/",
  },
];

const StatusIndicator = ({ progress }) => {
  const { colorMode } = useColorMode();
  let colour = colorMode === "light" ? "gray.300" : "gray.600"; // default
  let text = progress; // default

  switch (text) {
    case Progress.COMPLETE:
      colour = colorMode === "light" ? "gray.300" : "gray.600";
      break;
    case Progress.INPROGRESS:
      colour = colorMode === "light" ? "yellow.300" : "yellow.600";
      break;
    case Progress.PLANNING:
      colour = colorMode === "light" ? "blue.300" : "blue.600";
      break;
    case Progress.SUPPORTED:
      colour = colorMode === "light" ? "green.300" : "green.600";
      break;
    default:
      text = "Unknown";
      break;
  }

  return (
    <Wrap>
      <WrapItem bg={colour} marginTop={4} borderRadius={12}>
        <Center
          paddingTop={1.5}
          paddingBottom={1.5}
          paddingLeft={4}
          paddingRight={4}
        >
          <Text fontSize={14}>{text}</Text>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <SimpleGrid columns={1} spacing={10} marginTop={30}>
      <Text align={"center"}>Click a project to view.</Text>
      {ProjectList.map((project) => (
        <Box
          bg={colorMode === "light" ? "gray.100" : "whiteAlpha.100"}
          boxShadow={"lg"}
          _hover={{
            bg: colorMode === "light" ? "gray.50" : "whiteAlpha.200",
            boxShadow: "xl",
          }}
          border="0px"
          borderRadius={12}
        >
          <a href={project.link} target="blank">
            <Box padding={8}>
              <Heading size={"md"}>{project.name}</Heading>
              <Text as="i">{project.technologies}</Text>
              <br />
              <br />
              <Text>{project.description}</Text>
              <br />
              <Image
                minW={"100%"}
                borderRadius={12}
                src={`/images/${project.image}`}
                alt="Project Image"
              />
              <StatusIndicator progress={project.progress}></StatusIndicator>
            </Box>
          </a>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Projects;
