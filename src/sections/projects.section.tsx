import ProjectCard from "@/components/ProjectCard"
import RevealOnScroll from "@/components/RevealOnScroll"

const ProjectsSection = () => {
    return (
        <section className="flex justify-center text-white" id="projects">
            <RevealOnScroll>
                <div className="flex h-full flex-col items-center px-7">
                    <h1 className="font-bold text-3xl pt-20 md:text-4xl lg:text-6xl mb-16 md:mb-20">Web Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-items-center">
                        <ProjectCard
                         image="/assets/Screenshot 2025-06-08 193309.png"
                         title="Forest Monitoring"
                         description="Final project for our Microprocessors course: a forest monitoring system using an ESP32-CAM for real-time sound and video feedback."
                         />
                        <ProjectCard 
                            image="/assets/Screenshot 2025-06-08 193650.png"
                            title="Predictive Maintenance"
                            description="Built with React (frontend) and Flask (backend), this app uses a trained AI model to predict the likelihood of machine failure."
                        />
                        <ProjectCard 
                            image="/assets/Screenshot 2025-06-08 194133.png"
                            title="Thesis Routing System"
                            description="Streamlines thesis paper evaluation for academic advisers and panel reviewers, providing secure access for comprehensive paper assessment"
                        />
                        <ProjectCard 
                            image="/assets/Screenshot 2025-06-08 194451.png"
                            title="WIS_CE"
                            description="Customized inventory management solution streamlining warehouse operations with real-time tracking and automated stock management"
                        />
                        <ProjectCard 
                            image="/assets/Screenshot 2025-06-09 220227.png"
                            title="CpExpress"
                            description="Social platform fostering community engagement among USTP Computer Engineering students, providing a dedicated space for expression and collaboration"
                            url="https://express.icpepse-ustp.org/"
                        />
                        <ProjectCard 
                            image="/assets/Screenshot 2025-06-10 120233.png"
                            title="Valcardi"
                            description="Anonymous Valentine's Day love letter platform with secure message delivery and a clean interface."
                            url="https://valcardi.vercel.app/"
                        />
                    </div>

                    <h1 className="font-bold text-3xl pt-20 md:text-4xl lg:text-6xl mb-16 md:mb-20">Mobile Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-items-center">
                        <ProjectCard 
                            image="/assets/parkease-img.png"
                            title="Parkease"
                            description="A Parking Reservation Application using Flutter. This project was a finalist during the Xinyx Design Thinking Competition"
                        />
                        <ProjectCard 
                            image="/assets/attendance-tracker.png"
                            title="ICpEP Attendance Tracker"
                            description="Real-time attendance tracking system for USTP CPE students with automated check-ins and reporting."
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default ProjectsSection

