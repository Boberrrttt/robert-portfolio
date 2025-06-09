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
    <section className="h-screen relative flex bg-brand-secondary justify-center items-center" id="skills">
        <Particles className="w-full h-full absolute "/>
        <RevealOnScroll>
            <div className="grid grid-cols-2">
                    <div className="flex mt-24 md:w-[90%]  pl-32 flex-col">
                        <h2 className="text-white font-bold text-3xl md:text-5xl mb-20">Top Skills</h2>
                        <p className="text-white  mb-4 text-md text-justify leading-loose">
                            I build full-stack apps using <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>JavaScript</strong> for frontend development, and <strong>Node.js</strong>, <strong>Express</strong>, <strong>Flask</strong>, and <strong>Prisma</strong> for backend services. 
                            I create mobile apps with <strong>Flutter</strong> and <strong>Dart</strong>, and use <strong>Firebase</strong> and <strong>Vercel</strong> for hosting and deployment. 
                            My workflow includes <strong>Git</strong>, <strong>GitHub</strong>, <strong>Figma</strong> for UI/UX, and <strong>VS Code</strong> and <strong>Android Studio</strong> for development. 
                            I also explore hardware with <strong>Arduino</strong> and handle academic work using <strong>LaTeX</strong>.
                        </p>

                    </div>
                    <div className="flex justify-center">
                        <IconCloud images={images} />
                    </div>
            </div>
        </RevealOnScroll>
    </section>
  )
}

export default SkillsSection
