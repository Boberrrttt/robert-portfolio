import ProjectCard from "@/components/ProjectCard"
import RevealOnScroll from "@/components/RevealOnScroll"

const ProjectsSection = () => {
    return (
        <section className="flex justify-center text-white bg-brand-primary py-16 md:py-24" id="projects" aria-labelledby="projects-heading">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
                <RevealOnScroll>
                    <header className="text-center mb-14 md:mb-16">
                        <h2 id="projects-heading" className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Projects</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">Web and mobile apps I&apos;ve built—from event platforms to AI tools and community apps.</p>
                    </header>
                    <h3 className="font-semibold text-xl md:text-2xl text-white/90 mb-8 md:mb-10">Web</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 place-items-stretch mb-20 md:mb-24">
                        <ProjectCard
                         image="/assets/eventure.png"
                         title="Eventure"
                         description="An event management platform built with React and Node.js, featuring flexible event creation, user registration, and a dynamic dashboard for organizers."
                        />

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

                    <h3 className="font-semibold text-xl md:text-2xl text-white/90 mb-8 md:mb-10">Mobile</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 place-items-stretch">
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
                        <ProjectCard 
                          image="/assets/timpla.jpg"
                          title="Timpla App"
                          description="Mealkit ordering app (React Native & Node.js) with browse, filter, and checkout. Available on App Store and Google Play."
                        />
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}

export default ProjectsSection

