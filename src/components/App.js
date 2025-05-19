import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

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
    return <div>Loading...</div>;
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

export default App;
