import { useState } from "react";
import { toast } from "sonner";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Here you would typically send the data to your backend
            console.log("Form submitted:", formData);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            toast.success("Message sent successfully!");
        } catch (error) {
            setSubmitStatus("error");
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-light border border-gray-600 rounded-lg focus:border-primary/80 focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-white placeholder-gray-400"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-light border border-gray-600 rounded-lg focus:border-primary/80 focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-white placeholder-gray-400"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-light border border-gray-600 rounded-lg focus:border-primary/80 focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="What is this about?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-light border border-gray-600 rounded-lg focus:border-primary/80 focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Tell me about your project..."
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 rounded-full transition-colors duration-300 font-semibold
                            bg-transparent text-primary border border-primary/40
                            hover:bg-primary hover:text-white
                            disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                Sending...
                            </span>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
} 