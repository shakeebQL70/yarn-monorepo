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

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sed velit, earum temporibus cum unde dicta placeat doloribus, qui illo iusto enim cupiditate omnis error quae nobis aliquid nisi alias.
      <Suspense fallback="Loading...">
        <OPMS />
        <UI />
      </Suspense>
    </div>
  );
}

export default App;
