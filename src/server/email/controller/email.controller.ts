import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";
import { WorkerMailer } from "worker-mailer";
import { z } from "zod";

export const sendEmailSchema = z.object({
  email: z.email(),
  title: z.string(),
  message: z.string(),
});

export const sendServerEmail = createServerFn({ method: "POST" })
  .validator(sendEmailSchema)
  .handler(async ({ data }) => {
    const mailbox = env.EMAIL_HOST;
    const password = env.EMAIL_PASSWORD;

    if (!mailbox || !password) {
      throw new Error("Email is not configured");
    }

    await WorkerMailer.send(
      {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        authType: "plain",
        credentials: {
          username: mailbox,
          password,
        },
      },
      {
        from: mailbox,
        to: mailbox,
        reply: data.email,
        subject: data.title,
        text: data.message,
      },
    );

    return "Email sent successfully";
  });
