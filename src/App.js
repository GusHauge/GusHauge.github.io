import React from "react";
import { Navbar, Title, About, Experience, Projects } from "./components";

export default function App() {
  return (
    <div class="min-h-screen">
      <header class="sticky top-0 z-50">
        <Navbar />
      </header>
      <main class="relative">
        <div class="flex flex-col">
          <Title />
          <About />
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  );
}
