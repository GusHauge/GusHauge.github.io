export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col w-full h-fit bg-indigo-900 items-center space-y-14 sm:space-y-20 py-8 sm:py-14 px-10"
    >
      <h1 className="text-5xl sm:text-6xl font-thin">Projects</h1>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row-reverse lg:space-y-0">
          <div className="shrink-0">
            <a
              href="https://GusHauge.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/Gus_logo_snipped.png"
                alt="March Metrics code"
                className="rounded-2xl w-[36rem] h-36 object-cover lg:h-auto lg:w-96 lg:ml-10 outline outline-white outline-1 transition ease-in-out delay-75 duration-150 hover:scale-105"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-4 max-w-xl">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">Portfolio Website</h1>
              <div className="shrink-0 ml-1 transition ease-in-out delay-75 duration-150 hover:scale-125">
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
            <p>
              This very site! I built it from scratch using React.js and
              TailwindCSS to showcase who I am, what I’ve built, and what I care
              about. It's responsive, interactive, and a great example of how I
              approach design and development - clean, functional, and
              user-friendly.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0">
          <div className="shrink-0">
            <img
              src="/images/Basketball_stock.jpg"
              alt="March Metrics code"
              className="rounded-2xl w-[36rem] h-36 object-cover lg:h-auto lg:w-96 lg:mr-10"
            />
          </div>
          <div className="flex flex-col space-y-4 max-w-xl">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">
                March Madness Machine Learning Predictor
              </h1>
            </div>
            <p>
              Together with 3 classmates, I built a machine learning model that
              predicts NCAA tournament outcomes with over 90% accuracy. Using
              Scikit-Learn, Pandas, and real data from 2013–2019, I trained a
              random forest classifier and explored feature importance to make
              meaningful predictions. It was a fun way to mix sports and data
              science, two lifelong interests of mine.
            </p>
            <p className="font-bold">
              NOTE: Code is unavailable since it was owned by a Notre Dame
              account.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row-reverse lg:space-y-0">
          <div className="shrink-0">
            <img
              src="/images/Chicago_skyline.jpg"
              alt="Chicago skyline stock"
              className="rounded-2xl w-[36rem] h-36 object-cover lg:h-auto lg:w-96 lg:ml-10"
            />
          </div>
          <div className="flex flex-col space-y-4 max-w-xl">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">
                Chicago Public Schools Data Analysis
              </h1>
            </div>
            <p>
              This was a collaborative project where I helped analyze and
              visualize disparities in Chicago’s public school system. I used
              Python with Pandas and Plotly to process large datasets and create
              interactive visualizations that told a clear, human-centered
              story. It reminded me how powerful data can be when used for good.
            </p>
            <p className="font-bold">
              NOTE: Code is unavailable since it was owned by a Notre Dame
              account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
