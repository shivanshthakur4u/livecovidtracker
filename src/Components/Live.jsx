import React from "react";

const Live = () => {
  return (
    <>
      <div className="stage">
        <div className="wrapper">
          <div className="slash"></div>
          <div className="sides">
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
          <div className="text">
            <div className="text--backing">🔴LIVE</div>
            <div className="text--left">
              <div className="inner">🔴LIVE</div>
            </div>
            <div className="text--right">
              <div className="inner">🔴LIVE</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Live;
