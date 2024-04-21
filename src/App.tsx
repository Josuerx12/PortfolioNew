import ButtonTop from "./components/buttonTop";
import Footer from "./components/footer";
import MyLinks from "./components/myLinks";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <MyLinks />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ButtonTop />
    </div>
  );
};

export default App;
