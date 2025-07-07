import React from "react";

const testimonials = [
    {
        name: "Sarah Ahmed",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Amazing work! The website is fast, modern, and exceeded my expectations. Highly recommended!"
    },
    {
        name: "Mohamed Ali",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Professional and creative. Communication was great and the result is outstanding."
    },
    {
        name: "Lina Samir",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Loved the animations and the clean design. Will definitely work together again!"
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" data-aos="fade-up" className="py-20 bg-darker">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    What Clients Say
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-light/80 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
                            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-4 border-primary shadow" />
                            <p className="text-lg text-gray-700 mb-4">“{t.text}”</p>
                            <span className="font-bold text-primary">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 