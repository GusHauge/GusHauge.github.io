import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const Navbar = () => {
  const [menuState, setMenuState] = useState("hidden");
  const [fade, setFade] = useState(false);

  const handleMenu = () => {
    if (fade) {
      setTimeout(() => setMenuState("hidden"), 300);
      setFade(false);
    } else {
      setMenuState("flex-col");
      setFade(true);
    }
  };

  return (
    <div className="flex justify-between bg-indigo-900 items-center h-12 w-full">
      <div className="shrink-0 mx-6">
        <img
          src="/images/Gus_logo.png"
          alt="GitHub"
          className="w-8 rounded-full"
        />
      </div>

      <div className="flex flex-col items-center relative sm:hidden">
        <button
          onClick={() => {
            handleMenu();
          }}
          className="transition-colors rounded-md duration-300 delay-100 hover:bg-indigo-500"
        >
          <Bars3Icon className="h-11" />
        </button>
        <div
          className={`absolute mt-11 items-center justify-center my-auto transition-all duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`${menuState}  bg-indigo-900`}>
            <button
              className="h-10 w-28 transition-colors duration-300 delay-100 hover:bg-indigo-500"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </button>
            <button
              className="h-10 w-28 transition-colors duration-300 delay-100 hover:bg-indigo-500"
              onClick={() => document.getElementById("about").scrollIntoView()}
            >
              About
            </button>
            <button
              className="h-10 w-28 transition-colors duration-300 delay-100 hover:bg-indigo-500"
              onClick={() =>
                document.getElementById("experience").scrollIntoView()
              }
            >
              Experience
            </button>
            <button
              className="h-10 w-28 transition-colors duration-300 delay-100 hover:bg-indigo-500"
              onClick={() =>
                document.getElementById("projects").scrollIntoView()
              }
            >
              Projects
            </button>
            <button
              className="h-10 w-28 transition-colors duration-300 delay-100 hover:bg-indigo-500"
              onClick={() =>
                document.getElementById("contact").scrollIntoView()
              }
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="hidden h-12 sm:flex justify-center space-x-3 mx-auto font-semibold">
        <button
          className="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </button>
        <button
          className="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("about").scrollIntoView()}
        >
          About
        </button>
        <button
          className="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("experience").scrollIntoView()}
        >
          Experience
        </button>
        <button
          className="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("projects").scrollIntoView()}
        >
          Projects
        </button>
        <button
          className="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("contact").scrollIntoView()}
        >
          Contact
        </button>
      </div>

      <div className="shrink-0 mx-6 transition ease-in-out delay-75 duration-150 hover:scale-125">
        <a
          href="https://github.com/GusHauge/GusHauge.github.io"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/GitHub_logo.jpg"
            alt="GitHub"
            className="w-8 rounded-full"
          />
        </a>
      </div>
    </div>
  );
};
