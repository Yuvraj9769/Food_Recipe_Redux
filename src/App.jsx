import style from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className={`${style["app-container"]}`}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
