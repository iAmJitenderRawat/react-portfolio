import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React from 'react'

export function AlertMsg() {
  return (
    <div>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Mail sent!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for contacting me. I will get back to you
          soon.
        </AlertDescription>
      </Alert>
    </div>
  );
}
