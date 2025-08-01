interface Project {
    icon: string;
    title: string;
    description: string;
    gradient: string;
    github: string;
    demo?: string;
}

const projects: Project[] = [
    {
        icon: "fas fa-calculator",
        title: "Calculator Web App",
        description: "A simple and responsive calculator web app built using React and Tailwind CSS.",
        gradient: "from-pink-500 to-yellow-500",
        github: "https://github.com/HexveilX/calculatorwebapp",
        demo: "https://calculatorwebapp-lake.vercel.app/"
    },
    {
        icon: "fas fa-tasks",
        title: "Daily Task Manager",
        description: "A modern and minimal web app to help users manage their daily tasks, stay organized, and boost productivity.",
        gradient: "from-blue-500 to-green-400",
        github: "https://github.com/HexveilX/Daily-Task-Manager",
        demo: "https://daily-task-manager-lemon.vercel.app/"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <SectionTitle />
                <ProjectsGrid />
            </div>
        </section>
    );
}

function SectionTitle() {
    return (
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-secondary animate-text-glow">
            My Projects
        </h2>
    );
}

function ProjectsGrid() {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            className="project-card glass-dark rounded-3xl overflow-hidden shadow-glow-lg hover:shadow-glow-xl hover-lift transition-all duration-300 border border-primary/10 backdrop-blur-md flex flex-col group"
            style={{ minHeight: 370 }}
        >
            <ProjectHeader project={project} />
            <ProjectContent project={project} />
        </div>
    );
}

function ProjectHeader({ project }: { project: Project }) {
    return (
        <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden animate-gradient-shift`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <i className={`${project.icon} text-6xl text-white drop-shadow-lg relative z-10 group-hover:animate-bounce-gentle`}></i>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>
    );
}

function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-2 gradient-text-primary text-shadow">
                    {project.title}
                </h3>
                <p className="text-gray-500 mb-6 text-base leading-relaxed">
                    {project.description}
                </p>
            </div>
            <ProjectLinks project={project} />
        </div>
    );
}

function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className="flex gap-3 mt-auto">
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 font-semibold
                    bg-transparent text-primary border border-primary/40
                    hover:bg-primary hover:text-white hover-scale
                    active:scale-98 focus-ring"
            >
                <i className="fab fa-github mr-2"></i>
                GitHub
            </a>
            {project.demo && (
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 font-semibold
                        bg-transparent text-accent border border-accent/40
                        hover:bg-accent hover:text-white hover-scale
                        active:scale-98 focus-ring"
                >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                </a>
            )}
        </div>
    );
}