import { React } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";
import NotFound from "./NotFound/NotFound"
import ScrollToTop from "./ScrollToTop";
import Communities from './Communities/Communities';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          <Route path="about" element={<About />}/>
          <Route path="communities" element={<Communities />} />
          <Route path="*" element ={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);