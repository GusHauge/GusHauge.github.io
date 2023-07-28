import React from "react";
import { Navbar } from "./components";

export default function App() {
  return (
    <div class="min-h-screen">
      <header class="sticky top-0 z-50">
        <Navbar />
      </header>
      <main class="relative">
        <div class="flex flex-col">
          <div class="flex flex-col w-full h-[40rem] bg-indigo-950 space-y-10 items-center">
            <h1 class="text-6xl text-white mt-40">Gus Hauge</h1>
            <h2 class="text-lg text-white">
              Software Developer with a passion for solving problems
            </h2>
          </div>

          <div class="flex flex-col w-full h-[40rem] bg-slate-900 items-center space-y-12">
            <h1 class="text-6xl text-white mt-20">About Me</h1>
            <div class="flex items-center justify-center space-x-16 mb-24">
              <img
                src={require("./images/Bray_Frontal.jpg")}
                alt="Gus"
                class="rounded-lg h-80"
              />
              <p class="text-lg text-white max-w-2xl w-1/2">
                I am a senior at the University of Notre Dame pursuing a
                Bachelor of Arts in Computer Science and Theology, a unique
                combination that reflects my enthusiasm for both technology and
                pursuit of the common good. As a QuestBridge Scholar, a program
                that provides access to elite universities for students from
                low-income backgrounds, I have learned the importance of hard
                work and grit. I am extremely interested in machine learning,
                computer vision, data science, and web development. I love
                learning new skills to solve diverse problems and I hope to
                continue this as I kickstart my career.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
