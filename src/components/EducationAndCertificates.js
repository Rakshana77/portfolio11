// src/EducationAndCertificates.js
import React from "react";

export default function EducationAndCertificates() {
  const education = [
    {
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      institution: "Sethu Institute of Technology",
      year: "2017-2021",
      description: "CGPA:9.3",
    },
    
     {
      degree: "Internship",
      institution: "BSNL",
      year: "2019",
      description:"Attend training on BROAD BAND TECHNICIAN from 15.05.2019 to 29.06.2019"
    },
  ];

    const certificates = [
  {
      title: "Full Stack Development Programer",
      provider: "GUVI Academy",
      year: "2024",
      link: "https://drive.google.com/file/d/1bd3mTKmUTX-SrUvXSryqKL998NkJ4Q22/view?usp=sharing",
    },
   
    {
      title: "Project Online Contest",
      provider: "Texas Instruments",
      year: "2019",
      link: "https://drive.google.com/file/d/1AOqWGp_ybZrP-q0JNYv2M2yFC4HyvrFR/view?usp=sharing"
    },
  ];

  return (
    <section id="education-certificates" className="py-20 px-5 bg-primary text-white">
      <div className="max-w-5xl mx-auto">

        {/* Education Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold border-b-4 border-secondary inline-block mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-sm text-gray-500 mb-2">{edu.institution} - {edu.year}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold border-b-4 border-secondary inline-block mb-4">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{cert.provider} - {cert.year}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary hover:underline"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
