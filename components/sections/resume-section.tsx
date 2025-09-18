import type React from "react"
import { Briefcase, GraduationCap } from "lucide-react"

export function ResumeSection() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Move2Cloud — Remote, France",
      period: "Feb 2025 – June 2025",
        description:
          "I worked on a multi-cloud management platform powered by a natural language chatbot. I designed and built a secure, scalable web app with Next.js and Spring Boot, supporting integrations across 3 different cloud providers.<br><br>" +
          "✨ Highlights:<br><br>" +
          "• Built real-time dashboards for cloud news & updates.<br><br>" +
          "• Implemented encrypted sessions and cloud account linking for reliability.",
    },
    {
      title: "Mobile Engineer Intern",
      company: "Simsoft Technologies — Sousse, Tunisia",
      period: "June 2024 – Aug 2024",
        description:
          "At Simsoft, I developed a mobile application for Sotufab to streamline invoice management, which cut processing time by 30%.<br><br>" +
          "✨ Highlights:<br><br>" +
          "• Integrated a chat feature with Flutter, Laravel, and Firebase, improving collaboration for 50+ employees.",
    },
    {
      title: "Mobile Engineer Intern",
      company: "Satoripop — Sousse, Tunisia",
      period: "Aug 2023 – Aug 2023",
      description:
        "I explored mobile app development by creating a To-do list app in Flutter and a currency converter in React Native, focusing on clean UI and intuitive design.",
    },
  ]

  const education = [
    {
      degree: "Software Engineer Degree",
      school: "National School of Engineers of Carthage",
      period: "2022 — 2025",
    },
    {
      degree: "Preparatory Cycle for Engineering Studies",
      school: "Preparatory Institute for Engineering Studies of Monastir",
      period: "2020 — 2022",
    },
  ]


  const TimelineItem = ({
    children,
    isLast = false,
  }: {
    children: React.ReactNode
    isLast?: boolean
  }) => (
    <div className="relative flex">
      {!isLast && <div className="absolute left-4 top-8 w-0.5 h-full bg-accent"></div>}

      <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1">
        <div className="w-2 h-2 bg-background rounded-full"></div>
      </div>

      {/* Content */}
      <div className="ml-6 flex-1 pb-8">{children}</div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Experience Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} isLast={index === experiences.length - 1}>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                <p className="text-purple-600 font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                <p 
                  className="text-muted-foreground leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        <div className="space-y-0">
          {education.map((edu, index) => (
            <TimelineItem key={index} isLast={index === education.length - 1}>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-purple-600 font-medium mb-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>

              </div>
            </TimelineItem>
          ))}
        </div>
      </div>

    </div>
  )
}
