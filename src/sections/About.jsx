import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    const highlights = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: 'Full-Stack Development',
            description: 'Building end-to-end web applications with modern frameworks'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Mobile Development',
            description: 'Creating cross-platform mobile apps with Flutter'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Problem Solving',
            description: 'Designing clean, efficient solutions to complex challenges'
        }
    ];

    return (
        <SectionWrapper id="about">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        {/* Bio Paragraph */}
                        <p className="text-lg text-slate-300 leading-relaxed text-center">
                            I'm a passionate web developer and 3rd-year Computer Science student at the Cambodia Academy of Digital Technology.
                            I specialize in building modern, responsive web applications using React, Node.js, and various database technologies.
                            My journey in software development has equipped me with both frontend and backend skills, along with mobile app development experience using Flutter.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-3 gap-6 mt-12">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10"
                                >
                                    <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
