import { Card, CardHeader, Grid, Heading, Text,Box, CardBody, Image, CardFooter, Button } from '@chakra-ui/react'
import React from 'react'
import { BiLike, BiChat, BiShare } from "react-icons/bi";

export const Projects = () => {
  return (
    <Box className="p-15">
      <Heading className="center ptb-10">Project Section</Heading>
      <Grid>
        <Card maxW="md">
          <Box>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
          </Box>
          <CardHeader>
              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
              </Box>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
          </CardFooter>
        </Card>
      </Grid>
    </Box>
  );
}

