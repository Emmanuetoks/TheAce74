/* eslint-disable react/prop-types */
import { useRef } from "react";
import axios from "axios";

function Contact({ title, icon, handleOpenMenu }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const telRef = useRef(null);
  const budgetRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const [name, email, phone, budget, message] = [
      nameRef.current.value,
      emailRef.current.value,
      telRef.current.value,
      budgetRef.current.value,
      messageRef.current.value,
    ];
    axios
      .post("https://aceserver.onrender.com/contact", {
        name,
        email,
        phone,
        budget,
        message,
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  return (
    <section
      className="contact"
      aria-label="contact"
      id="contact"
      onClick={() => handleOpenMenu(false)}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>

      <h2 className="contact__heading">
        Ready to embark on this adventure together? Let&apos;s make some{" "}
        <span>frontend magic!</span>
      </h2>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Full Name <span className="important">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            required
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email Address <span className="important">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            required
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="tel">
            Phone Number <span className="optional">(optional)</span>
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Your phone number"
            ref={telRef}
          />
        </div>
        <div>
          <label htmlFor="budget">
            Budget <span className="optional">(optional)</span>
          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            inputMode="number"
            placeholder="Your budget in dollars"
            ref={budgetRef}
          />
        </div>
        <div>
          <label htmlFor="message">
            Message <span className="important">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write your message here..."
            required
            ref={messageRef}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
