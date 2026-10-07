import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { projects } from "@/data/projects";


export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-cyan-400"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <section className="pt-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
              >
                Visit Live Website
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium transition hover:border-cyan-400/50 hover:bg-white/5"
              >
                View GitHub
                <span className="text-sm">GitHub</span>
              </a>
            )}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="aspect-video bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-purple-500/10">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-24 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Tech Stack
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Built with modern technologies
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Features
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              What I built
            </h2>

            <div className="mt-8 space-y-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white/60"
                >
                  <Check size={17} className="text-cyan-400" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-white/10 pt-16">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Project Gallery
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Inside the project
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {["dashboard.jpg", "website.jpg", "products.jpg", "game.jpg"]
              .map((image) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <img
                    src={`/projects/${project.slug}/${image}`}
                    alt={`${project.title} ${image}`}
                    className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}