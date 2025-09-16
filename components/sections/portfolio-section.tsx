import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Portfolio Website",
      category: "Web Application",
      description:
        "A modern, responsive portfolio website built with Next.js and TypeScript, featuring a clean design and smooth animations. Showcases my projects, skills, and experience with a focus on user experience and performance optimization.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vite"],
      liveUrl: "#",
      githuburl: "#",
    },
    {
      title: "Move2Cloud Chatbot",
      category: "Web Application",
      description:
        "Developed a multi-cloud management platform with a natural language chatbot interface. Built a secure, scalable web app using Next.js for the frontend and Spring Boot for the backend, ensuring secure and scalable operations across 3 different cloud providers. Implemented encrypted session tracking, cloud account linking, and a real-time cloud news dashboard.",
      technologies: ["Next.js", "Spring Boot", "Multi-cloud", "Natural Language Processing", "Real-time Dashboard"],
    },
    {
      title: "StageHub",
      category: "Web Application",
      description:
        "Dédié à l'administration de l'ENICAR afin d'automatiser le processus des affectations des stages de l'école. Développement d'une plateforme en Angular et Spring Boot en collaboration avec une équipe de 5 personnes.",
      technologies: ["Angular", "Spring Boot", "Java", "TypeScript", "MySQL"],
      githubUrl: "https://github.com/nesrinehamrouni/GestionStage",
    },
    {
      title: "Sketchify",
      category: "Desktop Application",
      description:
        "Conception d'une application desktop robuste utilisant Java pour créer des diagrammes UML. Mise en œuvre de l'interface utilisateur en utilisant JavaFX assurant un design élégant et intuitif.",
      technologies: ["Java", "JavaFX", "UML", "Desktop App"],
      githubUrl: "https://github.com/raymanaa/sketchify-fx",
    },
    {
      title: "NinjaPulse",
      category: "Web Application",
      description:
        "Développement d'un site répertoriant les organisations, en utilisant Angular et Node.js comme technologies fullstack pour aider les personnes dans le besoin. Utilisation de Docker pour containeriser l'application.",
      technologies: ["Angular", "Node.js", "Docker", "TypeScript", "MongoDB"],
      liveUrl: "https://ninjapulse.vercel.app",
      githubUrl: "https://github.com/nesrinehamrouni/NinjaPulse-DonationSiteDirectory",
    },
    {
      title: "WiBlog",
      category: "Mobile App",
      description:
        "BlogApp is a mobile blogging platform built with Flutter, Laravel, Firebase, and SSMS, enabling users to create, manage, and share personal blogs seamlessly. It features real-time content sync, user authentication, notifications, and a rich text editor.",
      technologies: ["Flutter", "Laravel", "Firebase", "SSMS", "Dart"],
      githubUrl: "https://github.com/nesrinehamrouni/BlogApp",
    },
    {
      title: "Listify",
      category: "Mobile App",
      description:
        "Listify is a mobile to-do list app built with Flutter, Dart, and Firebase, designed to help users manage tasks efficiently. It offers features like real-time sync across devices, reminders, notifications, offline support, and a sleek UI with light and dark modes.",
      technologies: ["Flutter", "Dart", "Firebase", "Mobile App"],
      githubUrl: "https://github.com/nesrinehamrouni/listify",
    },
    {
      title: "Leaf Disease Detection App",
      category: "Mobile App",
      description:
        "A plant disease detection app built with Flutter and Groq for API-driven analysis. Users can quickly identify plant issues and receive tailored care recommendations to enhance their gardening efforts.",
      technologies: ["Flutter", "Groq API", "Machine Learning", "Dart"],
      githubUrl: "#",
    },
    {
      title: "Invoice Management App",
      category: "Mobile App",
      description:
        "A mobile application designed to streamline invoice and payment management for clients, featuring real-time chat for effective communication. Built with Flutter, Laravel and Firebase for real-time notifications.",
      technologies: ["Flutter", "Laravel", "Firebase", "Real-time Chat"],
      githubUrl: "https://github.com/nesrinehamrouni/divaDashboard",
    },
    {
      title: "Pong Game",
      category: "Desktop Game",
      description:
        "A classic Pong game implementation built with Java, showcasing object-oriented programming principles and design patterns. Features smooth gameplay mechanics, collision detection, and an intuitive user interface.",
      technologies: ["Java", "Swing", "Design Patterns", "OOP", "Game Development"],
      githubUrl: "https://github.com/nesrinehamrouni/ponGame",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Creative Showcase</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
        <p className="text-muted-foreground leading-relaxed">
          A collection of my recent work spanning web development, mobile applications, and creative digital
          experiences. Each project represents a unique challenge and creative solution.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-card border-border group hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
