import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const token = useSelector((e) => e.loginDetails);

  useEffect(() => {}, []);
  return <div>{token}</div>;
};

export default Home;
