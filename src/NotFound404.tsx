import React from "react";

export default function NotFound404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark via-primary to-accent text-white p-8">
      <h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-200 mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.<br />
        Try going back to the homepage.
      </p>
      <a
        href="/"
        className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 hover:shadow-primary/30 transition-all duration-300"
      >
        Go Home
      </a>
    </div>
  );
} 