import React from "react";

function Table({ tabelHead, tableData }) {
  console.log(tabelHead);
  return (
    <div className="mt-4">
      <table className="table table-bordered">
        <thead>
          {tabelHead.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="col">{item.id}</th>
                <th scope="col">{item.name}</th>
                <th scope="col">{item.phonenumber}</th>
                <th scope="col">{item.gmail}</th>
                <th scope="col">{item.service}</th>
                <th scope="col">{item.message}</th>
              </tr>
            );
          })}
        </thead>
        <tbody>
            {tableData.map((item,index) =>{
                return(
                 <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.email}</td>
                    <td>{item.service}</td>
                    <td>{item.message}</td>
                </tr>
                )
            })}
          
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;
