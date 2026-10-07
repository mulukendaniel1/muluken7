import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import HeroAnimation from "@/app/components/HeroAnimation";
import MotionWrapper from "@/app/components/MotionWrapper";
import { projects } from "@/data/projects";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Git",
  "GitHub",
  "Docker",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight transition hover:text-cyan-400"
          >
            M7<span className="text-cyan-400">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          <HeroAnimation />

          <MotionWrapper delay={0.8}>
            <div className="mt-14 flex flex-wrap gap-6 text-sm text-white/40">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <MotionWrapper>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                I turn ideas into working products.
              </h2>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <div className="text-lg leading-8 text-white/60">
              <p>
                I&apos;m a full stack web developer focused on creating
                modern websites and web applications for businesses and
                digital products.
              </p>

              <p className="mt-6">
                I work across frontend, backend, databases and deployment.
                My goal is to build products that look professional and
                work well on every device.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section id="skills" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <MotionWrapper>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technologies I use
            </h2>
          </MotionWrapper>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <MotionWrapper key={skill} delay={index * 0.04}>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-white">
                  {skill}
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <MotionWrapper>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                  Selected Work
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Projects I&apos;ve built
                </h2>
              </div>

              <p className="max-w-md text-white/50">
                A selection of websites, platforms and business systems I
                have worked on.
              </p>
            </div>
          </MotionWrapper>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionWrapper key={project.slug} delay={index * 0.12}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400/10 via-white/5 to-purple-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <span className="relative text-5xl font-bold text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-cyan-400/20">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-7">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/70">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold transition group-hover:text-cyan-400">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/50"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between">
                      <span className="text-sm font-medium text-cyan-400">
                        View Project
                      </span>

                      <span className="text-lg text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <MotionWrapper>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:p-16">
              <div className="grid gap-14 lg:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Contact
                  </p>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
                    Let&apos;s build something together.
                  </h2>

                  <p className="mt-6 max-w-lg leading-7 text-white/50">
                    Have a project, business idea or website in mind? Send
                    me a message and I&apos;ll get back to you.
                  </p>

                  <div className="mt-10 space-y-4">
                    <a
                      href="https://wa.me/YOUR_NUMBER"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-white/10 px-5 py-4 transition hover:border-cyan-400/30 hover:bg-white/5"
                    >
                      WhatsApp
                    </a>

                    <a
                      href="https://t.me/YOUR_USERNAME"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-white/10 px-5 py-4 transition hover:border-cyan-400/30 hover:bg-white/5"
                    >
                      Telegram
                    </a>

                    <a
                      href="https://instagram.com/YOUR_USERNAME"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-white/10 px-5 py-4 transition hover:border-cyan-400/30 hover:bg-white/5"
                    >
                      Instagram
                    </a>

                    <a
                      href="mailto:YOUR_EMAIL@example.com"
                      className="block rounded-2xl border border-white/10 px-5 py-4 transition hover:border-cyan-400/30 hover:bg-white/5"
                    >
                      Email
                    </a>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/40 sm:flex-row">
          <p>© 2026 M7 Dev. All rights reserved.</p>

          <p>Full Stack Web Developer</p>
        </div>
      </footer>
    </main>
  );
}