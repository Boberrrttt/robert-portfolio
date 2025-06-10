import ProjectCard from "@/components/ProjectCard"
import RevealOnScroll from "@/components/RevealOnScroll"

const ProjectsSection = () => {
    return (
        <section className="flex justify-center text-white" id="projects">
            <RevealOnScroll>
                <div className=" flex h-full flex-col items-center px-20">
                    <h1 className="font-bold text-3xl pt-20 md:text-6xl mb-20">Web Projects</h1>
                    <div className="grid grid-cols-3 gap-12 ">
                        <ProjectCard
                         image="\assets\Screenshot 2025-06-08 193309.png"
                         title="Forest Monitoring"
                         description="Final project for our Microprocessors course: a forest monitoring system using an ESP32-CAM for real-time sound and video feedback."
                         />
                        <ProjectCard 
                            image="\assets\Screenshot 2025-06-08 193650.png"
                            title="Predictive Maintenance"
                            description="Built with React (frontend) and Flask (backend), this app uses a trained AI model to predict the likelihood of machine failure."
                        />
                        <ProjectCard 
                            image="\assets\Screenshot 2025-06-08 194133.png"
                            title="Thesis Routing System"
                            description="Streamlines thesis paper evaluation for academic advisers and panel reviewers, providing secure access for comprehensive paper assessment"
                        />
                        <ProjectCard 
                            image="\assets\Screenshot 2025-06-08 194451.png"
                            title="WIS_CE"
                            description="Customized inventory management solution streamlining warehouse operations with real-time tracking and automated stock management"
                        />
                        <ProjectCard 
                            image="\assets\Screenshot 2025-06-09 220227.png"
                            title="CpExpress"
                            description="Social platform fostering community engagement among USTP Computer Engineering students, providing a dedicated space for expression and collaboration"
                            url="https://express.icpepse-ustp.org/"
                        />
                        <ProjectCard 
                            image="\assets\Screenshot 2025-06-10 120233.png"
                            title="Valcardi"
                            description="Anonymous love letter sharing platform for Valentine's Day, allowing users to express their feelings through heartfelt messages while maintaining privacy. Features secure message delivery and a clean, user-friendly interface."
                            url="https://valcardi.vercel.app/"
                        />
                        
                    </div>

                    <h1 className="font-bold text-3xl pt-20 md:text-6xl mb-20">Mobile Projects</h1>
                    <div className="grid grid-cols-3 gap-12 ">
                        <ProjectCard 
                            image="\assets\parkease-img.png"
                            title="Parkease"
                            description="A Parking Reservation Application using Flutter. This project was a finalist during the Xinyx Design Thinking Competition"
                        />
                        <ProjectCard 
                            image="\assets\attendance-tracker.png"
                            title="ICpEP Attendance Tracker"
                            description="Comprehensive attendance management system for USTP CPE students, enabling real-time tracking during events, seminars, and academic activities. Features include automated check-ins, and attendance reports."
                        />
                    </div>
                </div>
        
            </RevealOnScroll>
        </section>
    )
}

export default ProjectsSection

