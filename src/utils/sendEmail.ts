import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox6dc95a40763144f59f34911bf0fb8eaf.mailgun.org"
});

const sendEmail = (to: string, subject: string, html: string) => {
  const emailData = {
    from: "jsh901220@gmail.com",
    to,
    subject,
    html
  }
  return mailGunClient.messages().send(emailData)
}

export const sendVerificationEmail = (to, fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://juber.com/verification/${key}/">here</a>`;
  return sendEmail(to, emailSubject, emailBody);
};