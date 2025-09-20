export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-full h-fit bg-black items-center space-y-14 sm:space-y-20 py-8 sm:py-14 px-10"
    >
      <h1 className="text-5xl sm:text-6xl font-thin">About</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-x-8 sm:space-y-0 md:space-x-12 lg:space-x-16 xl:space-x-20">
        <div className="shrink-0 sm:w-1/3 lg:w-1/4 xl:w-1/3">
          <img
            src="/images/Professional.jpg"
            alt="Gus"
            className="rounded-lg object-cover w-96 h-64 sm:w-full sm:h-auto"
          />
        </div>
        <p className="text-base md:text-lg lg:text-xl max-w-lg">
          Hi, I’m Gus - a software developer who enjoys building tools that make
          life simpler, faster, and more enjoyable. At IBM I've had the chance
          to work on full stack web apps, large-scale infrastructure, and
          analytics automation, learning the value of clean code, effective
          design, and reliable systems along the way. I studied Computer Science
          and Theology at Notre Dame, reflecting my deep care for both how
          things work and why they matter. Whether I’m designing new features,
          automating complex workflows, or enhancing user experience, I’m always
          looking for ways to grow, collaborate, and create something
          meaningful. Thanks for stopping by; feel free to check out my projects
          and reach out!
        </p>
      </div>
    </div>
  );
};
