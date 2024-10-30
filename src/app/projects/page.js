"use client"
const page = () => {

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built using the MERN stack. Features include product listings, shopping cart, and payment gateway integration.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: "#", // Replace with actual project link
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js showcasing my skills, experience, and projects. Fully responsive with a modern design.",
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "#", // Replace with actual project link
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "ChatGPT Integration",
      description:
        "A web application with ChatGPT APIs integrated to provide AI-powered customer support and chat functionality.",
      techStack: ["React.js", "Node.js", "OpenAI API"],
      link: "#", // Replace with actual project link
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for task scheduling with features like user authentication, notifications, and task reminders.",
      techStack: ["React", "Express.js", "MongoDB", "JWT"],
      link: "#", // Replace with actual project link
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12 max-md:text-2xl max-sm:text-xl">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${project.bgColor}`}
            >
              <h3 className={`text-2xl font-semibold ${project.textColor} max-sm:text-xl`}>
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <ul className="mt-4 space-y-1">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    🔹 {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page