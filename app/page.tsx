// ============================================
// 📁 HOW TO ADD YOUR WORKS & ACHIEVEMENTS
// ============================================
//
// 1. PROJECTS: Edit the `projects` array below
//    - Add your project details (title, description, tags, image, link)
//    - Place project images in /public/projects/ folder
//
// 2. SKILLS: Edit the `skills` array to showcase your technologies
//
// 3. ACHIEVEMENTS: Edit the `achievements` array for awards, certifications, etc.
//
// 4. PERSONAL INFO: Update the hero section and about section with your details
//
// ============================================

// 🎨 ADD YOUR PROJECTS HERE
const projects = [
  {
    id: 1,
    title: "Project Name",
    description:
      "A brief description of what this project does and the problem it solves.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "/projects/placeholder.svg", // Add your image to /public/projects/
    link: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Another Project",
    description:
      "Description of your second amazing project with key features highlighted.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/projects/placeholder.svg",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Cool Side Project",
    description:
      "A passion project that showcases your creativity and technical skills.",
    tags: ["Python", "AI/ML", "FastAPI"],
    image: "/projects/placeholder.svg",
    link: "https://github.com/yourusername/project3",
  },
];

// 🛠️ ADD YOUR SKILLS HERE
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 88 },
  { name: "Next.js", level: 82 },
  { name: "Node.js", level: 80 },
  { name: "CSS/Tailwind", level: 85 },
];

// 🏆 ADD YOUR ACHIEVEMENTS HERE
const achievements = [
  {
    id: 1,
    title: "Achievement Title",
    description: "Brief description of this achievement or certification.",
    year: "2024",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Another Achievement",
    description: "Description of another notable accomplishment.",
    year: "2023",
    icon: "🎯",
  },
  {
    id: 3,
    title: "Certification Name",
    description: "Professional certification or course completion.",
    year: "2023",
    icon: "📜",
  },
];

// Navigation items
const navItems = ["About", "Projects", "Achievements", "Contact"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background gradient */}
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
              Your Name
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate{" "}
            <span className="text-zinc-900 font-medium">
              Full-Stack Developer
            </span>{" "}
            crafting beautiful digital experiences with modern technologies.
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
              className="px-8 py-4 text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-full font-medium hover:bg-zinc-100 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll indicator */}
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

      {/* About Section */}
      <section id="about" className="py-32 relative bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-violet-600 font-medium mb-4 block">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Turning ideas into{" "}
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  reality
                </span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                {/* ✏️ EDIT YOUR BIO HERE */}
                I&apos;m a developer with a passion for creating elegant
                solutions to complex problems. With expertise in modern web
                technologies, I build applications that are not only functional
                but also delightful to use.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open source, or sharing knowledge
                with the developer community.
              </p>

              {/* Skills */}
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

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 border border-zinc-200 overflow-hidden">
                {/* 📸 ADD YOUR PHOTO HERE - place in /public/ and update src */}
                <div className="w-full h-full flex items-center justify-center text-zinc-400">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-zinc-200 flex items-center justify-center text-6xl">
                      👤
                    </div>
                    <p className="text-sm">
                      Add your photo to /public/profile.jpg
                    </p>
                    <p className="text-xs text-zinc-400 mt-2">
                      Then update the Image component
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-600/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-fuchsia-600/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-violet-600 font-medium mb-4 block">
              My Work
            </span>
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
                {/* Project Image */}
                <div className="aspect-video bg-zinc-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-4xl">🖼️</span>
                  </div>
                </div>

                {/* Project Info */}
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

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
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

      {/* Achievements Section */}
      <section id="achievements" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-violet-600 font-medium mb-4 block">
              Recognition
            </span>
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-violet-600 font-medium mb-4 block">
            Get in Touch
          </span>
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
            {/* ✉️ UPDATE YOUR EMAIL */}
            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-600/10"
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
            {/* 🔗 UPDATE YOUR LINKEDIN */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-200 border border-zinc-300 rounded-full font-medium hover:bg-zinc-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {/* 🐙 UPDATE YOUR GITHUB */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* 🐦 UPDATE YOUR TWITTER */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* 📸 UPDATE YOUR INSTAGRAM (optional) */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
