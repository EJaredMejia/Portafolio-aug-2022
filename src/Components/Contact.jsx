import React from "react";

const Contact = () => {
  return (
    <section id="contactMe" className="mt-5 pt-[3rem] bg-gray-100 pb-[3rem]">
      <h3 className="text-2xl border-b-4 w-fit mx-auto font-semibold border-gray-400">
        Contact me
      </h3>
      <form
        onSubmit={() => alert("Email sent successfully")}
        action="https://formsubmit.co/jaredmejia4440@gmail.com"
        method="POST"
        className="grid mx-auto gap-4 mt-5 w-[90%] max-w-[1300px] md:grid-cols-2"
      >
        {/*  HoneyPot  */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        <input type="hidden" name="_captcha" value="false" id="" />

        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <input
          name="Name"
          className="py-3 px-4 rounded-2xl border border-slate-700"
          type="text"
          placeholder="Name *"
        />
        <input
          name="email"
          className="py-3 px-4 rounded-2xl border border-slate-700"
          type="email"
          placeholder="Email address"
        />
        <input
          name="title"
          className="md:col-span-2  py-3 px-4 rounded-2xl border border-slate-700"
          type="text"
          placeholder="Title..."
        />
        <textarea
          name="message"
          className="md:col-span-2  py-3 px-4 rounded-2xl border border-slate-700"
          cols="30"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button className="md:col-span-2 rounded-3xl btn-animation inline-block border-2 border-slate-700 w-fit py-2 px-3 mx-auto go-to-btn hover:text-white">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
