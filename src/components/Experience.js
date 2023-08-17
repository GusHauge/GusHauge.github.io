export const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col w-full h-fit bg-gradient-to-b from-black to-indigo-900 items-center space-y-28 py-14 px-10"
    >
      <h1 className="text-6xl font-thin">Experience</h1>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row sm:space-y-0">
          <div className="shrink-0">
            <a href="https://www.ibm.com" target="_blank" rel="noreferrer">
              <img
                src="/images/IBM_logo.png"
                alt="IBM"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:mr-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start text-center">
              <div className="flex-col sm:text-left">
                <h1 className="text-lg font-bold">IBM</h1>
                <p className="italic">Austin, TX</p>
              </div>
              <div className="flex-col sm:text-left lg:text-right">
                <h1 className="text-lg font-bold">Software Engineer Intern</h1>
                <p className="italic">Summer 2023</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              This past summer my team and I built a full stack REST API using
              React.js, Express.js, and PostgreSQL to streamline the IBM
              Enterprise Federation onboarding experience and provide easy data
              access to over 900 business partners. I was able to hone my skills
              in agile methodologies, full stack web development, and database
              management while improving my proficiency in JavaScript and CSS.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row-reverse sm:space-y-0">
          <div className="shrink-0">
            <a href="https://cvrl.nd.edu" target="_blank" rel="noreferrer">
              <img
                src="/images/ND_Research_logo.jpg"
                alt="ND_Research"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:ml-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start text-center">
              <div className="flex-col sm:text-left">
                <h1 className="text-lg font-bold">
                  Computer Vision Research Lab
                </h1>
                <p className="italic">Notre Dame, IN</p>
              </div>
              <div className="flex-col sm:text-left lg:text-right">
                <h1 className="text-lg font-bold">Research Assistant</h1>
                <p className="italic">Fall 2021-Present</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              For the past 2 years I have been working under Professors Adam
              Czajka and Patrick Flynn at the University of Notre Dame. I have
              taken on a number of tasks, most notably a NIST iris project in
              which I used Python scripting and Pandas to filter 500,000 human
              iris images to a dataset of 6,000 images specified by quality
              metric software. I have also tested project code to build Python
              environment files and craft professional cover pages.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row sm:space-y-0">
          <div className="shrink-0">
            <a href="https://oit.nd.edu" target="_blank" rel="noreferrer">
              <img
                src="/images/ND_OIT_logo.png"
                alt="ND_OIT"
                className="rounded-2xl w-52 transition ease-in-out delay-75 duration-150 hover:scale-110 sm:mr-10"
              />
            </a>
          </div>
          <div className="flex flex-col space-y-2 max-w-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start text-center">
              <div className="flex-col sm:text-left">
                <h1 className="text-lg font-bold">
                  Office of Information Technologies
                </h1>
                <p className="italic">Notre Dame, IN</p>
              </div>
              <div className="flex-col sm:text-left lg:text-right">
                <h1 className="text-lg font-bold">
                  Classroom Triage Assistant
                </h1>
                <p className="italic">Fall 2021</p>
              </div>
            </div>
            <p className="text-base sm:text-sm lg:text-base">
              During fall of 2021 I took my first ever tech-related job with the
              University of Notre Dame's IT office. I primarily managed calls
              and made classroom visits to aid professors and teaching
              assistants to help with a variety of issues related to classroom
              technology in a time when hybrid learning was in effect. I learned
              how to operate in high-pressure situations where individuals
              needed immediate help with technology, communicating with my team
              to provide optimal service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
