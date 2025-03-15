import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Kirish from "./pages/kirish/Kirish";
import Savatcha from "./pages/savatcha/Savatcha";
import Sevimlilar from "./pages/sevimlilar/Sevimlilar";
import SingleRoute from "./pages/singleRoute/SingleRoute";
import Taqqoslash from "./pages/taqqoslash/Taqqoslash";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taqqoslash" element={<Taqqoslash />} />
        <Route path="/sevimlilar" element={<Sevimlilar />} />
        <Route path="/savatcha" element={<Savatcha />} />
        <Route path="/kirish" element={<Kirish />} />
        <Route path="/product/:id" element={<SingleRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
