import {
  Heading,
  HStack,
  Image,
  VStack,
  ListItem,
  List,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <HStack p={"80px 15% 0"} justify={"space-around"} id="home">
      <VStack>
        <Image
          src={"https://avatars.githubusercontent.com/u/107478598?v=4"}
          borderRadius={"50%"}
        />
      </VStack>
      <VStack align={"flex-start"}>
        <Heading as="h1" size="2xl">
          Hi, I'm
          <Text
            bgGradient="linear(to-r, purple.200, blue.500)"
            bgClip="text"
            display={"inline"}
          >
            {" "}
            Jitender
          </Text>
          <div className="hand">👋</div>
        </Heading>
        <Heading as="h2" size="lg">
          I'm an aspiring
          <Typewriter
            options={{
              strings: [
                "Front-end Developer.",
                "Back-end Developer.",
                "Full Stack Web Developer.",
              ],
              wrapperClassName:'Typewriter__wrapper',
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <List spacing={3}>
          <ListItem>☕ Fueled by Coffee</ListItem>
          <ListItem>🌏 Based in India</ListItem>
          <ListItem>📧 Jitenderrawat39@gmail.com</ListItem>
        </List>
        <HStack p={"50px 0"} gap={4}>
          <BsGithub size={"50px"} />
          <BsLinkedin size={"50px"} />
          <FaHackerrank size={"50px"} />
          <SiLeetcode size={"50px"} />
        </HStack>
      </VStack>
    </HStack>
  );
};
