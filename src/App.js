import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Featured from "./components/Featured";
import PizzaList from "./components/PizzaList";
import Id from "./product/Id";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <title>Pizza Restaurent</title>
      <Routes>
        {/* Main Page Layout */}
        <Route path="/" element={<Layout />} />

        {/* Featured Section */}
        <Route path="/featured" element={<Featured />} />

        {/* Pizza List Page */}
        <Route path="/pizza-list" element={<PizzaList />} />

        {/* Pizza Detail Page (Dynamic Route) */}
        <Route path="/pizza/:id" element={<Id />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
