const ContactsSection = () => {
    return (
        <section id="contact" className="pt-64 pb-40 bg-brand-primary  from-blue-900 to-blue-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-12 text-center">Get in Touch</h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-gray-300 mb-8 md:mb-12">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
                        <a 
                            href="https://github.com/Boberrrttt" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors w-full md:w-auto"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white text-sm md:text-base">GitHub</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/robert-salvo-2513a9283/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors w-full md:w-auto"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white text-sm md:text-base">LinkedIn</span>
                        </a>
                        <a 
                            href="https://www.facebook.com/robert.salvo.376/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors w-full md:w-auto"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                            </svg>
                            <span className="text-white text-sm md:text-base">Facebook</span>
                        </a>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-300 mb-4">Send me an email at:</p>
                        <a 
                            href="mailto:salvo.robertroy@gmail.com" 
                            className="inline-flex items-center gap-2 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6 text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
                            <span className="text-white">salvo.robertroy@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;
