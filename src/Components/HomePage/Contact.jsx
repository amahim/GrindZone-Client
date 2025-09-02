import React from "react";

const Contact = () => (
  <section id="contact" className="py-12 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <form className="max-w-md mx-auto flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 border rounded"
        required
      />
      <textarea
        placeholder="Your Message"
        className="p-2 border rounded"
        rows="4"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
