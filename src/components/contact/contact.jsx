import React, { Component } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./index.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    showMessage: false,
  };

  onChangeName = (e) => this.setState({ name: e.target.value });
  onChangeEmail = (e) => this.setState({ email: e.target.value });
  onChanageMessage = (e) => this.setState({ message: e.target.value });

  onFormSubmit = (e) => {
    e.preventDefault();
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScJdNOBKwxA10XGjvo8gRyZrLRIXr9TZrRD8EeSYIjRwlbejg/formResponse";

    const formData = new FormData();
    formData.append("entry.2051166233", this.state.name);
    formData.append("entry.494199947", this.state.email);
    formData.append("entry.1680435615", this.state.message);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        this.setState({ name: "", email: "", message: "", showMessage: true });
        setTimeout(() => this.setState({ showMessage: false }), 8000);
      })
      .catch((err) => console.error("Form submission error:", err));
  };

  render() {
    const { name, email, message, showMessage } = this.state;

    return (
      <>
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-container" id="contact">
        <div className="contact-left">
          <h2>Have a project or idea?</h2>
          <p>
            Let's collaborate! Whether it's a website, an app, or something innovative,
            feel free to reach out. I'm always open to exciting new ideas and discussions.
          </p>

          <div className="contact-info">
            <p><strong>📞 Phone:</strong> +91 8318067252</p>
            <p><strong>📧 Email:</strong> tanmaydwivedi6191@gmail.com</p>
          </div>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com/in/tanmaydwivedi9161" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Tanmaydwivedi9161" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        <div className="contact-right">
          <h2>Send a Message</h2>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" placeholder="Your Name" required value={name} onChange={this.onChangeName} />
            <input type="email" placeholder="Your Email" required value={email} onChange={this.onChangeEmail} />
            <textarea placeholder="Your Message" rows="5" required value={message} onChange={this.onChanageMessage}></textarea>
            <button type="submit">Send</button>
          </form>
          {showMessage && <p className="success-msg">Message sent successfully! We will connect you soon.</p>}
        </div>
      </div>
      </>
    );
  }
}

export default Contact;
