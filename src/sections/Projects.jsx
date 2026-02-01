import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Featured Projects
                        </h2>
                        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                            Here are some of my recent projects showcasing my skills in web and mobile development.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
