import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = createBrowserRouter([
  {
    path: "/", //Route(url)
    element: <Home />, // render element
  },
  {
    path: "/movie/:id", // : 
    element: <Detail />,
  },
]);

export default App;
