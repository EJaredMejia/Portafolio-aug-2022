import { createServerFn } from "@tanstack/start";
import { z } from "zod";
import { emailTransporter } from "../utils/transporter.utils";

import { getTestMessageUrl } from "nodemailer";

export const sendEmailSchema = z.object({
  email: z.string().email(),
  title: z.string(),
  message: z.string(),
});

export const sendServerEmail = createServerFn({ method: "POST" })
  .validator(sendEmailSchema.parse)
  .handler(async ({ data }) => {
    const msg = {
      from: data.email,
      to: process.env.EMAIL_HOST,
      subject: data.title,
      text: data.message,
    };

    console.log(msg);

    // send mail with defined transport object
    const info = await emailTransporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", getTestMessageUrl(info));

    return "Email sent successfully";
  });
