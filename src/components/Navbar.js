export const Navbar = () => {
  return (
    <div class="flex justify-between bg-indigo-900 items-center px-4">
      <div class="shrink-0">
        <img src="/Gus_logo.png" alt="GitHub" class="w-8 rounded-full" />
      </div>

      <div class="flex w-full h-12 justify-center space-x-3 mx-auto font-semibold">
        <button
          class="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </button>
        <button
          class="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("about").scrollIntoView()}
        >
          About
        </button>
        <button
          class="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("experience").scrollIntoView()}
        >
          Experience
        </button>
        <button
          class="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("projects").scrollIntoView()}
        >
          Projects
        </button>
        <button
          class="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500"
          onClick={() => document.getElementById("contact").scrollIntoView()}
        >
          Contact
        </button>
      </div>

      <div class="shrink-0 transition ease-in-out delay-75 duration-150 hover:scale-125">
        <a
          href="https://github.com/GusHauge/GusHauge.github.io"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../images/GitHub_logo.jpg")}
            alt="GitHub"
            class="w-8 rounded-full"
          />
        </a>
      </div>
    </div>
  );
};
