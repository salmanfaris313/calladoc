'use client'

import Image from "next/image";
import React from "react";
import  { useState } from "react";

export default function ContactForm() {

  const [name , Setname] = useState("")
  const [gmail, SetGmail]= useState("")
  const [phoneNumber, SetPhoneNumber] =useState("")
  const [service, SetService] =useState("")
  const [message , SetMessage] =useState("")



   function submitform() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name:name,
      email: gmail,
      phone_number: phoneNumber,
      service: service,
      message: message,
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
        if(result.id){
        alert("Sucsess")
        }
        console.log(result)
        
      })
      .catch((error) => {
        
        alert("error")
      
      });
  }

  return (
    <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
      <div className="row">
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Name</label>
          <input type="text" className="cs_form_field" placeholder="Name" onChange={(event)=>{
            Setname(event.target.value)
          }} />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Email</label>
          <input
            type="email"
            className="cs_form_field"
            placeholder="Email Address"
            onChange={(event) => {
              SetGmail(event.target.value)
            }}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Phone Number</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Phone Number"
            onChange={(event) => {
              SetPhoneNumber(event.target.value)
            }}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Service</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Service"
            onChange={(event) => {
              SetService(event.target.value)
            }}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Message</label>
          <textarea
            cols={30}
            rows={10}
            className="cs_form_field"
            placeholder="Write something..."
            defaultValue={""}
            onChange={(event)=>{
              SetMessage(event.target.value)
            }}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <div className="cs_height_18" />
          <button className="cs_btn cs_style_1" onClick={()=>{submitform()}} >
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
    </div>
  );
}
