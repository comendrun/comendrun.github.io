import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React, { SyntheticEvent } from "react";
import SocialLinks from "../navbar/SocialLinks";

type Values = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const formSubmitHandler = (
    values: Values,
    {
      setSubmitting,
      setErrors,
      setFieldError,
      resetForm,
    }: FormikHelpers<Values>
  ) => {
    console.log("values", values);
    const { name, email, message } = values;
    if (!name) setFieldError("name", "Please enter your name!");

    if (!email) setFieldError("email", "Please enter your email!");

    if (email && name) {
      setSubmitting(true);
      const subject = `A message from ${values.name}`;
      const encodedMessage = encodeURIComponent(`
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `);
      const recipient = "kamran.rouhani@oulook.com";
      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${encodedMessage}`;

      window.location.href = mailtoLink;
      console.log("email is being processed");
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={formSubmitHandler}
      >
        <Form className="mb-20 flex flex-col gap-4 ">
          <Field
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full h-5 border-2 border-black p-5 rounded-sm "
          />
          <ErrorMessage name="name">
            {(msg) => <p className="text-red-600 text-xs">{msg}</p>}
          </ErrorMessage>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="w-full h-5 border-2 border-black p-5 rounded-sm "
          />
          <ErrorMessage name="email">
            {(msg) => <p className="text-red-600 text-xs">{msg}</p>}
          </ErrorMessage>
          <Field
            rows={5}
            id="name"
            name="message"
            placeholder="Say Something ..."
            className="w-full border-2 border-black p-5 rounded-sm "
          />
          <ErrorMessage name="message">
            {(msg) => <p className="text-red-600 text-xs">{msg}</p>}
          </ErrorMessage>
          <div className="flex gap-4 xl:gap-8">
            <button className="px-8 py-2 border-2 border-black text-black  relative group  hover:text-white hover:bg-black hover:border-white duration-300 transition-all hover:shadow-[10px_10px_0px_0px_black] w-max font-bold min-w-max hover:font-extrabold ">
              <span className="relative">Get in Touch</span>
            </button>
            {/* social links again */}
            <SocialLinks className="hidden xl:flex lg:justify-between xl:w-full items-center lg:gap-2  "/>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
{
  /* <form onSubmit={formSubmitHandler} className="mb-20 flex flex-col gap-4">
<input
  className="w-full h-5 border-2 border-black p-5 rounded-sm "
  type="text"
  name="name"
  placeholder="Your Name"
/>
<input
  className="w-full h-5 border-2 border-black p-5 rounded-sm "
  type="text"
  name="email"
  placeholder="Email"
/>
<input
  className="w-full h-5 border-2 border-black p-5 rounded-sm "
  type="text"
  name="message"
  placeholder="Company (If applicable)"
/>
<textarea
  rows={4}
  className="w-full border-2 border-black p-5 rounded-sm "
  placeholder="Say Something ..."
></textarea>

<button className="px-8 py-2 border-2 border-black text-black  relative group  hover:text-white hover:bg-black hover:border-white duration-300 transition-all hover:shadow-[10px_10px_0px_0px_black] w-max font-bold hover:font-extrabold ">
  <span className="relative">Get in Touch</span>
</button>
</form> */
}
