"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedProjects(newExpanded)
  }

  const truncateDescription = (description: string, maxLength: number = 120) => {
    if (description.length <= maxLength) return description
    return description.substring(0, maxLength).trim() + "..."
  }

  const shouldShowReadMore = (description: string) => {
    return description.length > 120
  }

  const projects = [
    {
      title: "AI Gmail Reply Assistant",
      category: "Web Application",
      description:
        "An AI-powered Gmail assistant that automatically generates contextual email replies using Google's Gemini 2.0 Flash model. Features OAuth2 authentication, real-time email sync, customizable tone settings, and a complete approval workflow for intelligent email management.",
      technologies: ["Next.js 14", "TypeScript", "Google Gemini AI", "Gmail API", "Supabase", "OAuth2"],
      liveUrl: "https://gmail-assistant.hamrouni.me",
      githubUrl: "#",
      image: "/portfolio/gmailreply.png",
    },
    {
      title: "AI GitHub Portfolio Analyzer",
      category: "Web Application",
      description:
        "Built a web app analyzing GitHub repositories, providing AI-driven insights on code quality, commits, and contributors. Developed real-time dashboards and visualizations for repository metrics using scalable back-end APIs.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini AI", "GitHub API"],
      liveUrl: "https://github-analyzerr.vercel.app",
      githubUrl: "https://github.com/nesrinehamrouni/github-analyzer",
      image: "/portfolio/githubanalyzer.jpg",
    },
    {
      title: "Portfolio Website",
      category: "Web Application",
      description:
        "A modern, responsive portfolio website built with Next.js and TypeScript, featuring a clean design and smooth animations. Showcases my projects, skills, and experience with a focus on user experience and performance optimization.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/portfolio/portfolio.jpg",
    },
    {
      title: "Move2Cloud Chatbot",
      category: "Web Application",
      description:
        "Developed a multi-cloud management platform with a natural language chatbot interface. Built a secure, scalable web app using Next.js for the frontend and Spring Boot for the backend, ensuring secure and scalable operations across 3 different cloud providers. Implemented encrypted session tracking, cloud account linking, and a real-time cloud news dashboard.",
      technologies: ["Next.js", "Spring Boot", "Multi-cloud", "Natural Language Processing", "Real-time Dashboard"],
      image: "/portfolio/m2cchatbot.png",
    },
    {
      title: "NinjaPulse",
      category: "Web Application",
      description:
        "Developed a website listing organizations, using Angular and Node.js as fullstack technologies to help people in need. Used Docker to containerize the application.",
      technologies: ["Angular", "Node.js", "Docker", "TypeScript", "MongoDB"],
      liveUrl: "https://ninjapulse.vercel.app",
      githubUrl: "https://github.com/nesrinehamrouni/NinjaPulse-DonationSiteDirectory",
    },
    {
      title: "StageHub",
      category: "Web Application",
      description:
        "Dedicated to ENICAR administration to automate the internship assignment process for the school. Developed a platform using Angular and Spring Boot in collaboration with a team of 5 people.",
      technologies: ["Angular", "Spring Boot", "Java", "TypeScript", "MySQL"],
      githubUrl: "https://github.com/nesrinehamrouni/GestionStage",
    },
    {
      title: "Sketchify",
      category: "Desktop Application",
      description:
        "Designed a robust desktop application using Java to create UML diagrams. Implemented the user interface using JavaFX ensuring an elegant and intuitive design.",
      technologies: ["Java", "JavaFX", "UML", "Desktop App"],
      githubUrl: "https://github.com/raymanaa/sketchify-fx",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => {
          const isExpanded = expandedProjects.has(index)
          const shouldTruncate = shouldShowReadMore(project.description)
          const displayDescription = isExpanded || !shouldTruncate 
            ? project.description 
            : truncateDescription(project.description)

          return (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border group hover:shadow-lg transition-all duration-300"
            >
              {project.image && (
                <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-muted/20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover sm:object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs px-2 py-1">
                    {project.category}
                  </Badge>
                  <div className="flex gap-1 sm:gap-2">
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" className="h-7 w-7 sm:h-8 sm:w-8 p-0" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="secondary" className="h-7 w-7 sm:h-8 sm:w-8 p-0" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                          <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-foreground mb-3 leading-tight">
                  {project.title}
                </h3>
                <div className="mb-4">
                  {/* Desktop: Always show full description */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed hidden md:block">
                    {project.description}
                  </p>
                  
                  {/* Mobile/Tablet: Show truncated with read more */}
                  <div className="md:hidden">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {displayDescription}
                    </p>
                    {shouldTruncate && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(index)}
                        className="mt-2 p-0 h-auto text-accent hover:text-accent/80 font-medium"
                      >
                        {isExpanded ? (
                          <>
                            Read less <ChevronUp className="h-3 w-3 ml-1" />
                          </>
                        ) : (
                          <>
                            Read more <ChevronDown className="h-3 w-3 ml-1" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
