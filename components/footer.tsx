import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 dark:bg-muted/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nathenael Tamirat</h3>
            <p className="text-muted-foreground mb-4">
              A freshman software engineering student and freelancer passionate about technology and coding.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/Nathenaeltamirat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#future-projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Future Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Email: Nathenaeltamiratbizuneh@gmail.com</li>
              <li className="text-muted-foreground">Phone: +251991439979</li>
              <li className="text-muted-foreground">Address: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nathenael Tamirat. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
