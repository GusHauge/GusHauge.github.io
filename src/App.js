import React from "react";
import {
  Navbar,
  Title,
  About,
  Experience,
  Projects,
  Contact,
} from "./components";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black text-white">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative">
        <div className="flex flex-col">
          <Title />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
