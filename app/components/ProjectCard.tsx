"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  index: number;
};

export default function ProjectCard({
  slug,
  title,
  category,
  description,
  technologies,
  index,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover={reduceMotion ? undefined : "hover"}
      whileTap={reduceMotion ? undefined : "press"}
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: -8, scale: 1 },
        press: { y: -4, scale: 0.99 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="h-full"
    >
      <Link
        href={`/projects/${slug}`}
        className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 transition-colors duration-500 hover:border-cyan-400/30 hover:bg-white/5"
      >
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-cyan-400/10 via-white/5 to-purple-500/10">
          <div className="absolute inset-0 bg-linear-to-br from-cyan-400/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <motion.span
            variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }}
            className="relative text-5xl font-bold text-white/10 transition-colors duration-500 group-hover:text-cyan-400/20"
          >
            0{index + 1}
          </motion.span>
        </div>

        <div className="mt-7">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/70">
            {category}
          </p>

          <h3 className="mt-3 text-2xl font-semibold transition group-hover:text-cyan-400">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.slice(0, 5).map((technology) => (
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

            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: 6 } }}
              className="text-lg text-white/30 transition-colors duration-300 group-hover:text-cyan-400"
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
