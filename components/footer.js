import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  NextLink,
} from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Footer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { asPath } = useRouter();

  return (
    <Flex
      direction="column"
      marginTop={10}
      paddingBottom={20}
      h={"140px"}
      p={2}
      alignItems="center"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Link p={3} href="mailto:truong.dennis00@gmail.com">
        truong.dennis00@gmail.com
      </Link>
      <Flex gap="4">
        <a href="https://www.github.com/vindennt" target="blank">
          <IconButton
            borderRadius={"12"}
            aria-label="Github"
            icon={<FaGithub />}
            bg={useColorModeValue("gray.300", "gray.600")}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dennis-truong-111291264/"
          target="blank"
        >
          <IconButton
            borderRadius={"12"}
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            bg={useColorModeValue("gray.300", "gray.600")}
          />
        </a>
        {/* <a href="https://twitter.com/vindennt" target="blank">
            <IconButton borderRadius={"12"} p={4} aria-label="Twitter" icon={<FaTwitter /> } bg={useColorModeValue("gray.300", "gray.600")}/>
          </a> */}
      </Flex>
    </Flex>
  );
};

export default Footer;
