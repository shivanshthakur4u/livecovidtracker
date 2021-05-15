import React, { useEffect, useState } from "react";
import "../styles.css";
const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div class="stage">
        <div class="wrapper">
          <div class="slash"></div>
          <div class="sides">
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
          </div>
          <div class="text">
            <div class="text--backing">🔴LIVE</div>
            <div class="text--left">
              <div class="inner">🔴LIVE</div>
            </div>
            <div class="text--right">
              <div class="inner">🔴LIVE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading">
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      </div>

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
            <h2>TOTAL RECOVERED</h2>
            <h2>{data.recovered}</h2>
          </div>
        </div>

        <div className="card c">
          <span></span>
          <div className="content">
            <h2>TOTAL CONFIRMED</h2>
            <h2>{data.confirmed}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card d">
          <span></span>
          <div className="content">
            <h2>TOTAL DEATH</h2>
            <h2>{data.deaths}</h2>
          </div>
        </div>

        <div className="card e">
          <span></span>
          <div className="content">
            <h2>TOTAL ACTIVE</h2>
            <h2>{data.active}</h2>
          </div>
        </div>

        <div className="card f">
          <span></span>
          <div className="content">
            <h2> LAST UPDATED</h2>
            <h2>{data.lastupdatedtime}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
