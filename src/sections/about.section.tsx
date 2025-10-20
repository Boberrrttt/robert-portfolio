import RevealOnScroll from "@/components/RevealOnScroll";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-brand-secondary to-brand-primary text-white px-6 md:px-20"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 w-full max-w-6xl">
          
          {/* Profile Image with gradient overlay */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
            <img
              src="/assets/1x1.jpg"
              alt="robert-img"
              className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-xl">
            <h2 className="text-xl md:text-2xl text-gray-200">Hi there,</h2>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
              I&apos;m Robert!
            </h1>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed text-justify">
              I&apos;m a Computer Engineering student with hands-on experience in software development and the IT industry.
              <br /><br />
              I create websites and mobile applications and am actively advancing my skills in cloud computing. I thrive on
              learning new technologies and enjoy solving complex problems.
            </p>
            {/* Optional skill badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-blue-400/30 rounded-full text-sm font-medium text-white">
                Web Development
              </span>
              <span className="px-3 py-1 bg-purple-400/30 rounded-full text-sm font-medium text-white">
                Mobile Apps
              </span>
              <span className="px-3 py-1 bg-green-400/30 rounded-full text-sm font-medium text-white">
                Backend
              </span>
              <span className="px-3 py-1 bg-yellow-400/30 rounded-full text-sm font-medium text-white">
                Cloud Computing
              </span>
              <span className="px-3 py-1 bg-pink-400/30 rounded-full text-sm font-medium text-white">
                AI & ML
              </span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default AboutSection;


