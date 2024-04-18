import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200 fixed flex flex-wrap justify-center font-semibold text-yellow-100"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2 font-medium"
      >
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-full">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            RED
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            GREEN
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            BLUE
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            YELLOW
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            PINK
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setColor("black");
            }}
          >
            BLACK
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              setColor("white");
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
