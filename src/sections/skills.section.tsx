import { IconCloud } from "@/components/magicui/icon-cloud";
import { Particles } from "@/components/magicui/particles";
import RevealOnScroll from "@/components/RevealOnScroll"

const SkillsSection = () => {
    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "react",
        "flutter",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "firebase",
        "vercel",
        "git",
        "github",
        "visualstudiocode",
        "androidstudio",
        "figma",
        "arduino",
        "laravel",
        "latex",
        "python",
        "flask",
        "netlify"
    ];

    const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );
    

  return (
    <section 
      className="relative flex bg-brand-secondary justify-center items-center min-h-screen py-20 md:py-24 lg:py-32"
      id="skills"
    >
      <Particles className="absolute inset-0"/>
      <RevealOnScroll>
        <div className="container mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col items-center justify-center md:items-start">
              <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12">
                Top Skills
              </h2>
              <p className="text-white text-sm md:text-base text-justify md:text-justify leading-relaxed">
                I build full-stack apps using <span className="text-blue-300 font-semibold">React</span>, <span className="text-blue-300 font-semibold">Next.js</span>, <span className="text-blue-300 font-semibold">TypeScript</span>, and <span className="text-blue-300 font-semibold">JavaScript</span> for frontend development, and <span className="text-blue-300 font-semibold">Node.js</span>, <span className="text-blue-300 font-semibold">Express</span>, <span className="text-blue-300 font-semibold">Flask</span>, and <span className="text-blue-300 font-semibold">Prisma</span> for backend services. 
                I create mobile apps with <span className="text-blue-300 font-semibold">Flutter</span> and <span className="text-blue-300 font-semibold">Dart</span>, and use <span className="text-blue-300 font-semibold">Firebase</span> and <span className="text-blue-300 font-semibold">Vercel</span> for hosting and deployment. 
                My workflow includes <span className="text-blue-300 font-semibold">Git</span>, <span className="text-blue-300 font-semibold">GitHub</span>, <span className="text-blue-300 font-semibold">Figma</span> for UI/UX, and <span className="text-blue-300 font-semibold">VS Code</span> and <span className="text-blue-300 font-semibold">Android Studio</span> for development. 
                I also explore hardware with <span className="text-blue-300 font-semibold">Arduino</span> and handle academic work using <span className="text-blue-300 font-semibold">LaTeX</span>.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[600px]">
                <IconCloud images={images} />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default SkillsSection
