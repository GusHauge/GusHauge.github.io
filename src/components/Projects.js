export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col w-full h-fit bg-indigo-900 items-center space-y-28 py-14 px-10"
    >
      <h1 className="text-6xl font-thin">Projects</h1>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0">
          <div className="shrink-0">
            <a
              href="https://colab.research.google.com/drive/1j5wOZnaysJeZHw4W5ds9ZSGSeTcwLlGR"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/March_Metrics_code.png"
                alt="March Metrics code"
                className="rounded-2xl w-[36rem] h-36 object-cover lg:h-auto lg:w-96 lg:mr-10 transition ease-in-out delay-75 duration-150 hover:scale-105"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-4 max-w-xl">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">
                March Metrics Tournament Predictor
              </h1>
              <div className="shrink-0 transition ease-in-out delay-75 duration-150 hover:scale-125">
                <a
                  href="https://github.com/GusHauge/Silvestri_Carpets"
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
            <p>
              In this final project for my Data Structures class, my team and I
              trained a random forest classifier in Python using the
              Scikit-Learn library and college basketball data from 2013-2019.
              Our model had a multiple events that it predicted, ranging from
              head-to-head matchups to post-season seeding and even March
              Madness tournament performance for NCAA teams. We incorporated
              Pandas features like dummy variables and feature importance to
              refine our model and identify the most significant statistics for
              post-season success. We delivered weekly memos and code reviews
              for our class, culminating in a final presentation and code
              demonstration that earned us an honorable mention for best project
              out of a pool of 135 students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
