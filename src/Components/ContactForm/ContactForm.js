import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const req = axios.create({
  baseURL: 'https://cms-nail.dev.ftech.ai'
})

const ContactForm = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    req.post("/api/contacts", {
      data: inputs
    })
      .then(() => toast.success("Success!"))
      .catch(() => toast.error("Error!"))
    event.preventDefault();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          name="name"
          value={inputs.name}
          className="form-control"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={inputs.email}
          className="form-control"
          placeholder="Your Email"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          name="subject"
          value={inputs.subject}
          className="form-control"
          placeholder="Your Subject"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          value={inputs.message}
          className="form-control pt-[10px] min-h-[100px]"
          placeholder="Your Message"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-[15px]">
        <button type="submit" className="pink-btn title-text mt-5">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
