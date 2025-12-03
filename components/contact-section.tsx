import { Mail, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-6">Contact</h2>

        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-balance">
            If you'd like to discuss a project or just say hi, I'm always down to chat.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:dphuynh123@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail size={20} className="group-hover:text-primary" />
              <span>dphuynh123@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/huynh-dinh-373573162"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin size={20} className="group-hover:text-primary" />
              <span>linkedin.com/in/huynh-dinh-373573162</span>
            </a>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} />
              <span>Viet Nam</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 Dinh Phan Huynh. Built with Next.js & Tailwind CSS.</p>
        </div> */}
      </div>
    </section>
  )
}
