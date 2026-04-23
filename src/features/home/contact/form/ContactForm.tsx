"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    alert("Message sent!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-border bg-card flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Name"
        required
        className="px-4 py-3 rounded-lg bg-muted border border-border outline-none focus:border-primary"
      />

      <input
        type="email"
        placeholder="Email"
        required
        className="px-4 py-3 rounded-lg bg-muted border border-border outline-none focus:border-primary"
      />

      <textarea
        placeholder="Message"
        rows={4}
        required
        className="px-4 py-3 rounded-lg bg-muted border border-border outline-none focus:border-primary"
      />

      <motion.button
        whileTap={{ scale: 0.97 }}
        disabled={loading}
        className="mt-2 px-6 py-3 rounded-lg bg-primary text-white"
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}
