export const Navbar = () => {
  return (
    <div class="flex w-full h-12 justify-center space-x-3 mx-auto bg-indigo-800 text-white">
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
      <button class="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500">
        Projects
      </button>
      <button class="px-4 rounded-md transition-colors duration-300 delay-100 hover:bg-indigo-500">
        Contact
      </button>
    </div>
  );
};
