import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'

export const Stats = () => {
  return (
    <div className="p-15" id="stats">
      <Heading className="center ptb-10">GitHub Stats</Heading>
      <Flex justify={"space-between"} m={"30px 0"}>
        <img
          className="stats"
          width={"500px"}
          src="https://github-readme-stats.vercel.app/api?username=iamjitenderrawat&show_icons=true&locale=en"
          alt="iamjitenderrawat"
        />
        <img
          className="stats"
          width={"500px"}
          src="https://github-readme-streak-stats.herokuapp.com/?user=iamjitenderrawat&"
          alt="iamjitenderrawat"
        />
      </Flex>
      <Box>
        <img
          className="lang stats"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=iamjitenderrawat&show_icons=true&locale=en&layout=compact"
          alt="iamjitenderrawat"
        />
      </Box>
    </div>
  );
}

