export const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col w-full h-fit bg-gradient-to-b from-black to-indigo-900 items-center space-y-14 sm:space-y-20 py-8 sm:py-14 px-10"
    >
      <h1 className="text-5xl sm:text-6xl font-thin">Experience</h1>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row-reverse sm:space-y-0">
          <div className="shrink-0">
            <a href="https://www.ibm.com" target="_blank" rel="noreferrer">
              <img
                src="/images/IBM_logo_blue.png"
                alt="IBM"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:ml-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-bold">IBM</h1>
                <p className="italic">Austin, TX</p>
              </div>
              <div className="flex-col lg:text-right">
                <h1 className="text-lg font-bold">Software Developer</h1>
                <p className="italic">Summer 2024-Present</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              Now at IBM full-time, I’ve worked on critical internal tools that
              support authentication for thousands of applications used
              worldwide. Among many things, I helped modernize a legacy SSO app,
              cutting submission time from 5-25 minutes to under a minute, and
              led a Node.js upgrade across a major codebase. My time here has
              given me hands-on experience with full-stack development,
              infrastructure automation, and high-impact systems.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row sm:space-y-0">
          <div className="shrink-0">
            <a href="https://www.ibm.com" target="_blank" rel="noreferrer">
              <img
                src="/images/IBM_logo_light.png"
                alt="IBM"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:mr-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-bold">IBM</h1>
                <p className="italic">Remote</p>
              </div>
              <div className="flex-col lg:text-right">
                <h1 className="text-lg font-bold">Software Developer Co-op</h1>
                <p className="italic">Fall 2023-Spring 2024</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              During a co-op throughout my senior year, I took full ownership of
              an enterprise-wide Slackbot used for 2FA resets, implementing new
              features and usage tracking. I supported large-scale migrations of
              Node.js apps to a new CI/CD pipeline and wrote CronJobs that
              automated expiration alerts and permission updates. It was a
              fast-moving role that taught me how to contribute quickly and
              independently.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row-reverse sm:space-y-0">
          <div className="shrink-0">
            <a href="https://www.ibm.com" target="_blank" rel="noreferrer">
              <img
                src="/images/IBM_logo_dark.png"
                alt="IBM"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:ml-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-bold">IBM</h1>
                <p className="italic">Austin, TX</p>
              </div>
              <div className="flex-col lg:text-right">
                <h1 className="text-lg font-bold">Software Developer Intern</h1>
                <p className="italic">Summer 2023</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              As a summer intern, I worked with three teammates to design and
              build a full-stack onboarding system for over 900 clients. I
              helped architect the frontend with React.js and the backend with
              Node.js and PostgreSQL, contributing to all phases of development
              from planning to delivery. It was my first taste of product
              ownership and I loved it!
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row sm:space-y-0">
          <div className="shrink-0">
            <a href="https://cvrl.nd.edu" target="_blank" rel="noreferrer">
              <img
                src="/images/ND_Research_logo.jpg"
                alt="ND_Research"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:mr-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-bold">
                  Computer Vision Research Lab
                </h1>
                <p className="italic">Notre Dame, IN</p>
              </div>
              <div className="flex-col lg:text-right">
                <h1 className="text-lg font-bold">Research Assistant</h1>
                <p className="italic">Fall 2021-Spring 2023</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              In the Computer Vision Research Lab, I filtered and processed a
              dataset of 500,000+ human iris images for biometric research. I
              created Python scripts to apply quality metrics, managed project
              GitHub repos, and contributed to published work. It gave me
              valuable experience with data-heavy workflows and research-grade
              tooling.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row-reverse sm:space-y-0">
          <div className="shrink-0">
            <a href="https://oit.nd.edu" target="_blank" rel="noreferrer">
              <img
                src="/images/ND_OIT_logo.png"
                alt="ND_OIT"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:ml-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-bold">
                  Office of Information Technologies
                </h1>
                <p className="italic">Notre Dame, IN</p>
              </div>
              <div className="flex-col lg:text-right">
                <h1 className="text-lg font-bold">
                  Classroom Triage Assistant
                </h1>
                <p className="italic">Fall 2021</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              My first technical role was all about fast thinking and clear
              communication. I supported professors during tech emergencies in
              classrooms, diagnosing issues on the fly and making sure courses
              could run smoothly - especially during the unique needs of the
              COVID-19 pandemic. It taught me how to stay calm, think
              technically, and explain clearly - all foundational skills in my
              career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
