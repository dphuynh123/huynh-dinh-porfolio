"use client"

import { ProjectCard } from "./project-card"

const projects = [
  {
    id: 11,
    period: "2025 – ...",
    company: "Solo Builder",
    title: "",
    description:
      "To be an solo builder servings products that helps small business owners to automate their business processes and workflows.",
    responsibilities: [
      "Business requirement gathering and analysis",
      "Setup AI model integration",
      "End to end feature development",
      "Infrastructure, Architecture setup and deployment",
      "Gemeni AI integration",
      "Self hosting and monitoring",
    ],
    outcomes: [
      "OJS (Open Journal System) - https://ahphan.com",
      "Porfolio - https://ahphan.com/profile",
      "Ideation Engine - https://ahphan.com/ideation/home",
      "Price Tracker - https://ahphan.com/price-tracker/home",
    ],
    techStack: ["Java Spring Boot", "NextJs", "React", "MySQL", "Docker", "Kong API Gateway", "CloudFlare", "Gemeni AI", "Grafana"],
  },
  {
    id: 1,
    period: "2024 – 2025",
    company: "Tyme X",
    title: "Market Place",
    description:
      "Banking system application enabling users to onboard and purchase digital products including vouchers, insurance, data packages, and utilities.",
    responsibilities: [
      "Clarified business requirements with the team in planning phase",
      "Participated in high-level system design",
      "Set up integration API gateway with 3rd party",
      "Pair working with 3rd party teams for E2E features",
      "Migrated database from MySQL to Aurora RDS"
    ],
    outcomes: [
      "Successfully launched Marketplace module within Tyme X Banking ecosystem",
      "Achieved 100% successful migration to Amazon Aurora RDS",
      "Enhanced system observability through monitoring solutions",
      "Gitlab to Github migration completed seamlessly",
      "Deployed a resilient microservices architecture on AWS ECS, increasing system availability and supporting high transaction volumes."
    ],
    techStack: ["Java Spring Boot", "MySQL", "ECS", "N8N", "Lambda", "DynamoDB", "CloudFormation"],
  },
  {
    id: 2,
    period: "2023 – 2024",
    company: "Tyme X",
    title: "Savings",
    description:
      "Internal banking office services supporting manual payment posting with comprehensive tracking and auditing capabilities.",
    responsibilities: [
      "Clarified requirements and documentation",
      "Participated in high-level system design",
      "Developed Java API Services",
      "Implemented tracking and auditing with Kafka",
      "Collaborated with cross-functional teams",
    ],
    outcomes: [
      "Automated payment posting workflows, reducing manual workload",
      "Improved data consistency and transaction reliability",
      "Enhanced collaboration between engineering, product, and business teams through clear documentation and regular demonstrations",
      "Understanding secure and compliant architecture, aligning with banking standards"
    ],
    techStack: ["AWS Step Functions", "Lambda", "DynamoDB", "Serverless", "Datadog", "EC2"],
  },
  {
    id: 3,
    period: "2021 – 2023",
    company: "UNIT CORP",
    title: "5PM",
    description:
      "Microservice-based enterprise application for contract management, debt management, HR integration, and revenue monitoring.",
    responsibilities: [
      "Supported technical leader with requirements analysis",
      "Initialized service infrastructure",
      "Implemented APIs using Java",
      "Built UI web app using ReactJS",
      "Maintained and monitored performance",
    ],
    outcomes: [
      "Successfully implemented microservice architecture to enhance system modularity and performance",
      "Improved efficiency in contract and debt management processes through automated workflows and data integration",
      "Enabled real-time tracking and visualization of corporate performance via an interactive dashboard",
      "Delivered a stable and scalable enterprise web platform"
    ],
    techStack: ["Java Spring Boot", "NodeJS", "ReactJS", "Nginx", "MySQL", "Redis"],
  },
  {
    id: 4,
    period: "2021 – 2022",
    company: "UNIT CORP",
    title: "Insurance Portal",
    description:
      "Web portal for agencies and customers featuring organization updates, contract tracking, org charts, and revenue reporting.",
    responsibilities: [
      "Built services to coordinate existing data from other systems",
      "Developed logging API to track user behavior",
      "Established service for insurance contract data",
      "Built admin page for notification configuration",
      "Implemented reporting service with visualizations",
    ],
    outcomes: [
      "Successfully delivered a centralized insurance portal",
      "Enabled real-time contract tracking, organizational updates, and performance visualization",
      "Improved internal communication through message and notification management, and enhanced decision-making with automated revenue and reporting dashboards",
    ],
    techStack: ["Java Spring Boot", "JPA", "ReactJS", "Material UI", "MS SQL"],
  },
  {
    id: 5,
    period: "2020 – 2021",
    company: "FPT Software",
    title: "Digital Well Operation",
    description:
      "Multi-functional application for well engineers and supervisors to plan, coordinate, and monitor well operations during execution.",
    responsibilities: [
      "Developed layout and functions using Angular and React",
      "Implemented WOM – WAP service",
      "Troubleshot issues for front-end and backend",
      "Demonstrated functionality to stakeholders",
    ],
    outcomes: [
      "Delivered comprehensive digital platform for oil well operations",
      "Improved team collaboration and reduced manual tracking errors",
      "Increased operational efficiency through automation",
    ],
    techStack: ["Java Spring Boot", ".NET Core", "Angular 8", "NodeJS", "Kafka", "Keycloak"],
  },
]

export function ProjectFlow() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12">Experience</h2>

        {/* Mind Map Flow Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Project Cards */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 z-10 mt-8" />

                {/* Connector Line */}
                <div
                  className={`hidden md:block absolute top-9 w-12 h-px bg-border ${
                    index % 2 === 0 ? "left-1/2 ml-1.5" : "right-1/2 mr-1.5"
                  }`}
                />

                {/* Card Container */}
                <div className="flex-1 ml-12 md:ml-0 md:w-[calc(50%-3rem)]">
                  <ProjectCard project={project} isLeft={index % 2 === 0} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
