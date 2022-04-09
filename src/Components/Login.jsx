import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Action";

const Login = () => {
  let LoginWrapper = styled.div`
    text-align: center;
    margin: 5px;
  `;
  let Input = styled.input`
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid grey;
  `;

  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const [token, setToken] = useState("");
  console.log(token);
  let handleChange = (e) => {
    let { value, name } = e.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const redirect = useNavigate();
  function GetResponse() {
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        !res.error ? dispatch(login(res.token)) : alert("something is wrong");

        !res.error && redirect("/");
      });
  }

  return (
    <LoginWrapper>
      <input
        name="username"
        type="text"
        value={data.username}
        placeholder="UserName"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="password"
        type="password"
        value={data.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <br />
      <Button secondary onClick={GetResponse}>
        Sign In
      </Button>
    </LoginWrapper>
  );
};

export default Login;
