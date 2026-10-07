"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Message failed");
      }

      form.reset();
      setStatus("Message sent successfully.");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="name"
        type="text"
        required
        placeholder="Your name"
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
      />

      <input
        name="subject"
        type="text"
        required
        placeholder="Subject"
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
      />

      <textarea
        name="message"
        rows={6}
        required
        placeholder="Tell me about your project..."
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-cyan-400/50"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-white px-6 py-4 font-medium text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-sm text-cyan-400">
          {status}
        </p>
      )}
    </form>
  );
}