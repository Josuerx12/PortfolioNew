/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export type SendMessageCredentials = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

const useEmail = () => {
  async function send(credentials: SendMessageCredentials) {
    try {
      const res = await axios.post(
        "https://contact-by-email-portfolio.vercel.app/mail/send",
        credentials
      );

      return res.data.payload;
    } catch (error: any) {
      throw error.response.data.error;
    }
  }

  return { send };
};

export { useEmail };
