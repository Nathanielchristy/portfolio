"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Nathaniel Christy</div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact">
              <Button>Get in Touch</Button>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          {/* Tech Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-primary/80 dark:from-gray-950/90 dark:to-primary/70 z-10"></div>
            <div className="absolute inset-0 z-0">
              <svg
                className="w-full h-full opacity-10 dark:opacity-20"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="tech-pattern"
                  patternUnits="userSpaceOnUse"
                  width="10"
                  height="10"
                  patternTransform="scale(2) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path d="M1,1 L9,1 L9,9 L1,9 L1,1" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#tech-pattern)" />
                <g fill="none" stroke="currentColor" strokeWidth="0.2">
                  <path d="M30,20 L70,20" />
                  <path d="M30,30 L70,30" />
                  <path d="M30,40 L60,40" />
                  <path d="M30,50 L50,50" />
                  <path d="M30,60 L65,60" />
                  <path d="M30,70 L55,70" />
                  <path d="M30,80 L70,80" />
                </g>
                <g fill="none" stroke="currentColor" strokeWidth="0.2">
                  <path d="M25,20 L25,80" />
                  <path d="M35,20 L35,80" />
                  <path d="M45,20 L45,80" />
                  <path d="M55,20 L55,80" />
                  <path d="M65,20 L65,80" />
                  <path d="M75,20 L75,80" />
                </g>
                <g fill="currentColor" opacity="0.5">
                  <circle cx="25" cy="30" r="1" />
                  <circle cx="35" cy="40" r="1" />
                  <circle cx="45" cy="50" r="1" />
                  <circle cx="55" cy="60" r="1" />
                  <circle cx="65" cy="70" r="1" />
                  <circle cx="75" cy="30" r="1" />
                  <circle cx="25" cy="70" r="1" />
                  <circle cx="75" cy="50" r="1" />
                </g>
                <g className="animate-pulse">
                  <text x="30" y="25" fill="currentColor" fontSize="2" opacity="0.7">
                    function()
                  </text>
                  <text x="40" y="35" fill="currentColor" fontSize="2" opacity="0.7">
                    const dev = {"{}"}
                  </text>
                  <text x="35" y="45" fill="currentColor" fontSize="2" opacity="0.7">
                    if (code) {"{"}
                  </text>
                  <text x="40" y="55" fill="currentColor" fontSize="2" opacity="0.7">
                    return solution
                  </text>
                  <text x="35" y="65" fill="currentColor" fontSize="2" opacity="0.7">
                    {"}"}
                  </text>
                  <text x="30" y="75" fill="currentColor" fontSize="2" opacity="0.7">
                    export default dev
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="container relative z-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                  Full Stack Developer
                  <span className="block text-white/90 mt-2">Nathaniel Christy</span>
                </h1>
                <p className="text-xl text-white/80 max-w-xl">
                  Passionate IT Professional with 5+ years of experience in Software Development, Data Analysis and
                  automation projects (RPA).
                </p>
                <div className="flex gap-4 pt-4">
                  <Button className="bg-white text-primary hover:bg-white/90" asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Resume
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                  <img src="./profile.png" alt="Nathaniel Christy" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20 relative">
          <CodeBackground />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a Full Stack Developer with over 5 years of experience in Software Development, Data Analysis, and
                  Automation Projects (RPA).
                </p>
                <p>
                  Proficient in Database Management like MySQL and MongoDB, Programming Languages like Python and Java,
                  Visualization with Power BI, and Automation with Selenium.
                </p>
                <p>
                  I have a strong attention to detail and ability to work collaboratively in team settings. I'm seeking
                  a position to enhance my skills, contribute to organizational goals, and experience long-term career
                  growth.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>nathanielinnu@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+971526001790</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>112,1-1 Building, Al Quoz, Dubai</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years of Experience</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-400">Companies Worked</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20 relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>
          <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fillOpacity='0.2'%3E%3Cpath d='M0 0h10v10H0zm10 10h10v10H10z'/%3E%3C/g%3E%3C/svg%3E\")",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard title="Programming Languages" skills={["Python", "Java", "JavaScript", "TypeScript"]} />
              <SkillCard title="Web Development" skills={["HTML", "CSS", "React", "Node.js", "Express.js", "Django"]} />
              <SkillCard title="Database" skills={["MySQL", "MongoDB", "Mongoose"]} />
              <SkillCard title="Cloud & DevOps" skills={["AWS", "Google Cloud", "Docker", "CI/CD", "GitHub Actions"]} />
              <SkillCard
                title="Tools & Frameworks"
                skills={["Selenium", "BeautifulSoup", "Scrapy", "Puppeteer", "Cheerio"]}
              />
              <SkillCard
                title="Soft Skills"
                skills={["Team Collaboration", "Project Management", "Technical Communication", "Problem Solving"]}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-12">
            <ExperienceCard
              title="Software Developer"
              company="TravNook Travel & Tourism"
              period="07/2024 – present"
              location="Dubai, UAE"
              description={[
                "Developed and maintained automated web scraping solutions using Python and Node.js, leveraging tools like Selenium, Scrapy, BeautifulSoup, Puppeteer, and Cheerio to extract and process structured/unstructured data efficiently.",
                "Optimized scraping processes with advanced techniques such as proxy management, CAPTCHA bypassing, and data parsing, ensuring accuracy and compliance with project deadlines.",
                "Collaborated with cross-functional teams, utilizing Git for version control, and deployed scalable data extraction solutions on AWS, enhancing performance and reliability.",
                "Applied strong problem-solving and debugging skills to analyze network protocols, browser tools, and dynamic web elements, ensuring robust and maintainable scraping workflows.",
              ]}
            />
            <ExperienceCard
              title="Full Stack Web Developer"
              company="Zenith Advertising LLC"
              period="02/2024 – 06/2024"
              location="Dubai, UAE"
              description={[
                "Developed and deployed a full-stack web application for managing jobs and users with real-time notifications and role-based access control.",
                "Built RESTful API and managed MongoDB with Mongoose.",
                "Developed a responsive frontend with React and integrated with the backend API.",
                "Implemented real-time features using Socket.IO.",
                "Containerized the application using Docker and Docker Compose.",
                "Deployed and orchestrated containers on AWS ECS and EC2.",
                "Managed static assets and database using AWS S3 and RDS.",
                "Automated CI/CD pipeline with GitHub Actions for testing, building, and deployment.",
              ]}
            />
            <ExperienceCard
              title="Software Developer"
              company="Ecesis Care PVT LTD"
              period="03/2021 – 01/2024"
              location="Trivandrum, India"
              description={[
                "Led Python development projects: Enhanced scalable solutions and data-driven decisions through collaboration with researchers on public database insights.",
                "Implemented Selenium automation scripts: Significantly decreased manual tasks, ensuring detailed documentation for productivity and teamwork.",
                "Conducted data analysis: Extracted and analyzed data from MySQL for decision-making in the BPO operations department, tailored to specific requirements. Utilized MySQL, MS Excel, Power BI and Python.",
                "Awarded 'Best Employee of the Quarter' for outstanding performance and project contributions.",
                "Spearheaded automation development, improving operational efficiency by 30%.",
                "Recognized for translating technical concepts to non-technical stakeholders, strengthening collaboration.",
              ]}
            />
            <ExperienceCard
              title="Django Developer"
              company="ARTIL SOLUTIONS"
              period="04/2019 – 02/2021"
              location="Trivandrum, India"
              description={[
                "Key contributor to scalable web applications using Django, enhancing user experience and functionality.",
                "Developed responsive frontends with HTML, CSS, Bootstrap, improving visual appeal.",
                "Managed databases; optimized queries for faster application performance.",
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="MERN Stack Job Management Portal"
              description="Developed a job and user management portal with real-time notifications and role-based access control."
              technologies={["React", "Node.js", "Express", "MongoDB", "Docker", "AWS", "GitHub Actions"]}
            />
            <ProjectCard
              title="Automated Visa Appointment System"
              description="Led the development of a robust automation system to streamline the visa appointment booking process for high-demand embassies."
              technologies={["Python", "Puppeteer", "Selenium", "AWS EC2", "Proxy Rotation"]}
            />
            <ProjectCard
              title="Acceptance Control Panel"
              description="Developed a management portal for client requirements in an AGILE SCRUM environment."
              technologies={["HTML", "CSS", "Bootstrap", "Django", "MySQL", "Git"]}
            />
            <ProjectCard
              title="Auto Acceptance Automation System"
              description="Automated data scraping from real estate valuation webpages to collect relevant client data."
              technologies={["Python", "MySQL", "Selenium", "Cron Jobs"]}
            />
            <ProjectCard
              title="Automated Data Entry Project"
              description="Developed automation software for entering Broker Price Opinions into various real estate platforms."
              technologies={["Java", "MySQL", "Selenium"]}
            />
            <ProjectCard
              title="Data Integration and Analysis"
              description="Provided insights into property value assessments by integrating data from multiple sources."
              technologies={["MySQL", "Python", "Selenium", "Data Analysis"]}
            />
          </div>
        </section>

        {/* Education & Certificates Section */}
        <section className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Bachelor's in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Kerala Technological University</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">04/2015 – 04/2019 | Trivandrum, India</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Team Lead Training</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">DCUBE Ai - Trivandrum</p>
              <p className="text-sm">
                Completed a program focused on leadership skills, team management, and project coordination.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Certified Specialist in Full Stack Development (MERN STACK)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                ICT Academy of Kerala in association with NORKA ROOTS
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">18 October 2021 to 26 March 2022</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Full Stack Web Developer Course (Django)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">MashupStack, Trivandrum (2019)</p>
              <p className="text-sm">Completed training in full-stack web development focusing on Django framework.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:nathanielinnu@gmail.com" className="hover:text-primary">
                    nathanielinnu@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+971526001790" className="hover:text-primary">
                    +971526001790
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>112,1-1 Building, Al Quoz, Dubai</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t dark:border-gray-800">
        <div className="container text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Nathaniel Christy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
}: {
  title: string
  company: string
  period: string
  location: string
  description: string[]
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-primary">{company}</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-gray-600 dark:text-gray-400">{period}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">{location}</p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
}: {
  title: string
  description: string
  technologies: string[]
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ThemeToggle() {
  return (
    <button
      className="p-2 rounded-md bg-gray-100 dark:bg-gray-800"
      onClick={() => {
        document.documentElement.classList.toggle("dark")
      }}
    >
      <span className="sr-only">Toggle theme</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 hidden dark:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 block dark:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  )
}

function CodeBackground() {
  return (
    <div className="absolute right-0 top-0 -z-10 opacity-5 dark:opacity-10 overflow-hidden pointer-events-none">
      <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="text-primary">
          <text x="10" y="10" fontSize="3" fontFamily="monospace">
            import React from 'react';
          </text>
          <text x="10" y="15" fontSize="3" fontFamily="monospace">
            import {"{"} useState {"}"} from 'react';
          </text>
          <text x="10" y="20" fontSize="3" fontFamily="monospace"></text>
          <text x="10" y="25" fontSize="3" fontFamily="monospace">
            function Developer() {"{"}
          </text>
          <text x="15" y="30" fontSize="3" fontFamily="monospace">
            const [skills, setSkills] = useState([
          </text>
          <text x="20" y="35" fontSize="3" fontFamily="monospace">
            'React', 'Node.js', 'Python',
          </text>
          <text x="20" y="40" fontSize="3" fontFamily="monospace">
            'MongoDB', 'AWS', 'Docker'
          </text>
          <text x="15" y="45" fontSize="3" fontFamily="monospace">
            ]);
          </text>
          <text x="15" y="50" fontSize="3" fontFamily="monospace"></text>
          <text x="15" y="55" fontSize="3" fontFamily="monospace">
            return (
          </text>
          <text x="20" y="60" fontSize="3" fontFamily="monospace">
            {"<div>"}
          </text>
          <text x="25" y="65" fontSize="3" fontFamily="monospace">
            {"<h1>Nathaniel Christy</h1>"}
          </text>
          <text x="25" y="70" fontSize="3" fontFamily="monospace">
            {"<p>Full Stack Developer</p>"}
          </text>
          <text x="25" y="75" fontSize="3" fontFamily="monospace">
            {"<Skills data={skills} />"}
          </text>
          <text x="20" y="80" fontSize="3" fontFamily="monospace">
            {"</div>"}
          </text>
          <text x="15" y="85" fontSize="3" fontFamily="monospace">
            );
          </text>
          <text x="10" y="90" fontSize="3" fontFamily="monospace">
            {"}"}
          </text>
          <text x="10" y="95" fontSize="3" fontFamily="monospace">
            export default Developer;
          </text>
        </g>
      </svg>
    </div>
  )
}
