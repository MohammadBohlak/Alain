import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import GlobalStyles from "./styles/GlobalStyles";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import NavBar from "./components/common/navbar/NavBar";
import Footer from "./components/common/footer/Footer";
// import { HeadProvider } from "react-head";

function App() {
  return (
    <>
      {/* <HeadProvider> */}
        <GlobalStyles />
        <NavBar />

        <Footer />
      {/* </HeadProvider> */}
    </>
  );
}
export default App;
