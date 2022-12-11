import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import { AlertMsg } from "./AlertMsg";
import { useEffect } from "react";

export const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PRIVATE_KEY
      )
      .then((res) => console.log("Success!", res.text))
      .catch((err) => console.log("Failed...", err.text));
    setAlert(!alert);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  return (
    <Box className="center ptb-10" id="contact">
      <Heading>Contact</Heading>
      {alert ? <AlertMsg /> : null}
      <Box id="form">
        <Box className={"left"}>
          <Image src="../Images/contact.png" />
        </Box>
        <form ref={form} onSubmit={sendEmail} className="right">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" rows={3} />
          <button type="submit">Send</button>
        </form>
      </Box>
    </Box>
  );
};
