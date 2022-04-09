import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Employees = () => {
  let Div = styled.div`
    border: 1px solid #cecece;
    border-radius: 20px;
    background-color: #cecece;
    width: fit-content;
    margin: 20px auto;
    // padding: 50px;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  `;
  let P = styled.p`
    font-size: 25px;
    color: blue;
  `;
  let Header = styled.div`
    display: flex;
    flex-direction: row;
  `;

  let [dataArray, setDataArray] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch(`http://localhost:3004/Employee`)
      .then((res) => res.json())
      .then((res) => setDataArray(res))
      .catch((err) => console.log(err));
  }
  var showData = "";
  var displayData = (arr) => {
    showData = arr.map((old) => {
      return (
        <Header>
          <Div key={old.id} className="body">
            <div>Employee-Id: {old.id}</div>
            <br />
            <div>Name: {old.name}</div> <br />
            <div>Age: {old.age}</div> <br />
            <div> Gender: {old.gender}</div>
            <div>Department: {old.department}</div>
            <div> Salary: {old.salary}</div>
            <br />
            <Link to="/Employee/id">
              {" "}
              <button>View Details</button>
            </Link>
            <button>Edit Details</button>
          </Div>
        </Header>
      );
    });
  };
  displayData(dataArray);
  return (
    <>
      <div>{showData}</div>
    </>
  );
};
export default Employees;
