import { useForm } from "react-hook-form";

import {
  sendEmailSchema,
  sendServerEmail,
} from "@/server/email/controller/email.controller";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useServerFn } from "@tanstack/start";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = sendEmailSchema.and(z.object({ name: z.string() }));

type FormData = z.infer<typeof contactSchema>;
const Contact = () => {
  const sendEmail = useServerFn(sendServerEmail);

  const { register, handleSubmit, reset } = useForm<FormData>({
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
    <section id="contactMe" className="mt-5 pt-[3rem] bg-gray-100 pb-[3rem]">
      <h3 className="text-2xl border-b-4 w-fit mx-auto font-semibold border-gray-400">
        Contact me
      </h3>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="grid mx-auto gap-4 mt-5 w-[90%] max-w-[1300px] md:grid-cols-2"
      >
        <input
          className="py-3 px-4 rounded-2xl border border-slate-700"
          type="text"
          placeholder="Name..."
          required
          {...register("name")}
        />
        <input
          {...register("email")}
          className="py-3 px-4 rounded-2xl border border-slate-700"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          {...register("title")}
          name="title"
          className="md:col-span-2  py-3 px-4 rounded-2xl border border-slate-700"
          type="text"
          placeholder="Title..."
          required
        />
        <textarea
          {...register("message")}
          name="message"
          className="md:col-span-2  py-3 px-4 rounded-2xl border border-slate-700"
          cols={30}
          rows={10}
          placeholder="Message..."
          required
        />
        <button
          type="submit"
          className="md:col-span-2 rounded-3xl btn-animation inline-block border-2 border-slate-700 w-fit py-2 px-3 mx-auto go-to-btn hover:text-white"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
