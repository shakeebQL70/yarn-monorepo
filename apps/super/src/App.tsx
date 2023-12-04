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

  
      <Suspense fallback="Loading...">
        <OPMS />
        <UI />
      </Suspense>
    </div>
  );
}

export default App;
