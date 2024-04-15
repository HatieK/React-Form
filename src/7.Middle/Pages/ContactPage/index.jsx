import React from "react";
import ContactForm from "./ContactForm";
import ContactTitle from "./ContactTitle";
import ContactSidebar from "./ContactSidebar";

const ContactPage = () => {
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <ContactTitle />
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <ContactSidebar />
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
