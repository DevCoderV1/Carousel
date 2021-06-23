import React, { useState } from "react";

import "./App.css";

function App() {
  const [curTranslate, setTranslate] = useState(0);
  console.log(curTranslate);
  return (
    <div className="App">
      <div className="carousel">
        <div className="image_container">
          <div
            className="image"
            style={{
              transform: `translateX(${curTranslate}px)`,
              transition: "0.5s ease-in",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1586969593928-1c87c1f9c2ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
              alt="one"
            />
          </div>
          <div
            className="image"
            style={{
              transform: `translateX(${curTranslate}px)`,
              transition: "0.5s ease-in",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600790194169-d3affafaf726?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="two"
            />
          </div>
          <div
            className="image"
            style={{
              transform: `translateX(${curTranslate}px)`,
              transition: "0.5s ease-in",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="three"
            />
          </div>
          <div
            className="image"
            style={{
              transform: `translateX(${curTranslate}px)`,
              transition: "0.5s ease-in",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="four"
            />
          </div>
          <div className="left_btn">
            <button
              onClick={() => {
                setTranslate((prevSize) => prevSize - 500);
              }}
              className="left"
            >
              Prev
            </button>
          </div>
          <div className="right_btn">
            <button
              onClick={() => {
                setTranslate((prevSize) => prevSize + 500);
              }}
              className="right"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
