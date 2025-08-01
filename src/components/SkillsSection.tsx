interface Skill {
    icon?: string;
    name: string;
    color: string;
    img?: string;
}

const skills: Skill[] = [
    { icon: "fab fa-js-square", name: "JavaScript", color: "text-yellow-400" },
    { icon: "fab fa-python", name: "Python", color: "text-blue-400" },
    { icon: "fab fa-react", name: "React", color: "text-cyan-400" },
    { icon: "fab fa-html5", name: "HTML", color: "text-orange-400" },
    { icon: "fab fa-css3-alt", name: "CSS", color: "text-blue-500" },
    { 
        name: "TypeScript", 
        color: "text-blue-600", 
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-dark animate-fade-in">
            <div className="container mx-auto px-6">
                <SectionTitle />
                <SkillsGrid />
            </div>
        </section>
    );
}

function SectionTitle() {
    return (
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-primary animate-text-glow">
            Skills & Technologies
        </h2>
    );
}

function SkillsGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>
    );
}

function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className="skill-card group">
            <div className="bg-light p-8 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-primary/25 group animate-fade-in">
                <SkillIcon skill={skill} />
                <h3 className="font-semibold">{skill.name}</h3>
            </div>
        </div>
    );
}

function SkillIcon({ skill }: { skill: Skill }) {
    if (skill.img) {
        return (
            <img 
                src={skill.img} 
                alt={`${skill.name} Logo`} 
                className="mx-auto mb-4 w-10 h-10 group-hover:animate-bounce" 
            />
        );
    }

    return (
        <i className={`${skill.icon} text-[40px] ${skill.color} mb-4 group-hover:animate-bounce`}></i>
    );
}