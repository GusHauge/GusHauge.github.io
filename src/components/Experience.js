export const Experience = () => {
  return (
    <div
      id="experience"
      class="flex flex-col w-full h-fit bg-indigo-950 items-center space-y-20 py-28 px-10"
    >
      <h1 class="text-6xl text-white">Experience</h1>
      <div class="flex flex-col gap-14">
        <div class="flex items-center justify-center space-x-16">
          <img
            src={require("../images/IBM_logo.png")}
            alt="IBM"
            class="rounded h-40"
          />
          <p class="text-lg text-white max-w-2xl w-1/2">
            As a software engineer intern, I have been building a full stack web
            application using React.js, Express.js, and Postgres to streamline
            the IBM Enterprise Federation onboarding experience and data access
            for over 900 business partners.
          </p>
        </div>
      </div>
    </div>
  );
};
