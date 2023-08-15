export const Experience = () => {
  return (
    <div
      id="experience"
      class="flex flex-col w-full h-fit bg-gradient-to-b from-black to-indigo-900 items-center space-y-28 py-14 px-10"
    >
      <h1 class="text-6xl font-thin">Experience</h1>
      <div class="flex flex-col gap-24">
        <div class="flex justify-center space-x-10">
          <div class="shrink-0">
            <a href="https://www.ibm.com" target="_blank" rel="noreferrer">
              <img
                src={require("../images/IBM_logo.png")}
                alt="IBM"
                class="rounded-2xl w-28 sm:w-36 md:w-48 lg:w-52"
              />
            </a>
          </div>
          <div class="flex flex-col space-y-4 max-w-xl">
            <div class="flex justify-between">
              <h1 class="text-lg font-bold ">IBM</h1>
              <h1 class="text-lg font-bold ">Software Engineer Intern</h1>
            </div>
            <p class="text-md">
              This summer I have been building a full stack web application
              using React.js, Express.js, and Postgres to streamline the IBM
              Enterprise Federation onboarding experience and provide easy data
              access to over 900 business partners. I have honed my skills in
              agile methodologies, full stack web development, and database
              management while improving my proficiency in JavaScript and CSS.
            </p>
          </div>
        </div>

        <div class="flex justify-center space-x-10">
          <div class="flex flex-col space-y-4 max-w-xl">
            <div class="flex justify-between">
              <h1 class="text-lg font-bold ">Computer Vision Research Lab</h1>
              <h1 class="text-lg font-bold ">Research Assistant</h1>
            </div>
            <p class="text-md">
              For the past 2 years I have been working under Professors Adam
              Czajka and Patrick Flynn at the University of Notre Dame. I have
              taken on a number of tasks, most notably a NIST iris project in
              which I used Python scripting and Pandas to filter 500,000 human
              iris images to a dataset of 6,000 images specified by quality
              metric software. I have also tested project code to build Python
              environment files and craft professional cover pages.
            </p>
          </div>
          <a href="https://cvrl.nd.edu" target="_blank" rel="noreferrer">
            <img
              src={require("../images/ND_Research_logo.jpg")}
              alt="ND_Research"
              class="rounded-2xl h-auto w-auto max-h-52 max-w-52 min-h-[8rem] min-w-[8rem]"
            />
          </a>
        </div>

        <div class="flex justify-center space-x-10">
          <a href="https://oit.nd.edu" target="_blank" rel="noreferrer">
            <img
              src={require("../images/ND_OIT_logo.png")}
              alt="ND_OIT"
              class="rounded-2xl h-auto w-auto max-h-52 max-w-52 min-h-[8rem] min-w-[8rem]"
            />
          </a>
          <div class="flex flex-col space-y-4 max-w-xl">
            <div class="flex justify-between">
              <h1 class="text-lg font-bold">
                Office of Information Technologies
              </h1>
              <h1 class="text-lg font-bold">Classroom Triage Assistant</h1>
            </div>
            <p class="text-md">
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
