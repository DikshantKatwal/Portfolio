import React from "react";
import { routes } from "./routes";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(routes);

function App() {

  return (
    <>
      <React.Suspense fallback="Loading">
        <RouterProvider router={router} />
      </React.Suspense>
    </>
  );
}

export default App;
