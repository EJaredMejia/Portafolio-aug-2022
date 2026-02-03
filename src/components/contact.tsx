import { useForm } from "react-hook-form";

import {
  sendEmailSchema,
  sendServerEmail,
} from "@/server/email/controller/email.controller";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";

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
      loading: "sending email...",
      success: (data) => {
        return data;
      },
      error: "Error sending email, try again",
    });

    await promise;
    reset();
  };
  return (
    <section className="bg-gray-50  pb-24 dark:bg-gray-900" id="contactMe">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Have a project in mind? Let's talk and build something great
            together.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="mx-auto mt-16 grid max-w-3xl gap-4 md:grid-cols-2"
        >
          <input
            className="rounded-2xl border border-slate-700 bg-white px-4 py-3 dark:bg-gray-800 dark:text-white"
            type="text"
            placeholder="Name..."
            required
            {...register("name")}
          />
          <input
            {...register("email")}
            className="rounded-2xl border border-slate-700 bg-white px-4 py-3 dark:bg-gray-800 dark:text-white"
            type="email"
            placeholder="Email address"
            required
          />
          <input
            {...register("title")}
            className="rounded-2xl border border-slate-700 bg-white px-4 py-3 dark:bg-gray-800 dark:text-white md:col-span-2"
            type="text"
            placeholder="Title..."
            required
          />
          <textarea
            {...register("message")}
            className="rounded-2xl border border-slate-700 bg-white px-4 py-3 dark:bg-gray-800 dark:text-white md:col-span-2"
            cols={30}
            rows={10}
            placeholder="Message..."
            required
          />
          <button
            disabled={formState.isSubmitting}
            type="submit"
            className="mx-auto cursor-pointer inline-block rounded-3xl bg-pink px-8 py-3 font-semibold text-white transition-all hover:opacity-90 md:col-span-2"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
