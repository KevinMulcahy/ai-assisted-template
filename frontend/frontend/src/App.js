import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(""); // Store backend response

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello") // Flask endpoint
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>  {/* Display backend message */}
    </div>
  );
}

export default App;
