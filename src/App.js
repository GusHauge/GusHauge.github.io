import React from "react";
import { Navbar, Title, About, Experience } from "./components";

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
        </div>
      </main>
    </div>
  );
}
