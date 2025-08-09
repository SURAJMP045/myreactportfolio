import React, { useState } from "react";
import "../assets/style/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          position: "bottom-center",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Error sending message", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <section id="contact">
      <h2>Get in touch</h2>
      <center>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </center>

      <ToastContainer />
    </section>
  );
};

export default Contact;