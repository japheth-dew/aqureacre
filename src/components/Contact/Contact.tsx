import React from "react";
import Header from "../Header/Header";

const Contact = () => {
  return (
    <div>
      <div className="lg:px-[4rem] md:p-[3rem] p-[1rem] ">
        <Header />
      </div>
      <div
      className="lg:px-[4rem] md:p-[3rem] p-[1rem] "
      
        style={{
          background:
            "url('https://img.freepik.com/premium-photo/contact-us-hand-man-holding-mobile-smartphone-with-mail-phone-email-chat-icon-cutomer-support-concept-blue-wide-banner_256259-2764.jpg?w=2000') no-repeat center center/cover",
        }}
      >
        <p className="">Contact Us</p>
        <span>
          Our fleet management services can help you optimize your operation,
          reduce lifcost, and keep your business moving.
        </span>
      </div>
      <div className="lg:px-[4rem] md:p-[3rem] p-[1rem] "></div>
    </div>
  );
};

export default Contact;
