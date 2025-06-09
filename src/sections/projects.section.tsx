import ProjectCard from "@/components/ProjectCard"
import RevealOnScroll from "@/components/RevealOnScroll"

const ProjectsSection = () => {
    return (
        <section className="h-screen flex justify-center text-white" id="projects">
            <RevealOnScroll>
                <div className="mt-32 flex flex-col items-center">
                    <h1 className="font-bold text-3xl md:text-5xl mb-10">Projects</h1>
                    
                    <div className="grid grid-cols-4 gap-10">
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </div>

        
            </RevealOnScroll>
        </section>
    )
}

export default ProjectsSection

