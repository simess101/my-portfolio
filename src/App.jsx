import { useEffect, useState } from "react";

// ----------------- Data -----------------

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Steam Memory Forensics Plugin",
    role: "Volatility 3 · Memory Forensics",
    period: "2025",
    description:
      "Custom Volatility 3 plugin that recovers user activity from Steam process memory in Windows 11, including chats and recent games, to support digital-forensics investigations.",
    tags: ["Python", "Volatility 3", "Memory forensics"],
    links: {
      github: "https://github.com/simess101/SteamForensics-VolitalityPlugin",
    },
  },
  {
    title: "MLRF: Machine Learning for RF Spectrum Sensing",
    role: "Capstone · RF Signal Classification",
    period: "2024 - 2025",
    description:
      "A machine learning-based system for monitoring and classifying radio frequency (RF) signals using power spectral density features, supporting both live SDR data and recorded captures for US Navy signal analysis.",
    tags: ["Python", "Jupyter", "ML", "RF", "Signal processing"],
    links: {
      github:
        "https://github.com/simess101/MULT-25-607-ML-for-RF-Sprectrum-sensing",
    },
  },
  {
    title: "OSINT Lead Generator & Network Mapper",
    role: "Neo4j · Graph OSINT",
    period: "2025",
    description:
      "Pipeline that ingests open-source intelligence, normalizes entities, and visualizes relationships in Neo4j to surface leads and higher-order connections.",
    tags: ["Python", "Neo4j", "OSINT"],
    links: {
      github: "https://github.com/simess101/OSINT-Lead-Generator-Network-Mapper",
    },
  },
  {
    title: "Emotional Plant Care Simulator (VR)",
    role: "VR · Generative UX Research",
    period: "2025 - 2026",
    description:
      "VR experience that maps emotional check-ins to plant growth and motion, exploring calm, reflective self-tracking through generative plant metaphors.",
    tags: ["Unity", "VR", "LLM-assisted UX"],
    links: {},
  },
  {
    title: "Go-Playing AI & Teaching Tool",
    role: "Personal ML Project",
    period: "2024 - 2025",
    description:
      "From-scratch Go engine plus reinforcement-learning based AI that can both play and explain moves to help humans improve after each game.",
    tags: ["Python", "RL", "Game AI"],
    links: {
      github: "https://github.com/simess101/go_game",
    },
  },
  {
    title: "MTG Card Database",
    role: "Web App · Magic: The Gathering",
    period: "2024 - 2025",
    description:
      "Web application for exploring and organizing Magic: The Gathering cards, integrating external APIs to search, filter, and inspect card details for deck building and collection management.",
    tags: ["React", "Web app", "MTG"],
    links: {
      github: "https://github.com/simess101/MTG-DATABASE",
    },
  },
  {
    title: "PDF Reader",
    role: "Rust · Desktop Tool (WIP)",
    period: "In progress",
    description:
      "Work-in-progress PDF reader written in Rust, focused on learning low-level PDF parsing by manually handling objects, streams, and rendering via a custom UI.",
    tags: ["Rust", "PDF", "Desktop"],
    links: {
      github: "https://github.com/simess101/PDF-Reader",
    },
  },
];

const experience = [
  {
    title: "VDC Software Developer",
    org: "Atlantic Constructors Inc.",
    period: "May 2024 - Present",
    description:
      "Building C# Revit add-ins to automate fabrication workflows (duct checks, parameter pushers, hanger tools) and streamline coordination across teams.",
  },
  {
    title: "B.S. Computer Science, Cybersecurity Focus",
    org: "Virginia Commonwealth University",
    period: "Aug 2021 - Dec 2025 (expected)",
    description:
      "Coursework in digital forensics, ethical hacking, memory & malware forensics, and systems programming. Blending security engineering with applied research.",
  },
];

// ----------------- Small components -----------------

function ProjectCard({ title, role, period, description, tags, links }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {period}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 text-xs">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sky-600 underline-offset-4 hover:underline dark:text-sky-400"
            >
              GitHub
            </a>
          )}
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sky-600 underline-offset-4 hover:underline dark:text-sky-400"
            >
              Live demo
            </a>
          )}
          {links?.writeup && (
            <a
              href={links.writeup}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sky-600 underline-offset-4 hover:underline dark:text-sky-400"
            >
              Write-up
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ExperienceItem({ title, org, period, description, isLast }) {
  return (
    <li className="relative pl-6">
      {!isLast && (
        <span className="absolute left-[7px] top-4 h-full w-px bg-slate-200 dark:bg-slate-700" />
      )}
      <span className="absolute left-0 top-3 h-3 w-3 rounded-full border border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-900" />
      <div className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {period}
      </div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {org}
      </p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </li>
  );
}

// ----------------- Main App -----------------

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-600 dark:text-sky-400">
              Shane Simes
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Cybersecurity &amp; Digital Forensics · VCU CS ’25
            </span>
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden text-xs font-medium text-slate-600 md:flex md:gap-4 dark:text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full px-2 py-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-medium shadow-sm transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <span className="h-5 w-9 rounded-full bg-slate-200 p-0.5 dark:bg-slate-700">
                <span
                  className={`block h-4 w-4 rounded-full bg-white shadow transition-transform ${theme === "dark" ? "translate-x-4" : ""
                    }`}
                />
              </span>
              <span>{theme === "dark" ? "Dark" : "Light"} mode</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main
        id="top"
        className="mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-16 pt-10"
      >
        {/* About / Hero */}
        <section
          id="about"
          className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
              Portfolio
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              I build tools for digital forensics, security, and weird little
              experiments.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Senior Computer Science student at VCU focused on cybersecurity
              and digital forensics. I enjoy digging through memory dumps,
              automating boring workflows, and designing experiences that make
              complex systems feel approachable.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Recently, that's meant
              <span className="font-medium">
                {" "}
                Volatility plugins, OSINT graph pipelines, Revit add-ins,
              </span>{" "}
              and a VR project that turns emotions into plants.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:simess@vcu.edu"
                className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-sky-700"
              >
                Contact me
              </a>
              <a
                href="https://github.com/simess101"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/simess/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Snapshot
            </h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-xs text-slate-500 dark:text-slate-400">
                  Current role
                </dt>
                <dd className="font-medium">
                  VDC Software Developer @ ACI
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500 dark:text-slate-400">
                  Focus areas
                </dt>
                <dd>Digital forensics, security tooling, VR/AI experiments</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500 dark:text-slate-400">
                  Based in
                </dt>
                <dd>Richmond, Virginia (USA)</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Selected Projects
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                A mix of security tooling, research, and personal builds.
              </p>
            </div>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6">
          <header>
            <h2 className="text-xl font-semibold tracking-tight">
              Experience &amp; Education
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Where I’ve been spending my time lately.
            </p>
          </header>

          <ol className="space-y-6">
            {experience.map((item, idx) => (
              <ExperienceItem
                key={item.title}
                {...item}
                isLast={idx === experience.length - 1}
              />
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
        >
          <h2 className="text-xl font-semibold tracking-tight">Get in touch</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            I’m open to roles in
            <span className="font-medium">
              {" "}
              cybersecurity, digital forensics, security engineering, and
              related research
            </span>
            . If something here overlaps with what you’re building, I’d love to
            talk.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:simess@vcu.edu"
              className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-sky-700"
            >
              Email: simess@vcu.edu
            </a>
            <a
              href="https://github.com/simess101"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              github.com/simess101
            </a>
            <a
              href="https://www.linkedin.com/in/simess/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              linkedin.com/in/simess
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-slate-50/80 py-4 text-center text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-500">
        <span>
          © {new Date().getFullYear()} Shane Simes · Built with React, Vite, and
          Tailwind.
        </span>
      </footer>
    </div>
  );
}
