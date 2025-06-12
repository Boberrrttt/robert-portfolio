import RevealOnScroll from "@/components/RevealOnScroll"

const AboutSection = () => {
    return (
        <section className="flex text-white justify-center flex-row items-center h-screen" id="about">
            <RevealOnScroll>
            <div className="flex gap-20 items-center justify-center">
                <img src="/assets/1x1.jpg" alt="robert-img" className="rounded-full hidden md:flex w-[25rem]" />
                <div className="p-7">
                    <h1 className="text-lg">Hi there,</h1>
                    <p className="mt-2 font-bold text-4xl md:text-8xl">I&apos;m Robert!</p>
                    <p className="mt-4 max-w-xl text-sm md:text-lg text-gray-300 text-justify">
                        I&apos;m a <span className="text-blue-300 font-semibold">Computer Engineering student</span> with hands-on experience in software development and the IT industry.
                        I&apos;m passionate about <span className="text-blue-300 font-semibold">programming</span>, and I love building websites and mobile applications.
                        I thrive on learning new technologies and find great satisfaction in solving complex problems.
                    </p>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}

export default AboutSection
