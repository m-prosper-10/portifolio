"use client";

import { useState } from "react";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({ type: 'success', message: "Message sent! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: 'error', message: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container-minimal border-t border-border pt-16 pb-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Contact</h2>
          <p className="text-base text-muted-foreground">
            Have a project in mind? Reach out via the form below or email me directly at{" "}
            <a href={`mailto:${contactInfo.email}`} className="text-foreground decoration-foreground/30 hover:decoration-foreground">
              {contactInfo.email}
            </a>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider opacity-60">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-border py-2 focus:border-foreground outline-none transition-colors text-sm"
                placeholder="Your Name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider opacity-60">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-border py-2 focus:border-foreground outline-none transition-colors text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider opacity-60">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-2 focus:border-foreground outline-none transition-colors text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-sm font-bold hover:no-underline disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message &rarr;"}
          </button>

          {status && (
            <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </p>
          )}
        </form>

        <div className="flex gap-8 pt-4">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold opacity-60 hover:opacity-100 hover:no-underline transition-opacity">GitHub</a>
          <a href={contactInfo.gitlab} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold opacity-60 hover:opacity-100 hover:no-underline transition-opacity">GitLab</a>
        </div>
      </div>
    </section>
  );
}
