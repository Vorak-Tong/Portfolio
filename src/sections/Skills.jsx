import SectionWrapper from '../components/SectionWrapper';
import { skillsData } from '../data/skills';

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Skills & Technologies
                        </h2>
                        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Skills Grid */}
                    <div className="space-y-12">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <div key={category} className="space-y-6">
                                {/* Category Title */}
                                <h3 className="text-xl font-semibold text-sky-400 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                                    {category}
                                </h3>

                                {/* Skill Cards Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center gap-3"
                                        >
                                            {/* Logo */}
                                            <div className="w-12 h-12 flex items-center justify-center">
                                                <img
                                                    src={skill.logo}
                                                    alt={`${skill.name} logo`}
                                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                                    style={{ filter: 'brightness(0.9)' }}
                                                    onError={(e) => {
                                                        // Fallback if image fails to load
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </div>

                                            {/* Skill Name */}
                                            <span className="text-xs font-medium text-slate-300 text-center group-hover:text-sky-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
