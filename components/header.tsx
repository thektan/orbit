import React from "react";
import Link from "next/link";

import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="gray.800"
      color="white"
      px={4}
      py={2}
      {...props}
    >
      <Link href={"/"}>
        <Heading as="h6" size="md">
          Orbit
        </Heading>
      </Link>
    </Flex>
  );
};

export default Header;
