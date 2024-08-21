import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-12">
      <h1 className="mb-5 uppercase">Contact Us</h1>
      <section className="my-10 flex justify-between w-4/5">
        <div>
          <address className="mb-5">
            3251 17th St #170 <br /> Sarasota, FL 34235
          </address>
          <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          <p className="text-blue-500 hover:text-gray-400 cursor-pointer">
            <a href="tel:+11112228888"> (111) 222-8888</a>
          </p>
          <button className="uppercase bg-black text-white p-3 text-xs mt-5">
            View Hours
          </button>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-10 p-10">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="p-2 border border-b-4"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-2 border border-b-4"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="p-2 border border-b-4"
            />
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              className="p-2 border border-b-4"
            />
          </div>
          <button className="uppercase bg-black text-white p-3 text-xs absolute right-56">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
