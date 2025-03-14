

import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Home(){
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
      <hr />
      <a href="/about">[ about ]</a>
      <hr />
      <span>home</span>
    </div>
  )
}
function About(){
  return (
    <div>
      <h1 className="text-3xl font-bold">About</h1>
      <hr />
      <a href="/">[ home ]</a>
      <hr />
      <span>About123</span>
    </div>
  )
}

export default function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}
