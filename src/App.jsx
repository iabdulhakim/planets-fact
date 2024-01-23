import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: "Mercury",
        children: [
          {
            path: "overview",
            element: "Overview",
          },
          {
            path: "structure",
            element: "Internal Structure",
          },
          {
            path: "geology",
            element: "Surface Geology",
          },
        ],
      },
      {
        path: "venus",
        element: "Venus",
        children: [
          {
            path: "overview",
            element: "",
          },
          {
            path: "structure",
            element: "Internal Structure",
          },
          {
            path: "geology",
            element: "Surface Geology",
          },
        ],
      },
      {
        path: "earth",
        element: "Earth",
      },
      {
        path: "mars",
        element: "Mars",
      },
      {
        path: "jupiter",
        element: "Jupiter",
      },
      {
        path: "saturn",
        element: "Saturn",
      },
      {
        path: "uranus",
        element: "Uranus",
      },
      {
        path: "neptune",
        element: "neptune",
      },
    ],
  },
]);

function App() {
  return ( 
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div> 
  );
}

export default App