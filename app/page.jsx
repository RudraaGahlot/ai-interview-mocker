"use client";
import React from "react";
import Header from "./dashboard/_components/Header";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

function Page({ children }) {
  const router = useRouter(); // Hook for routing

  // Function to handle navigation
  const navigateToDashboard = () => {
    router.push("/dashboard"); // Navigate to the dashboard
  };

  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>

      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Your Personal AI Interview Coach
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Double your chances of landing that job offer with our AI-powered
          interview preparation tool
        </p>
        <div className="mt-14 flex justify-center gap-4">
          <button
            onClick={navigateToDashboard} // Add onClick handler
            className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700"
          >
            Get Started
          </button>
        </div>
      </header>

      <section className="py-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          How it Works?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Give mock interviews in just 3 simple easy steps
        </p>
        <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-purple-600 text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Write prompt for your form
            </h3>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-purple-600 text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Edit Your Form
            </h3>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-purple-600 text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Share & Start Accepting Responses
            </h3>
          </div>
        </div>
        
        <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="text-center">
          <p className="text-lg font-semibold">Connect with me</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/rudragahlot/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaLinkedin size={24} /> {/* LinkedIn Icon */}
              <span>LinkedIn</span>
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/RudraaGahlot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaGithub size={24} /> {/* GitHub Icon */}
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>

      </section>
    </div>
  );
}

export default Page;
