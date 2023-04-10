import React from 'react';
import { useState,useEffect } from 'react';

function Listview(props) {
    const [user, setUser] = useState([]);

    const fetchData = () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }
  
    useEffect(() => {
      fetchData();
    },[])
  
    return (
        <div className="container">
        <h1>User List</h1>
        <ul>
          {user && user.length > 0 && user.map((userObj, index) => (
              <li key={userObj.id}>{userObj.name}</li>
            ))}
        </ul>
        </div>
    );
  }

export default Listview;