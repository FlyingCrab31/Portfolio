import emailjs from "@emailjs/browser";
const NEXT_PUBLIC_SERVICE_ID = 'service_4a0akoq';
const NEXT_PUBLIC_TEMPLATE_ID = 'template_ynn7gdm';
const NEXT_PUBLIC_USER_ID = '3sSb1oV5ygBjzAf-C';
const mail = ({ name, email, message }) => {
  return emailjs.send(
    NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID,
    { name, email, message },
    NEXT_PUBLIC_USER_ID
  );
};

export default mail;
