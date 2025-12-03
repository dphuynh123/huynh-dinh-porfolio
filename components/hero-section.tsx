import { Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Sticky Info */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Dinh Phan Huynh
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Full-Stack Developer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Building robust web applications with Java microservices and React.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="mailto:dphuynh123@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/huynh-dinh-373573162"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Right Column - About Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I'm a developer with <span className="text-foreground font-medium">5 years of experience</span> building web
            applications on <span className="text-foreground font-medium">Java microservices</span> and{" "}
            <span className="text-foreground font-medium">React</span>. My work focuses on creating scalable,
            maintainable systems that solve real business problems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently specializing in <span className="text-foreground font-medium">AWS Cloud Stack</span> including API
            Gateway, ECS, DynamoDB, Lambda, and SQS. I have{" "}
            <span className="text-foreground font-medium">2 years of experience</span> in pair working and integration
            with 3rd parties.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm proactive and always welcome new challenges, keeping up to date with new technologies and continuously
            expanding my knowledge in the <span className="text-foreground font-medium">digital banking</span>,{" "}
            <span className="text-foreground font-medium">insurance</span>, and{" "}
            <span className="text-foreground font-medium">marketplace</span> domains.
          </p>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">Education:</span> HCMC University of Technology (2015-2019)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
