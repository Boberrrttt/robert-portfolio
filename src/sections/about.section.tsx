import RevealOnScroll from "@/components/RevealOnScroll"

const AboutSection = () => {
    return (
        <section className="flex text-white justify-center flex-row items-center h-screen" id="about">
            <RevealOnScroll>
                <div className="flex gap-20 items-center">
                    <img src="/assets/1x1.jpg" alt="robert-img" className="rounded-full w-[25rem] " />
                    <div>
                        <h1>Hi there,</h1>
                        <p className="font-bold text-8xl">I'm Robert!</p>
                        <p className="mt-4 max-w-xl text-lg">
                            I'm a Computer Engineering student with hands-on experience in software development and the IT industry.
                            I'm passionate about programming, and I love building websites and mobile applications.
                            I thrive on learning new technologies and find great satisfaction in solving complex problems.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default AboutSection
