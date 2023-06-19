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
    <Flex direction="column" p={5} alignItems="center" background="grey.100">
        <Link p={4} href="mailto:truong.dennis00@gmail.com">
          truong.dennis00@gmail.com
        </Link>
        <Flex gap="3.5">
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
  );
};

export default Footer;
