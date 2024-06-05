import React from "react";
import { ImageBlurCard } from "./lib";
function App() {
  return (
    <div className="App">
      {" "}
      <ImageBlurCard
        src={
          "https://images.pexels.com/photos/9681179/pexels-photo-9681179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        text={"Prueba 2"}
      />
    </div>
  );
}

export default App;
