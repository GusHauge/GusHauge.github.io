export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-full h-fit bg-black items-center space-y-14 sm:space-y-20 py-8 sm:py-14 px-10"
    >
      <h1 className="text-4xl sm:text-6xl font-thin">About Me</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-x-8 sm:space-y-0 md:space-x-12 lg:space-x-16 xl:space-x-20">
        <div className="shrink-0 sm:w-1/3">
          <img
            src="/images/Bray_Frontal.jpg"
            alt="Gus"
            className="rounded-lg object-cover w-96 h-64 sm:w-full sm:h-auto"
          />
        </div>
        <p className="text-base md:text-lg lg:text-xl max-w-lg">
          I am a senior at the University of Notre Dame pursuing a Bachelor of
          Arts in Computer Science and Theology, a unique combination that
          reflects my enthusiasm for both technology and pursuit of the common
          good. As a member of QuestBridge, a program that provides access to
          elite universities for low-income students, I have learned the
          importance of hard work and grit. I am excited by machine learning,
          computer vision, tech ethics, data science, and web development. As I
          kickstart my career, I am committed to learning new skills and solving
          complex problems.
        </p>
      </div>
    </div>
  );
};
