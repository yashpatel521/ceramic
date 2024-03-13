import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Lodaer from "./components/Loader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <Lodaer />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
