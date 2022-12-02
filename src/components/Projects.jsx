import { Grid, Heading,Box, Image, GridItem, Text } from '@chakra-ui/react'
import React from 'react'


export const Projects = () => {
  return (
    <Box className="p-15">
      <Heading className="center ptb-10">Project Section</Heading>
      <Grid templateColumns={"repeat(3,1fr)"} gap={"8"}>
        <GridItem className="card">
          <Box>
            <Image src="../Images/calculator.png" alt="calculator" />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Calculator
          </Heading>
          <Text>It was my first basic working calculator application. </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image src="../Images/calculator.png" alt="calculator" />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Calculator
          </Heading>
          <Text>It was my first basic working calculator application. </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image src="../Images/calculator.png" alt="calculator" />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Calculator
          </Heading>
          <Text>It was my first basic working calculator application. </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

