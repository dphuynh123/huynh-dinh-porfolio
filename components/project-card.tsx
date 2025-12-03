"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { TechBadge } from "./tech-icons"

interface Project {
  id: number
  period: string
  company: string
  title: string
  description: string
  responsibilities: string[]
  outcomes: string[]
  techStack: string[]
}

interface ProjectCardProps {
  project: Project
  isLeft: boolean
}

export function ProjectCard({ project, isLeft }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn(
        "group relative bg-card border border-border rounded-lg p-6 transition-all duration-300",
        "hover:border-primary/50 hover:bg-card/80",
        isLeft ? "md:text-left" : "md:text-left",
      )}
    >
      {/* Period Badge */}
      <span className="text-xs text-muted-foreground font-mono">{project.period}</span>

      {/* Company */}
      <div className="flex items-center gap-2 mt-2 mb-3">
        <Building2 size={16} className="text-primary" />
        <span className="text-sm font-medium text-foreground">{project.company}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      {/* Expand Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        {isExpanded ? "Hide details" : "View details"}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
          {/* Responsibilities */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Responsibilities</h4>
            <ul className="space-y-2">
              {project.responsibilities.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Project Outcomes</h4>
            <ul className="space-y-2">
              {project.outcomes.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
