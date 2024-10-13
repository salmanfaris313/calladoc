'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // Track status (success or error)

  function resetForm() {
    setName("");
    setGmail("");
    setPhoneNumber("");
    setService("");
    setMessage("");
  }

  function submitform() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      email: gmail,
      phone_number: phoneNumber,
      service,
      message,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/contact", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.id) {
          setStatus("success");
          resetForm();
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  }

  return (
    <div className="container mt-5">
      <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30 p-4">
        <div className="row">
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Name</label>
            <input
              type="text"
              className="cs_form_field form-control"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Email</label>
            <input
              type="email"
              className="cs_form_field form-control"
              placeholder="Email Address"
              value={gmail}
              onChange={(event) => setGmail(event.target.value)}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Phone Number</label>
            <input
              type="text"
              className="cs_form_field form-control"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
     
          <div className="col-lg-12">
  <label className="cs_input_label cs_heading_color">Service</label>
  <select
    className="cs_form_field form-control"
    value={service}
    onChange={(event) => setService(event.target.value)}
  >
    <option value="">Select a Service</option>
    <option value="Primary Care Virtual Consultation">Primary Care Virtual Consultation</option>
    <option value="Lifestyle Management Services">Lifestyle Management Services</option>
  </select>
  <div className="cs_height_42 cs_height_xl_25" />
</div>

          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Message</label>
            <textarea
              cols={30}
              rows={5}
              className="cs_form_field form-control"
              placeholder="Write something..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-12">
            <div className="cs_height_18" />
            <button className="cs_btn cs_style_1 btn btn-primary" onClick={submitform}>
              <span>Submit</span>
              <i>
                <Image
                  src="/images/icons/arrow_white.svg"
                  alt="Icon"
                  height={11}
                  width={15}
                />
                <Image
                  src="/images/icons/arrow_white.svg"
                  alt="Icon"
                  height={11}
                  width={15}
                />
              </i>
            </button>
          </div>
        </div>

        {/* Bootstrap Alert Messages */}
        <div className="mt-4">
          {status === "success" && (
            <div className="alert alert-success" role="alert">
         Your submission was successful!
            </div>
          )}
          {status === "error" && (
            <div className="alert alert-danger" role="alert">
              There was an error submitting the form. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
