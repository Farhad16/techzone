import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="contact-us pb-5 mt-5">
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-md-5 px-5">
            <h2 className="font-weight-bold pb-3">
              Let us handle your <br /> project, professionally
            </h2>
            <p>
              <small>
                With well written codes, we build amazing apps for all
                platforms, <br /> mobile and web apps in general
              </small>
            </p>
          </div>
          <div className="col-md-7 text-white">
            <form action="">
              <input
                type="text"
                placeholder="Your email address"
                className="input-style pl-3 mb-3"
              />
              <br />
              <input
                type="text"
                placeholder="Your name / company's name"
                className="input-style pl-3 mb-3"
              />
              <br />
              <input
                type="text"
                placeholder="Your message"
                className="input-style textArea pl-3 mb-3"
              />
              <br />
              <button className="btn text-brand mt-2">Send</button>
            </form>
          </div>
        </div>
        <p className="text-center">
          <small>@Copyright orange labs {new Date().getFullYear()}</small>
        </p>
      </div>
    </section>
  );
};

export default Footer;
