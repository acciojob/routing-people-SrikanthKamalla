import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  let id = window.location.pathname.split("/").reverse()[0];
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${parseInt(id)}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
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
      <h1>User Details</h1>
      <p>
        <strong>Name: </strong>
        {userData.name}
      </p>
      <p>
        <strong>Username: </strong>
        {userData.username}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website}
      </p>
    </>
  );
};
export default UserDetails;
