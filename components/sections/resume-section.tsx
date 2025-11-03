import type React from "react"
import { Briefcase, GraduationCap, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ResumeSection() {
  const experiences = [
    {
      title: "Freelance Full-Stack Engineer",
      company: "Upwork — Remote",
      period: "Oct 2024",
      description:
        "Collaborated with the client to design and manage the system architecture, ensuring smooth integration, scalability, and reliable performance.<br><br>" +
        "✨ Highlights:<br><br>" +
        "• Integrated WhatsApp messaging via Baileys and Node.js, allowing users to connect their WhatsApp accounts through QR code scanning and send messages directly from the app.<br><br>" +
        "• Developed an internal chat system using Java (Spring Boot) for the backend to enable real-time messaging between users."
    },
    {
      title: "Software Engineer Intern",
      company: "Move2Cloud — Remote, France",
      period: "Feb 2025 – June 2025",
        description:
          "I worked on a multi-cloud management platform powered by a natural language chatbot. I designed and built the full web app using Next.js and Spring Boot, enabling users to manage cloud resources like EC2 VMs across 3 cloud providers securely and at scale.<br><br>" +
          "✨ Highlights:<br><br>" +
          "• Built real-time dashboards for cloud news & updates.<br><br>" +
          "• Implemented encrypted sessions and cloud account linking for reliability.<br><br>" +
          "• Engineered DynamoDB schemas and tables for efficient storage of accounts, sessions, and activity logs.<br><br>" +
          "• Applied prompt engineering to optimize the AI chatbot's responses."
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

  const skills = [
    // Programming Languages
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "C",
    "Dart",
    "PHP",
    
    // Frontend Frameworks
    "Next.js",
    "React",
    "Angular",
    "Flutter",
    "React Native",
    
    // Backend & Databases
    "Spring",
    "Spring Boot",
    "Node.js",
    "MySQL",
    "DynamoDB",
    "Supabase",
    "MongoDB",
    "Firebase",
    "Laravel",
    
    // Cloud & DevOps
    "AWS",
    "Azure",
    "Docker",
    "Prometheus",
    
    // Data & Analytics
    "Databricks",
    "Azure Data Factory",
    "Azure Synapse",
    
    // Tools & Others
    "Linux",
    "Figma"
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

      {/* Skills Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Code className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        </div>
        
        <div className="space-y-6">
          {/* Programming Languages */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "JavaScript", "TypeScript", "Python", "Dart", "C++", "C"].map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Frontend & Mobile */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Frontend & Mobile</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Angular", "Flutter","React", "React Native"].map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend & Databases */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Backend & Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["Spring Boot", "Spring", "Node.js", "MongoDB", "MySQL", "Firebase", "DynamoDB"].map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Azure", "Docker", "Prometheus"].map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Data & Analytics */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Data & Analytics</h3>
            <div className="flex flex-wrap gap-2">
              {["Databricks", "Azure Data Factory", "Azure Synapse"].map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              {["Linux", "Figma"].map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
