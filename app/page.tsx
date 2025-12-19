const projects = [
  {
    id: 1,
    title: "Marmut Music Bot",
    description:
      "A Discord music bot that streams high-quality music to your servers.",
    tags: ["Node.js", "discord.js", "TypeScript"],
    image: "/projects/marmut.jpg",
    link: "https://github.com/adipppp/marmut",
  },
  {
    id: 2,
    title: "BookU - Book Management Microservice",
    description:
      "A microservice for managing book data in a larger application ecosystem.",
    tags: ["Spring Boot", "Microservice", "Java"],
    image: "/projects/booku.png",
    link: "https://github.com/AdPro-C8/BookU-be-bookList",
  },
  {
    id: 3,
    title: "OAuth2 Single Sign-On (SSO)",
    description:
      "A learning project implementing OAuth2 SSO with Authorization Server, Resource Server, and Client to understand authentication protocols and system design.",
    tags: ["OAuth2", "SSO", "Authentication"],
    image: "/projects/oauth2.jpg",
    link: "https://github.com/stack-js",
  },
];

const skills = [
  { name: "Fiber (Go Framework)", level: 80 },
  { name: "SQL", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "Docker", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "ERD Modelling", level: 60 },
];

const achievements = [
  {
    id: 1,
    title: "Backend Engineer Intern",
    description:
      "Direktorat Transformasi Digital UI - Developed backend for Asrama UI system using Fiber and MongoDB.",
    year: "2025",
    icon: "💼",
  },
  {
    id: 2,
    title: "Computer Science Student",
    description:
      "Universitas Indonesia with strong focus on software engineering and web architecture.",
    year: "2022",
    icon: "🎓",
  },
];

const navItems = ["About", "Projects", "Achievements", "Contact"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
          >
            Portfolio
          </a>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity border border-violet-300 shadow-lg shadow-violet-500/30"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-200/60 via-white to-fuchsia-100/60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/30 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-white rounded-full text-sm text-zinc-700 border border-zinc-100 shadow-sm">
              👋 Welcome to My Portfolio!
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Nadhif
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate{" "}
            <span className="text-zinc-900 font-medium">Backend Engineer</span>{" "}
            building scalable web applications and APIs with modern
            technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500/30 border border-violet-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-zinc-600 bg-white border border-zinc-200 rounded-full font-medium hover:bg-zinc-100 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="absolute bottom-0 left-1/2 translate-y-32 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 relative bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              I&apos;m an active Computer Science student at Universitas
              Indonesia with a strong passion for software engineering. I
              specialize in web architecture design, API development, and web
              application optimization.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              I previously interned as a Backend Engineer at Direktorat
              Transformasi Digital UI, where I developed backend systems using
              Fiber and MongoDB. I gained hands-on experience with Docker CI/CD
              workflows and microservices architecture. I&apos;m passionate
              about contributing to innovative projects while continuously
              improving my technical and team collaboration skills.
            </p>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-zinc-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              building great software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-violet-600/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-video bg-zinc-100 overflow-hidden flex items-center justify-center">
                  {project.image &&
                  project.image !== "/projects/placeholder.svg" ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      style={{ maxHeight: "180px" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">🖼️</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-100 rounded-full text-xs text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/adipppp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-200 border border-zinc-300 rounded-full font-medium hover:bg-zinc-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements &{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Milestones and recognitions throughout my journey as a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="group p-6 bg-zinc-100 rounded-2xl border border-zinc-200 hover:border-violet-600/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <span className="text-sm text-violet-600 font-medium">
                  {achievement.year}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-violet-600 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-zinc-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="text-zinc-600 text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:fernanda.nadhiftya@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500/30 border border-violet-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send me an Email
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Fernanda Nadhiftya Putra. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
