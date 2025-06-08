import { IconCloud } from "@/components/magicui/icon-cloud";
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
        "flask"
    ];

    const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );
    

  return (
    <section className="h-screen relative flex bg-brand-secondary justify-center" id="skills">
        <RevealOnScroll>
            <div className="flex justify-center flex-col items-center">
                <div className="flex mt-24 justify-center flex-col items-center">
                    <h2 className="text-white font-bold text-3xl md:text-5xl mb-8">Top Skills</h2>
                    <p className="text-white md:w-full mb-4 px-7  text-md text-justify">
                        Here I showcase the technical skills and tools I have mastered through hands-on experience and projects. 
                    </p>
                </div>
                <IconCloud images={images} />
            </div>
        </RevealOnScroll>
    </section>

  )
}

export default SkillsSection
