import React from "react";
import { Button, Flex, Image, Tab, TabList, Tabs, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      id="navbar"
      justify={"space-between"}
      align={"center"}
      p={"10px 5%"}
      bgGradient="linear(to-r, purple.200, blue.500)"
    >
      <Image src="../Images/logoGif.gif" w={"60px"} h={"60px"} />
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#home">Home</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#about">About</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#skills">Skills</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#stats">Stats</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#projects">Projects</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#contact">Contact</a>
          </Tab>
        </TabList>
      </Tabs>
      <Button bg={"Background"} onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};
