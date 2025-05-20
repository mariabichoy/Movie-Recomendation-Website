import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Css from "./Contact.module.css";

const Contact = () => {
  const form = useRef(); 

  const Products = [
    {
      id: 1,
      title: "Contact Us",
      descraption:
        "We consider all the drivers of change gives you the components you need to change to create a truly happens.",
    },
  ];

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_zf83kyi", 
        "template_wvzfcbg", 
        form.current, 
        "U51JX3NK6WbbQza04" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Something went wrong.");
          console.log(error.text);
        }
      );
  };
 

  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {Products?.map((r) => (
            <div className={Css.text} key={r.id}>
              <h3>{r.title}</h3>
              <p>{r.descraption}</p>
            </div>
          ))}
          <div className={Css.card}>
            <form ref={form} onSubmit={sendEmail}> 
              <div className={Css.email}>
                <div className={Css.name}>
                  <label htmlFor="name">Name</label> <br />
                  <input
                    id="name"
                    type="text"
                    name="name" 
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className={Css.gmail}>
                  <label htmlFor="Email">Email</label> <br />
                  <input
                    type="email"
                    name="email" 
                    id="Email"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
              <label htmlFor="Subject">Subject</label>
              <input
                type="text"
                name="subject" 
                placeholder="Write a subject"
                id="Subject"
                required
              />
              <label htmlFor="Message">Message</label>
              <textarea
                placeholder="Write your message"
                name="message" 
                id="Message"
                cols="30"
                rows="10"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
