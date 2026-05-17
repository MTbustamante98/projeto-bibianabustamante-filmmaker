import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/layout/header/Header";
import Footer from "./Componentes/layout/footer/Footer";
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/Sobre/Sobre";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contato from "./pages/Contato/Contato";
import NotFound from "./NotFound";
import ScrollToTop from "./Componentes/common/ScrollToTop";
import ImgScrollTop from "./Componentes/ImgScrollTop";
import useMedia from "./Hooks/useMedia";

function App() {
  const media = useMedia("(min-width: 1200px)");

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="xl:pt-30 min-h-screen bg-neutral-1 overflow-x-hidden">
          <main>
            {media && <ImgScrollTop />}
            <ScrollToTop />
            <Routes>
              {/* <Route path="/" element={<PaginaConvidativa />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
