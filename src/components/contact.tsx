import { useForm } from "react-hook-form";

import {
  sendEmailSchema,
  sendServerEmail,
} from "@/server/email/controller/email.controller";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";
import Section from "./section";

const contactSchema = sendEmailSchema.and(z.object({ name: z.string() }));

type FormData = z.infer<typeof contactSchema>;
const Contact = () => {
  const sendEmail = useServerFn(sendServerEmail);

  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
      title: "",
      name: "",
    },
  });

  const submitForm = async (data: FormData) => {
    const emailInfo = {
      title: data.title,
      email: data.email,
      message: `Name:${data.name}, Email: ${data.email}, Message: ${data.message}`,
    };

    const promise = sendEmail({ data: emailInfo });

    toast.promise(promise, {
      loading: "Sending message…",
      success: (data) => {
        return data;
      },
      error: "Message not sent. Check your connection and try again.",
    });

    await promise;
    reset();
  };
  const fieldClass =
    "mt-2 w-full rounded-md border border-line bg-field px-4 py-3 text-ink placeholder:text-muted/70 focus:border-pink-deep focus:outline-none";

  return (
    <Section id="contactMe" title="Contact" tone="band">
      <p className="max-w-[40ch] text-2xl leading-snug font-medium sm:text-3xl">
        Hiring for a remote role, or want to talk about a project? Send me a
        message and I'll reply by email.
      </p>
      <p className="mt-6 text-muted">
        Or find me on{" "}
        <a
          href="https://www.linkedin.com/in/jared-mejia-41b58a23a/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-ink underline decoration-pink decoration-2 underline-offset-6 hover:text-pink-deep"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/EJaredMejia"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-ink underline decoration-pink decoration-2 underline-offset-6 hover:text-pink-deep"
        >
          GitHub
        </a>
        .
      </p>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-12 grid max-w-3xl gap-5 md:grid-cols-2"
      >
        <label className="font-medium">
          Name
          <input
            className={fieldClass}
            type="text"
            autoComplete="name"
            required
            {...register("name")}
          />
        </label>
        <label className="font-medium">
          Email
          <input
            {...register("email")}
            className={fieldClass}
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="font-medium md:col-span-2">
          Subject
          <input
            {...register("title")}
            className={fieldClass}
            type="text"
            required
          />
        </label>
        <label className="font-medium md:col-span-2">
          Message
          <textarea
            {...register("message")}
            className={fieldClass}
            rows={7}
            required
          />
        </label>
        <div className="md:col-span-2">
          <button
            disabled={formState.isSubmitting}
            type="submit"
            className="cursor-pointer rounded-full bg-pink-deep px-7 py-3 font-semibold text-on-pink transition-colors hover:bg-ink hover:text-paper disabled:cursor-wait disabled:opacity-60"
          >
            {formState.isSubmitting ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
