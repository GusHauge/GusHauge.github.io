export const Projects = () => {
  return (
    <div
      id="projects"
      class="flex flex-col w-full h-fit bg-gradient-to-b from-indigo-900 to-black items-center space-y-28 py-14 px-10"
    >
      <h1 class="text-6xl font-thin">Projects</h1>
      <div class="flex flex-col gap-24">
        <div class="flex justify-center space-x-10">
          <a
            href="https://colab.research.google.com/drive/1j5wOZnaysJeZHw4W5ds9ZSGSeTcwLlGR"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../images/March_Metrics_code.png")}
              alt="March Metrics code"
              class="h-auto w-auto max-h-72 min-w-[12rem] rounded-2xl object-fit"
            />
          </a>
          <div class="flex flex-col space-y-4 max-w-xl">
            <div class="flex justify-between">
              <h1 class="text-lg font-bold">
                March Metrics Tournament Predictor
              </h1>
              <a
                href="https://github.com/GusHauge/Silvestri_Carpets"
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
