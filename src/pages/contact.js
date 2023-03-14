import { Box, Text, Flex, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Layout from "../../components/layout";

export default function Contact() {
  return (
    <Box>
      <Layout></Layout>
      <Flex
        direction="column"
        p={12}
        alignItems="center"
        justifyContent="top"
        background="grey.100"
      >
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
            <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} />
          </a>
          <a href="https://twitter.com/vindennt" target="blank">
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </a>
        </Flex>
      </Flex>
    </Box>
  );
}
