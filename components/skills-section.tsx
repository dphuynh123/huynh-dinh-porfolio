import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["Java Spring Boot", "N8N", "React", "Angular", ".NET Core", "NodeJS"],
  },
  {
    title: "Database",
    skills: ["MySQL", "DynamoDB", "MS SQL", "Aurora RDS", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "ECS", "API Gateway", "Lambda", "SQS", "CloudFormation"],
  },
  {
    title: "Streaming & Tools",
    skills: ["Kafka", "AWS SQS", "CloudWatch", "Datadog", "Git", "Jira"],
  },
  {
    title: "Business Domains",
    skills: ["Digital Banking", "Insurance", "Marketplace", "Enterprise"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm font-mono border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
