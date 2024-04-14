import React, { useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";
import { NavigationDots } from "../../components";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!/^.+$/.test(name)) {
      return toast("Please fill in your name", {
        position: "bottom-left",
        autoClose: 1000,
      });
    }
    if (!/^.+$/.test(email)) {
      return toast("Please fill in your email", {
        position: "bottom-left",
        autoClose: 1000,
      });
    }
    if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return toast("Please enter a valid email", {
        position: "bottom-left",
        autoClose: 1000,
      });
    }
    if (!/^.+$/.test(message)) {
      return toast("Please fill in your message", {
        position: "bottom-left",
        autoClose: 1000,
      });
    }
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.error("Error submitting the form:", err.message);
        setLoading(false);
        // Present an error message to the user or handle insufficient permissions
      });
  };

  return (
    <>
      <ToastContainer />
      <div id="contact" className={`app__container app__primarybg`}>
        <div className="app__placeholder"></div>
        <div className="app__wrapper app__flex">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`app__footer app__flex`}
          >
            <h2 className="head-text">
              Take a coffee <span>&</span> chat with me
            </h2>

            <div className="app__footer-cards">
              <div className="app__footer-card ">
                <img
                  loading="lazy"
                  src={images.email}
                  alt="marouane mahboub email"
                />
                <a
                  href="mailto:marouane.ma7boub@gmail.com"
                  style={{ color: "black" }}
                  aria-label={`Send email to me`}
                  className="p-text"
                >
                  marouane.ma7boub@gmail.com
                </a>
              </div>
              <div className="app__footer-card">
                <img
                  loading="lazy"
                  src={images.mobile}
                  alt="marouane mahboub phone"
                />
                <a
                  href="tel:+212706452165"
                  style={{ color: "black" }}
                  aria-label={`Call me`}
                  className="p-text"
                >
                  +212706452165
                </a>
              </div>
            </div>
            {!isFormSubmitted ? (
              <div className="app__footer-form app__flex">
                <div className="app__flex">
                  <input
                    className="p-text"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="app__flex">
                  <input
                    className="p-text"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <textarea
                    className="p-text"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                  />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>
                  {!loading ? "Send Message" : "Sending..."}
                </button>
              </div>
            ) : (
              <div>
                <h3 className="head-text">Thank you for getting in touch!</h3>
              </div>
            )}
            <div className="copyright">
              <p>&copy; 2024 Marouane Mahboub. All rights reserved.</p>
            </div>
          </motion.div>

          <div className="copyright"></div>
        </div>
        <NavigationDots active="contact" />
      </div>
    </>
  );
};

export default Footer;
