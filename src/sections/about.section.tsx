'use client'

import RevealOnScroll from "@/components/RevealOnScroll";

const AboutSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-brand-secondary to-brand-primary text-white px-6 md:px-20 pt-24 md:pt-28"
      aria-labelledby="about-heading"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 w-full max-w-6xl">
          <div className="relative w-56 h-56 md:w-80 md:h-80 flex-shrink-0">
            <img
              src="/assets/1x1.jpg"
              alt="Robert Salvo - profile"
              className="rounded-full w-full h-full object-cover border-4 border-white/90 shadow-xl ring-2 ring-white/20"
            />
          </div>

          <div className="flex flex-col gap-5 md:gap-6 max-w-xl text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-wider text-white/80">Hi there,</p>
            <h1 id="about-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              I&apos;m Robert
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
              Computer Engineering student with hands-on experience in software development and IT.
              I build websites and mobile apps and am growing in cloud computing—I love learning new tech and solving hard problems.
            </p>
            <p className="text-sm md:text-base text-white/90 font-medium">
              Open to internships and full-time opportunities.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
              <span className="px-3 py-1.5 bg-white/15 rounded-full text-sm font-medium text-white border border-white/20">
                Web
              </span>
              <span className="px-3 py-1.5 bg-white/15 rounded-full text-sm font-medium text-white border border-white/20">
                Mobile
              </span>
              <span className="px-3 py-1.5 bg-white/15 rounded-full text-sm font-medium text-white border border-white/20">
                Backend
              </span>
              <span className="px-3 py-1.5 bg-white/15 rounded-full text-sm font-medium text-white border border-white/20">
                Cloud
              </span>
              <span className="px-3 py-1.5 bg-white/15 rounded-full text-sm font-medium text-white border border-white/20">
                AI & ML
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 bg-white text-brand-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
              >
                View my work
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default AboutSection;


