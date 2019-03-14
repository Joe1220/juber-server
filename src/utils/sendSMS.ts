// import Twilio from "twilio";
import { config, Group } from "coolsms-sdk-v4";
import coolsmsConfig from "../config/smsConfig"

// const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// export const sendSMS = (to: string, body: string) => {
//   return twilioClient.messages.create({
//     body,
//     to,
//     from: process.env.TWILIO_PHONE
//   });
// };

export const coolsmsClient = config.init({
  apiKey: coolsmsConfig.apiKey,
  apiSecret: coolsmsConfig.apiSecret
});

export const sendSMS = async(to: string, text: string, agent={}) => {
  const message = {
    to,
    text,
    type: coolsmsConfig.type,
    from: coolsmsConfig.from
  }
  try { 
    return await Group.sendSimpleMessage(message, agent)
  } catch(error) {
    console.log('sms error: ', error.message)
  }
}

export const sendVerificationSMS = (to: string, key: string) => 
  sendSMS(to, `Your verification key is: ${key}`);