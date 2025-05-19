import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setInputData(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </>
  );
};

export default UserList;
