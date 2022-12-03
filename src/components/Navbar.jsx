import React from "react";
import { Button, Flex, Image, Tab, TabList, Tabs, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      p={"10px 5%"}
      bg={"Background"}
    >
      <Image src="../Images/logoGif.gif" w={"60px"} h={"60px"} />
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "red.500" }}>Home</Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>About</Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>Skills</Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>Stats</Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>Projects</Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>Contact</Tab>
        </TabList>
      </Tabs>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};
