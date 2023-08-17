export const Contact = () => {
  return (
    <div
      id="contact"
      class="flex flex-col w-full h-fit bg-gradient-to-b from-indigo-900 to-black items-center space-y-28 py-14 px-10"
    >
      <h1 class="text-6xl font-thin">Contact Me</h1>
      <div class="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <div class="shrink-0 lg:w-1/3">
          <img
            src={require("../images/Croagh_Patrick_Side.jpg")}
            alt="Gus"
            class="rounded-lg object-cover w-[32rem] h-52 lg:w-full lg:h-auto"
          />
        </div>
        <p class="text-lg lg:text-xl max-w-lg">
          I would love to connect and talk about technology, theology, ethics,
          or anything on your mind! Please get in touch through any of methods
          listed below.
        </p>
        <div class="flex"></div>
      </div>
    </div>
  );
};
