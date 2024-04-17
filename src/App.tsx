import MyLinks from "./components/myLinks";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <MyLinks />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;
