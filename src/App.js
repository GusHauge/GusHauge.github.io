import React from "react";
import { Navbar } from "./components";

export default function App() {
  return (
    <div class="min-h-screen bg-indigo-950">
      <header class="sticky top-0 z-50">
        <Navbar />
      </header>
      <main class="relative">
        <div class="flex flex-col space-y-10 h-screen items-center">
          <h1 class="text-6xl text-white mt-40">Gus Hauge</h1>
          <h2 class="text-lg text-white">
            Software Developer with a passion for solving problems and the drive
            to get it done.
          </h2>
          <h2 class="text-lg text-white">
            (NOTE: Work in progress, check back soon for the finished product!)
          </h2>
        </div>
      </main>
    </div>
  );
}
