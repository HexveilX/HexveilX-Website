import ContactForm from "../ContactForm";

interface ContactInfo {
    icon: string;
    title: string;
    description: string;
    link: string;
}

const contacts: ContactInfo[] = [
    {
        icon: "fab fa-github",
        title: "GitHub",
        description: "Check out my repositories",
        link: "https://github.com/HexveilX"
    },
    {
        icon: "fab fa-discord",
        title: "Discord",
        description: "@Zezolz",
        link: "https://discord.com/users/Zezolz"
    },
    {
        icon: "fas fa-envelope",
        title: "Email",
        description: "zyadalaa325@gmail.com",
        link: "mailto:zyadalaa325@gmail.com"
    }
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-dark animate-fade-in">
            <div className="container mx-auto px-6 text-center">
                <SectionTitle />
                <SectionDescription />
                <ContactContent />
            </div>
        </section>
    );
}

function SectionTitle() {
    return (
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text-accent animate-text-glow">
            Contact
        </h2>
    );
}

function SectionDescription() {
    return (
        <div className="max-w-6xl mx-auto">
            <p className="text-xl text-gray-300 mb-12">
                Ready to collaborate on your next project? Let's build something amazing together!
            </p>
        </div>
    );
}

function ContactContent() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center md:items-center md:justify-center">
                <ContactCards />
                <ContactFormWrapper />
            </div>
        </div>
    );
}

function ContactCards() {
    return (
        <div className="flex-shrink-0 w-full md:w-auto md:max-w-xs grid grid-cols-1 gap-8">
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))}
        </div>
    );
}

function ContactCard({ contact }: { contact: ContactInfo }) {
    return (
        <a 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card group bg-dark p-8 rounded-2xl hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 active:scale-95"
        >
            <i className={`${contact.icon} text-5xl text-primary mb-4 group-hover:animate-bounce`}></i>
            <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
            <p className="text-gray-300">{contact.description}</p>
        </a>
    );
}

function ContactFormWrapper() {
    return (
        <div className="flex-1 w-full max-w-2xl">
            <ContactForm />
        </div>
    );
}