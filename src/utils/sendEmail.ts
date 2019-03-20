import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxd3cf380640b646ecbd2010beff7aa081.mailgun.org"
});

const sendEmail = (to: string, subject: string, html: string) => {
  const emailData = {
    from: "jsh901220@gmail.com",
    to,
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (to: string, fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
  return sendEmail(to, emailSubject, emailBody);
};
