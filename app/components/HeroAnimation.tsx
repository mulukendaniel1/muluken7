"use client";

import { motion } from "framer-motion";

export default function HeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        Full Stack Web Developer
      </p>

      <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
        I build digital
        <span className="block text-white/40">experiences.</span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
      >
        I build modern websites, web applications and business systems with
        clean interfaces and reliable technology.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:bg-cyan-400"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-7 py-3.5 font-medium transition hover:border-cyan-400/50 hover:bg-white/5"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.div>
  );
}