import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="card a">
          <span></span>
          <div className="content">
            <h2>OUR COUNTRY</h2>
            <h2>INDIA</h2>
          </div>
        </div>
        <div className="card b">
          <span></span>
          <div className="content">
            <h2>TOTAL CONFIRMED CASES</h2>
            <h2>{props.confirm}</h2>
          </div>
        </div>
        <div className="card c">
          <span></span>
          <div className="content">
            <h2>TOTAL ACTIVE CASES</h2>
            <h2>{props.active}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card d">
          <span></span>
          <div className="content">
            <h2>TOTAL RECOVERED</h2>
            <h2>{props.recover}</h2>
          </div>
        </div>
        <div className="card e">
          <span></span>
          <div className="content">
            <h2>TOTAL DEATHS</h2>
            <h2>{props.death}</h2>
          </div>
        </div>
        <div className="card f">
          <span></span>
          <div className="content">
            <h2>DATA LAST UPDATED</h2>
            <h2>{props.updated}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
