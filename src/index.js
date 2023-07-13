import { React } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound"
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element ={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);