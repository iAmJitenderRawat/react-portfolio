import { Box, Text } from '@chakra-ui/react';
import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <Box textAlign={"center"}>
      <Text fontSize={"xs"}>Made with ❤️ by Jitender</Text>
      <Text fontSize={"xs"}>Copyright ⓒ {year}</Text>
    </Box>
  );
}
