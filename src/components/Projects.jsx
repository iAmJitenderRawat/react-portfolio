import { Grid, Heading, Box, Image, GridItem, Text } from "@chakra-ui/react";
import React from "react";

export const Projects = () => {
  return (
    <Box className="p-15" id="projects">
      <Heading className="center ptb-10">Project Section</Heading>
      <Grid templateColumns={"repeat(3,1fr)"} gap={"8"}>
        <GridItem className="card">
          <Box>
            <Image src="../Images/roll-the-dice.png" alt="calculator" />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Roll The Dice
          </Heading>
          <Text className="silver">
            It was my first basic fun application. In this, three dices are
            rolled and outcome could be Player 1 Wins, Player 2 Wins and Draw.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/calculator.png"
              alt="calculator"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Calculator
          </Heading>
          <Text className="silver">
            It was my first basic working calculator application. It could
            perform basic Addition, Substraction, Multiplication and Division
            functions.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/movie-app.png"
              alt="calculator"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Movie App
          </Heading>
          <Text className="silver">
            It was a basic movie application which provide us movie details. I
            used debouncing for getting recommended movies names to reduce api
            calls.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/todo-app.png"
              alt="todo-app"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Todo App
          </Heading>
          <Text className="silver">
            It was a basic todo application which provide us our todo list with
            its priority. I used local storage to save todo list so that it will
            be there, even if we reload the page.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/weather.png"
              alt="weather"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Weather App
          </Heading>
          <Text className="silver">
            It was a basic weather application which provide us weather details,
            7 day forcast and map. I also used geo-location. I used Open Weather
            api.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/bellavita-organic.png"
              alt="Bella Vita Organic"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Bella Vita Organic
          </Heading>
          <Text className="silver">
            It is a clone of bella vita organic. It is a E-commerce website
            which deals with natural beauty products. Its my first collaborative
            project. It is created by four members.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/bellavita-organic.png"
              alt="Bella Vita Organic"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Keeper
          </Heading>
          <Text className="silver">
            It is a note making app which is used to make notes of our daily
            tasks. It is created by me.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
            <GridItem>MongoDB</GridItem>
            <GridItem>Mongoose</GridItem>
            <GridItem>React</GridItem>
            <GridItem>Express</GridItem>
            <GridItem>Node</GridItem>
            <GridItem>Chakra UI</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/bellavita-organic.png"
              alt="Bella Vita Organic"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Bella Vita Organic
          </Heading>
          <Text className="silver">
            It is a clone of bella vita organic. It is a E-commerce website
            which deals with natural beauty products. Its my first collaborative
            project. It is created by four members.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
        <GridItem className="card">
          <Box>
            <Image
              className="project"
              src="../Images/bellavita-organic.png"
              alt="Bella Vita Organic"
            />
          </Box>
          <Heading fontSize={"xl"} className="m-10 center">
            Bella Vita Organic
          </Heading>
          <Text className="silver">
            It is a clone of bella vita organic. It is a E-commerce website
            which deals with natural beauty products. Its my first collaborative
            project. It is created by four members.
          </Text>
          <Heading fontSize={"lg"}>Tech Stack</Heading>
          <Grid className="burlywood" templateColumns={"repeat(3,1fr)"} gap="5">
            <GridItem>HTML</GridItem>
            <GridItem>CSS</GridItem>
            <GridItem>JAVASCRIPT</GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};
