export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-full h-fit bg-black items-center space-y-14 sm:space-y-20 py-8 sm:py-14 px-10"
    >
      <h1 className="text-5xl sm:text-6xl font-thin">About Me</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-x-8 sm:space-y-0 md:space-x-12 lg:space-x-16 xl:space-x-20">
        <div className="shrink-0 sm:w-1/3">
          <img
            src="/images/Bray_Frontal.jpg"
            alt="Gus"
            className="rounded-lg object-cover w-96 h-64 sm:w-full sm:h-auto"
          />
        </div>
        <p className="text-base md:text-lg lg:text-xl max-w-lg">
          Hi there! I am a full stack software developer at IBM and a recent
          graduate of the University of Notre Dame currently living in Austin,
          Texas. Throughout my young career, I have been able to sharpen my
          skills in both front-end and back-end development with full stack
          projects in my personal and professional work. At the moment, I am
          most experienced in web development but I also have a great interest
          in data visualization, ML-driven analytics, and computer vision. I am
          always on the hunt for new applications of software and I hope for a
          world where tech is used to help people in the areas of greatest need.
        </p>
      </div>
    </div>
  );
};
