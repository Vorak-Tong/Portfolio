import SectionWrapper from '../components/SectionWrapper';

const Education = () => {
    return (
        <SectionWrapper id="education" className="bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Education
                        </h2>
                        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Education Card */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">
                                        Bachelor of Computer Science
                                    </h3>
                                    <span className="inline-block px-3 py-1 text-sm font-medium text-sky-400 bg-sky-500/10 rounded-full">
                                        2023 - Present
                                    </span>
                                </div>

                                <p className="text-lg text-sky-400 font-medium mb-4">
                                    Cambodia Academy of Digital Technology (CADT)
                                </p>

                                <p className="text-slate-400">
                                    Currently pursuing a comprehensive Computer Science degree with focus on software engineering,
                                    web development, database systems, and modern programming paradigms. Actively engaged in
                                    practical projects and internship opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
