import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch("http://backend-service:3000/api") // Kubernetes service for backend
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Data from Backend: {backendData ? backendData.message : "Loading..."}</p>
    </div>
  );
}

export default App;
