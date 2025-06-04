import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGlobe,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const iconSize = 24;

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={iconSize} className="text-yellow-500" />,
      title: "ADDRESS",
      value: "Bengaluru, India",
    },
    {
      icon: <FaPhone size={iconSize} className="text-yellow-500" />,
      title: "CONTACT NUMBER",
      value: "+91-9019781278",
    },
    {
      icon: <FaPaperPlane size={iconSize} className="text-yellow-500" />,
      title: "EMAIL ADDRESS",
      value: "mdamrkj99@gmail.com",
    },
    {
      icon: <FaGlobe size={iconSize} className="text-yellow-500" />,
      title: "DOWNLOAD RESUME",
      value: (
        <a
          href="../assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="text-yellow-400 underline"
        >
          Click Here
        </a>
      ),
    },
  ];

  const socialIcons = [
    { icon: <FaYoutube size={iconSize} />, url: "https://youtube.com", label: "YouTube" },
    { icon: <FaLinkedin size={iconSize} />, url: "https://www.linkedin.com/in/mohammad-amir-khan", label: "LinkedIn" },
    { icon: <FaTwitter size={iconSize} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaFacebook size={iconSize} />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram size={iconSize} />, url: "https://instagram.com", label: "Instagram" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xjkwzklg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setShowForm(false);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 text-center relative">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Contact Me</h2>
      <p className="text-6xl font-black text-gray-900 opacity-10 absolute w-full top-[5.5rem] left-0 z-0">
        Contact
      </p>
      <p className="text-gray-400 mt-4 relative z-10">
        Below are the details to reach out to me!
      </p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12 relative z-10">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">{item.icon}</div>
            <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
            <p className="text-sm text-gray-400">{item.value}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold">Have a Question?</h3>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setMessage(null);
            setError(null);
          }}
          className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition"
        >
          CLICK HERE
        </button>
      </div>

      {/* Contact Form */}
      {showForm && (
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mt-10 flex flex-col gap-6 bg-zinc-900 p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
        >
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            aria-required="true"
            disabled={loading}
            className="bg-zinc-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            aria-required="true"
            disabled={loading}
            className="bg-zinc-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            aria-required="true"
            disabled={loading}
            className="bg-zinc-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />

          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md transition ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      )}

      {/* Social Icons */}
      <div className="mt-10 text-gray-400">
        <p className="mb-3">Find me on</p>
        <div className="flex justify-center gap-4">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
