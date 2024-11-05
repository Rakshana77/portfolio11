// src/Skills.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const skills = [
    { name: "HTML5", level: "Intermediate" },
    { name: "CSS3", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "MUI", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Beginner" },
    { name: "MySQL", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className="py-20 px-5 bg-primary text-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-secondary inline-block mb-4">Skills</h1>
        <p>Here are some of the technical skills I possess. I've developed expertise in various technologies.</p>
      </div>

      <Slider {...settings} className="max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="p-4">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-secondary hover:text-white">
              <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
              <p className="text-gray-600">Level: {skill.level}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
