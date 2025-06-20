import nodemailer from "nodemailer";

export const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASSWORD,
  },
});
