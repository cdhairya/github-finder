import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="bg-red-500 container px-3 mx-auto pb-12">Content</main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
