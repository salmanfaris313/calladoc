import React from "react";

function Card({ data }) {

  return (
    <div className="row">
      {data.map((item, index) => {
        return(
            <div className="col-md-3" key={index}>
            <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg text-center" >
          <h2 className="cs_iconbox_title">{item.title}</h2>
          <p className="cs_iconbox_subtitle mb-0">{item.Count}</p>
        </div>
        </div>
        )
        
      })}
      
    </div>
  );
}

export default Card;
