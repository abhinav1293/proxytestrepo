import React, { useEffect, useState } from "react";
import "./App.css"; // Import your CSS file for styling

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/users/2")
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="app-container">
      {data ? (
        <div className="user-info">
          <h1>User Informatin</h1>
          <img src={data.avatar} alt="User Avatar" className="avatar" />
          <p>
            <strong>Name:</strong> {data.first_name} {data.last_name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
