import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <div className="p-15">
      <Heading as={"h1"} fontSize={"4xl"} className="center ptb-10">About Me</Heading>
      <Text
        color={"red.400"}
        bg={"whiteAlpha.900"}
        className={"fs-25 br about"}
      >
        Hello, I'm Jitender. I am an aspiring Full Stack Web Developer living in
        Mohali, Punjab. I have done Intermediate from Govt. Model Sr. Sec.
        School with 62.6% and B.Tech. from Indo Global College of Engineering
        with 68.5%. Later, I found my interest in coding and started learning
        coding from various platforms. Now, I want to apply my skills and
        furnish them more to become than my previous version.
      </Text>
    </div>
  );
};
