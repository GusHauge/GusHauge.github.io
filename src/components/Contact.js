export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col w-full h-fit bg-gradient-to-b from-black to-indigo-900 items-center space-y-14 sm:space-y-20 py-8 sm:py-14 px-10 pb-32"
    >
      <h1 className="text-5xl sm:text-6xl font-thin">Contact</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <div className="shrink-0 sm:w-1/3 lg:w-1/4 xl:w-1/3 max-w-4xl">
          <img
            src="/images/Bray_Frontal.jpg"
            alt="Gus"
            className="rounded-lg object-cover w-96 h-64 sm:w-full sm:h-auto"
          />
        </div>

        <div className="flex flex-col space-y-4 text-base md:text-lg lg:text-xl max-w-lg">
          <p>
            I'm always open to new opportunities, collaborations, or just a good
            conversation about tech, projects, or life in general. If you'd like
            to work together, have a question, or want to connect, feel free to
            reach out - I’d love to hear from you!
          </p>
          <p>Email: augustinehauge@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/gushauge</p>
          <p>GitHub: @GusHauge</p>
          <div className="flex flex-row space-x-8">
            <div className="shrink-0 transition ease-in-out delay-75 duration-150 hover:scale-125">
              <a
                href="https://www.linkedin.com/in/gushauge"
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
