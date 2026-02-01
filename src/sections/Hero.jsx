import Button from '../components/Button';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight fade-in-left visible stagger-1">
                                Hi, I'm{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                                    Tong Virak
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-slate-300 font-medium fade-in-left visible stagger-2">
                                Web Developer
                            </p>
                            <p className="text-lg text-slate-400 leading-relaxed fade-in-left visible stagger-3">
                                3rd-year Computer Science student passionate about building elegant web solutions.
                                I create responsive, user-friendly applications with modern technologies.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 fade-in-left visible stagger-4">
                            <Button
                                variant="primary"
                                href="#projects"
                                ariaLabel="View my projects"
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                href="/cv.pdf"
                                ariaLabel="Download my CV"
                                download
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className="flex justify-center md:justify-end fade-in-right visible stagger-2">
                        <div className="relative">
                            {/* Profile Image Circle */}
                            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-sky-400/20 to-blue-600/20 p-1 shadow-2xl shadow-sky-500/20">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-slate-700">
                                    {/* Profile placeholder */}
                                    <img
                                        src="/images/profile1.png"
                                        alt="Tong Virak - Web Developer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Status Badge */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-sky-500 text-white rounded-2xl shadow-lg shadow-sky-500/50 whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                    </span>
                                    <span className="font-medium text-sm">Available for Internship</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
