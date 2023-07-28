export const About = () => {
  return (
    <div
      id="about"
      class="flex flex-col w-full h-fit bg-slate-900 items-center space-y-12 py-28 px-10"
    >
      <h1 class="text-6xl text-white">About Me</h1>
      <div class="flex items-center justify-center space-x-16">
        <img
          src={require("../images/Bray_Frontal.jpg")}
          alt="Gus"
          class="rounded-lg h-80"
        />
        <p class="text-lg text-white max-w-2xl w-1/2">
          I am a senior at the University of Notre Dame pursuing a Bachelor of
          Arts in Computer Science and Theology, a unique combination that
          reflects my enthusiasm for both technology and pursuit of the common
          good. As a QuestBridge Scholar, a program that provides access to
          elite universities for low-income students, I have learned the
          importance of hard work and grit. I am extremely interested in machine
          learning, computer vision, tech ethics, data science, and web
          development. I love learning new skills to solve diverse problems as I
          kickstart my career.
        </p>
      </div>
    </div>
  );
};
