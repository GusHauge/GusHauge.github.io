import React from "react";
import "./App.css";
import { Navbar } from "./components";

export default function App() {
  return (
    <div class="min-h-screen bg-indigo-950">
      <header class="sticky top-0 z-50">
        <Navbar />
      </header>
    </div>
  );
}
