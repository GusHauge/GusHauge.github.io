export const Contact = () => {
  return (
    <div
      id="contact"
      class="flex flex-col w-full h-fit bg-gradient-to-b from-indigo-900 to-black items-center space-y-28 py-14 px-10 pb-32"
    >
      <h1 class="text-6xl font-thin">Contact Me</h1>
      <div class="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <div class="shrink-0 lg:w-1/3">
          <img
            src={require("../images/Croagh_Patrick_Side.jpg")}
            alt="Gus"
            class="rounded-lg object-cover w-[32rem] h-52 lg:w-full lg:h-auto"
          />
        </div>

        <div class="flex flex-col space-y-4 text-lg lg:text-xl max-w-lg">
          <p>
            I would love to connect and talk about technology, theology, ethics,
            or anything on your mind! Please get in touch using the information
            below:
          </p>
          <p class="text-center lg:text-left">
            Email: augustinehauge@gmail.com
          </p>
          <div class="flex flex-row space-x-8 justify-center lg:justify-start">
            <div class="shrink-0 transition ease-in-out delay-75 duration-150 hover:scale-125">
              <a
                href="https://www.linkedin.com/in/gus-hauge-5207761bb/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../images/LinkedIn_logo.jpg")}
                  alt="GitHub"
                  class="w-8 rounded-md"
                />
              </a>
            </div>
            <div class="shrink-0 transition ease-in-out delay-75 duration-150 hover:scale-125">
              <a
                href="https://github.com/GusHauge"
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
        </div>
      </div>
    </div>
  );
};
