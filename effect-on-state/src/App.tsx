import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState<"red" | "blue">("red");

  const handleMessage = () => setMessage("Hello from React!");
  const handleLikes = () => setLikes(likes + 1);
  const handleColor = () => setColor(color === "red" ? "blue" : "red");

  useEffect(() => {
    if (message !== "") {
      console.log(message);
    }
  }, [message]);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  useEffect(() => {
    console.log(`Current color is ${color}`);
  }, [color]);

  return (
    <div>
      <h2>Message Logger</h2>
      <button onClick={handleMessage}>Send Message</button>

      <h2>Like Counter</h2>
      <button onClick={handleLikes}>Like</button>

      <h2>Color Box</h2>
      <button onClick={handleColor}>Change Color</button>
      <div style={{ width: 100, height: 100, backgroundColor: color }}>
        Color Box
      </div>
    </div>
  );
}

export default App;
