import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [inputData, setInputData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setInputData(data);
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {inputData.map((ele, index) => (
          <li key={ele.id}>
            <Link to={`/users/${ele.id}`}>{ele.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
