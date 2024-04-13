import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import ErrorMsg from "./components/ErrorMsg.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Readmore from "./components/Readmore.jsx";
import Addrecipy from "./components/Addrecipy.jsx";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/RecipeDetails",
    element: (
      <>
        <Header /> <RecipeDetails /> <Footer />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Header /> <About /> <Footer />
      </>
    ),
  },
  {
    path: "/RecipeList",
    element: (
      <>
        <Header /> <RecipeList /> <Footer />
      </>
    ),
  },
  {
    path: "/Readmore/:id",
    element: (
      <>
        <Header /> <Readmore /> <Footer />
      </>
    ),
  },
  {
    path: "/Addrecipy",
    element: (
      <>
        <Header /> <Addrecipy /> <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header /> <ErrorMsg /> <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
