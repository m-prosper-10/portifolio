export const siteConfig = {
  name: "Mugisha Prosper",
  title: "Mugisha Prosper - AI Engineer",
  description:
    "AI Engineer and Full-Stack Developer specializing in machine learning, backend systems, and modern web applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prospermugisha.vercel.app",
};

export const contactInfo = {
  email: "nelsonprox92@gmail.com",
  github: "https://github.com/m-prosper-10",
  gitlab: "https://gitlab.com/MugishaProsper",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: contactInfo.github,
  },
  {
    label: "GitLab",
    href: contactInfo.gitlab,
  },
  {
    label: "Email",
    href: `mailto:${contactInfo.email}`,
  },
] as const;
