import React, { useEffect, useState } from "react";
import "../styles.css";
import Live from "./Live";
import Heading from "./Heading";
import CardA from "./Card";
import Para from "./copyright";
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
      <Live />
      <Heading />
      <CardA
        confirm={data.confirmed}
        active={data.active}
        recover={data.recovered}
        death={data.deaths}
        updated={data.lastupdatedtime}
      />
      <Para />
    </>
  );
};

export default Covid;
