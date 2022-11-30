import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";


export const Home = () => {
  return (
    <HStack>
      <VStack>
        <Image src={"https://avatars.githubusercontent.com/u/107478598?v=4"} />
      </VStack>
      <VStack>
        <Heading>Hi, I'm Jitender 🤚</Heading>
      </VStack>
    </HStack>
  );
};
