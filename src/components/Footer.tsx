export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-dark via-dark/80 to-primary/10 border-t border-primary/20 py-6 mt-12">
            <div className="container mx-auto px-6 text-center">
                <p className="text-center text-gray-400 text-shadow">
                    © 2025 HexveilX – Built with{" "}
                    <span className="gradient-text-primary">React</span>,{" "}
                    <span className="gradient-text-secondary">Convex</span>, and{" "}
                    <span className="text-red-500 animate-soft-pulse">❤️</span>
                </p>
            </div>
        </footer>
    );
}