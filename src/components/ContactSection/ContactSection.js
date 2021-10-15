import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Contact,
  ContactContainer,
  ContactFormContainer,
  ContactForm,
  ContentLeft,
  ContentRight,
  Image,
  Title,
  Input,
  Button,
  TextArea,
  SuccessImage,
  SuccessMessage,
  Subtitle,
} from "./ContactSection.styled";
import mail from "../../assets/mail.svg";
import success from "../../assets/success.svg";
import "./Wave.css";

const ContactSection = ({ confirmationOpen, setConfirmationOpen }) => {
  const form = useRef();

  const firstUpdate = useRef(true);
  const [formSent, setFormSent] = useState(false);

  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let contactNum = (Math.random() * 100000) | 0;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!values.user_name || !values.user_email || !values.message) {
      setError(true);
      return;
    }
    emailjs
      .sendForm(
        "service_ntovixi",
        "contact_form",
        form.current,
        "user_ZWczsxcxNOHF2fv1u4zCQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setValues({
      user_name: "",
      user_email: "",
      message: "",
    });
    setConfirmationOpen(true);
    setFormSent(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setFormSent(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [formSent]);

  return (
    <Contact id="contact">
      <div class="custom-shape-divider-top-1634178381">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <ContactContainer>
        <ContactFormContainer>
          <ContentLeft>
            <Image src={mail} />
          </ContentLeft>
          <ContentRight>
            {!formSent ? (
              <ContactForm ref={form} onSubmit={sendEmail}>
                <Title error={error}>Like my work? Get in touch!</Title>
                <Subtitle error={error}>
                  Please fill in all the fields.
                </Subtitle>
                <input type="hidden" name="contact_number" value={contactNum} />
                <Input
                  autoComplete="off"
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  value={values.user_name}
                  onChange={handleChange}
                  empty={error && !values.user_name ? true : false}
                ></Input>

                <Input
                  autoComplete="off"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={values.user_email}
                  onChange={handleChange}
                  empty={error && !values.user_email ? true : false}
                ></Input>

                <TextArea
                  placeholder="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  empty={error && !values.user_message ? true : false}
                ></TextArea>

                <Button type="submit" value="Send">
                  Send
                </Button>
              </ContactForm>
            ) : (
              <>
                <SuccessImage src={success} />
                <SuccessMessage>Your message has been sent! 📫</SuccessMessage>
                <SuccessMessage>Talk to you soon! 👍🏻</SuccessMessage>
              </>
            )}
          </ContentRight>
        </ContactFormContainer>
      </ContactContainer>
    </Contact>
  );
};

export default ContactSection;
