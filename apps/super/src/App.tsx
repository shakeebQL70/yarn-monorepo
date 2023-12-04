import React, { Suspense } from "react";
import "./App.css";

//@ts-ignore
const OPMS = React.lazy(() => import("opms/App"));
//@ts-ignore
const UI = React.lazy(() => import("ui/App"));

function App() {
  return (
    <div className="App">
      Host Application Changes

      changes again on super app

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fuga. Corporis quod expedita officia non provident. Fugiat magnam possimus id minima eius ut, sint dicta magni aspernatur totam deleniti at!
      <Suspense fallback="Loading...">
        <OPMS />
        <UI />
      </Suspense>
    </div>
  );
}

export default App;
