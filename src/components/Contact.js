export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col w-full h-fit bg-gradient-to-b from-indigo-900 to-black items-center space-y-14 sm:space-y-20 py-8 sm:py-14 px-10 pb-32"
    >
      <h1 className="text-5xl sm:text-6xl font-thin">Contact Me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <div className="shrink-0 lg:w-1/3">
          <img
            src="/images/Croagh_Patrick_Side.jpg"
            alt="Gus"
            className="rounded-lg object-cover w-[32rem] h-52 lg:w-full lg:h-auto"
          />
        </div>

        <div className="flex flex-col space-y-4 text-lg lg:text-xl max-w-lg">
          <p>
            I would love to connect and talk about technology, theology, ethics,
            or anything on your mind! Please get in touch using the information
            below:
          </p>
          <p>Email: augustinehauge@gmail.com</p>
          <div className="flex flex-row space-x-8">
            <div className="shrink-0 transition ease-in-out delay-75 duration-150 hover:scale-125">
              <a
                href="https://www.linkedin.com/in/gus-hauge-5207761bb/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/LinkedIn_logo.jpg"
                  alt="GitHub"
                  className="w-8 rounded-md"
                />
              </a>
            </div>
            <div className="shrink-0 transition ease-in-out delay-75 duration-150 hover:scale-125">
              <a
                href="https://github.com/GusHauge"
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
        </div>
      </div>
    </div>
  );
};
