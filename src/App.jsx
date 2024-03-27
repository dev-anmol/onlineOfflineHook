import { useEffect, useState } from "react";
import "./App.css";

function useOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}

function App() {
  const isOnline = useOnline();

  return (
    <>
      {isOnline ? <h1>Yes, you are online</h1> : <h1>sorry he is offline</h1>}
    </>
  );
}

export default App;
