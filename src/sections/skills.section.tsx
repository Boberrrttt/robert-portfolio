import { IconCloud } from "@/components/magicui/icon-cloud";
import { Particles } from "@/components/magicui/particles";
import RevealOnScroll from "@/components/RevealOnScroll";

const SkillsSection = () => {
  const skillSlugs = [
    "typescript", "javascript", "dart", "react", "reactnative", "flutter",
    "html5", "css3", "nodedotjs", "express", "nextdotjs",
    "prisma", "firebase", "vercel", "git", "github",
    "visualstudiocode", "androidstudio", "figma", "arduino",
    "laravel", "latex", "python", "flask", "netlify",
    "neovim", "mongodb", "githubactions"
  ];

  const images = skillSlugs.map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`);

  const skillGroups = {
    "Frontend": ["React",  "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Express", "Flask", "Prisma", "MongoDB Atlas"],
    "Mobile": ["Flutter", "Dart", "Android Studio", "React Native"],
    "Tools & Deployment": ["Firebase", "Vercel", "Netlify", "Git", "GitHub", "GitHub Actions", "VS Code", "Figma", "Neovim"],
    "Other": ["Arduino", "LaTeX", "Python", "Laravel"]
  };

  return (
    <section 
      className="relative flex bg-gradient-to-b from-brand-secondary/80 to-brand-secondary justify-center items-center min-h-screen py-24 md:py-32"
      id="skills"
    >
      <Particles className="absolute inset-0" />
      <RevealOnScroll>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Left: Skill cards */}
            <div className="flex flex-col justify-center">
              <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
                My Top Skills
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(skillGroups).map(([group, skills]) => (
                  <div key={group} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm hover:scale-105 transition-transform cursor-default">
                    <h3 className="text-blue-300 font-semibold mb-3">{group}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map(skill => (
                        <div
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium hover:bg-blue-500/70 transition-colors cursor-pointer"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Icon Cloud */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[600px]">
                <IconCloud images={images} />
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default SkillsSection;

