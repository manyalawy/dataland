import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./index.scss";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Filter />
    </div>
  );
}

export default App;
