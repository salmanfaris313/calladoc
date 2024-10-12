"use client";
import Breadcrumpadmin from "@/app/ui/Breadcrumb/Breadcrumpadmin";
import Sidebar from "@/app/ui/Sidebar";
import Table from "@/app/ui/table/table";
import React, { useState } from "react";




function Enquiries() {

const [enquiries, Setenquiries] =useState([])

 

  async function fetchData() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch("/api/contact", requestOptions);
      const result = await response.json();
      Setenquiries(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const tabelHead = [
    {
      id: "ID",
      name: "Name",
      phonenumber: "Phone Number",
      gmail: "Gmail",
      service: "service",
      message: "Message",
    },
  ];

  

  return (
    <div>
      <div className="row">
        <Sidebar />
        <div className="col-md-10 bg-theme">
          <Breadcrumpadmin title="Enquiries" />
          <Table tabelHead={tabelHead} tableData={enquiries} />
        </div>
      </div>
    </div>
  );
}

export default Enquiries;
