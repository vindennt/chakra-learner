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
  Heading,
  IconButton,
  useColorMode,
  SimpleGrid,
  Button,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
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
    description:
      "Electrical recycling depot locator and platform to promote sustainable textile vendors. Interactive map implemented with Leaflet.",
    technologies: "JavaScript, React",
    image: "GSC2023.png",
    progress: Progress.COMPLETE,
    link: "https://github.com/vindennt/gsc-2023",
  },
  {
    name: "Data Scientist v.s. Analysts: Comparison of salary and remote work options",
    description:
      "Used tidyverse library to aid statistical inferences about Data Scientists and Analysts from all company sizes and all experience levels. We wanted to explore wich profession was paid more and which one was more likely to work remotely.",
    technologies: "Python",
    image: "data-salary-comparison.png",
    progress: Progress.COMPLETE,
    link: "https://github.com/vindennt/stat-201-project-group-10/blob/main/Final Project Group 10.ipynb",
  },
  {
    name: "Heart Disease Predictor",
    description:
      "Applied K-Nearest Neighbours classifcation algorithm to achieve a model that could predict heart disease with 88% accuracy against the against the UCI's Cleveland Heart Disease dataset.",
    technologies: "Python",
    image: "heart-model.png",
    progress: Progress.COMPLETE,
    link: "/heart-disease-model",
  },
  {
    name: "Flashcard Manager",
    description:
      "App that can edit and review flashcard decks, as well as save and load them to the disk as JSON files.",
    technologies: "Java",
    image: "flashcard-manager.png",
    progress: Progress.COMPLETE,
    link: "https://github.com/vindennt/flashcard-manager",
  },
  {
    name: "Client Website Redesign",
    description:
      "Worked with the Learning Buddies Network to redesign the parent registration system for their website. Performed user research and data analysis with the creation of empathy maps and user personas. Balsamiq was used to create wireframe prototypes for presentation.",
    technologies: "Balsamiq",
    image: "lbn-redesign.png",
    progress: Progress.COMPLETE,
    link: "https://ischool.ubc.ca/news/how-to-design-a-re-design-ischool-students-and-community/",
  },
  // {
  //   name: "Translink Station Trip Planner",
  //   description:
  //     "Inter-station trip planner. Using skytrains stations as travel landmarks may become more common in the Lower Mainland's future as the train network expands. Translink's API should be robust for future station construction and serve as learning experience for using APIs.",
  //   technologies: "JavaScript",
  //   image: "d.png",
  //   progress: Progress.PLANNING,
  //   link: "/",
  // },
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
      <Text align={"center"}>Click a project to view it in a new tab.</Text>
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
          <Link href={project.link} target="blank">
            <Box padding={8}>
              <Heading size={"md"} marginBottom={1}>
                {project.name}
              </Heading>
              <Text as="i">{project.technologies}</Text>
              <br />
              <br />
              <Text marginBottom={3}>{project.description}</Text>
              <Image
                minW={"100%"}
                borderRadius={12}
                src={`/images/${project.image}`}
                alt="Project Image"
              />
              <StatusIndicator progress={project.progress}></StatusIndicator>
            </Box>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Projects;
