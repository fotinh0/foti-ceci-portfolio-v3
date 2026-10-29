"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FiArrowUpRight as ArrowUpRight, FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail } from "react-icons/fi";
import { experience, projects, stack } from "@/data/portfolio";

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const roles = ["Software Engineer", "Frontend Engineer", "Full Stack Builder"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    const word = roles[i] ?? "";
    if (text === word) { const t = setTimeout(() => { setText(""); setI((i + 1) % roles.length); }, 2200); return () => clearTimeout(t); }
    const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 70);
    return () => clearTimeout(t);
  }, [text, i]);
  return <span className="text-primary">{text}<span className="animate-blink">_</span></span>;
}

function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="mb-12 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-primary">{n}</span>{children}<span className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-1 rounded-full border bg-background/70 p-1.5 text-sm backdrop-blur-xl">
          <a href="#top" className="rounded-full bg-primary px-3 py-1.5 font-mono text-xs font-medium text-primary-foreground">FC</a>
          {["about", "projects", "experience", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="rounded-full px-3 py-1.5 capitalize text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{s}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-center px-6">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="bg-glow animate-float pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-2xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Based in New York
          </p>
          <h1 className="animate-rise text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl lg:text-9xl" style={{ animationDelay: "100ms" }}>
            Foti Ceci.
          </h1>
          <h2 className="animate-rise mt-4 font-mono text-xl md:text-3xl" style={{ animationDelay: "200ms" }}>
            <Typer />
          </h2>
          <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "300ms" }}>
            I build exceptional digital experiences that combine beautiful design with powerful functionality.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
              See my work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a href="mailto:foti.ceci@gmail.com" className="inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-colors hover:bg-secondary">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Stack marquee */}
      <div className="border-y py-5">
        <div className="flex w-max animate-marquee gap-12 font-mono text-sm text-muted-foreground">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-12">{s}<span className="text-primary">✦</span></span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <SectionLabel n="01">About</SectionLabel>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <p className="text-3xl font-light leading-snug md:text-4xl">
              Frontend-leaning software engineer who loves turning complex products into <span className="text-primary">clean, fast interfaces</span>. I've shipped at IBM and now at Capitalize, working alongside designers and PMs across global teams.
            </p>
          </Reveal>
          <Reveal delay={150} className="grid gap-4">
            {[["4+", "years shipping production web apps"], ["∞", "always learning new skills"]].map(([k, v]) => (
              <div key={v} className="rounded-2xl border bg-card p-5 transition-colors hover:border-primary">
                <div className="text-4xl font-semibold text-primary">{k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="02">Selected projects</SectionLabel>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120}>
              <article className="group h-full overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary">
                <a href={p.link} target="_blank" rel="noreferrer" className="block aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </a>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <div className="flex gap-2">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border p-2 transition-colors hover:bg-primary hover:text-primary-foreground"><Github className="h-4 w-4" /></a>
                      )}
                      <a href={p.link} target="_blank" rel="noreferrer" aria-label="Live site" className="rounded-full border p-2 transition-colors hover:bg-primary hover:text-primary-foreground"><ArrowUpRight className="h-4 w-4" /></a>
                    </div>
                  </div>
                  <p className="mt-3 text-muted-foreground">{p.des}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">{t}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="03">Experience</SectionLabel>
        <div className="divide-y border-y">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 80}>
              <div className="group grid gap-2 py-8 transition-colors md:grid-cols-[200px_1fr] md:gap-10">
                <div className="font-mono text-sm text-muted-foreground">{e.duration}</div>
                <div>
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-primary">
                    {e.title} <span className="text-muted-foreground">· {e.company}</span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-6 py-40">
        <div className="bg-glow pointer-events-none absolute inset-0" />
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">04 · Contact</p>
          <h2 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">Let's build something great together.</h2>
          <a href="mailto:foti.ceci@gmail.com" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-transform hover:-translate-y-1">
            <Mail className="h-5 w-5" /> foti.ceci@gmail.com
          </a>
        </Reveal>
      </section>

      <footer className="mx-auto flex max-w-6xl items-center justify-between border-t px-6 py-8 text-sm text-muted-foreground">
        <span className="font-mono">© {new Date().getFullYear()} Foti Ceci</span>
        <div className="flex gap-2">
          <a href="https://github.com/fotinh0" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border p-2 transition-colors hover:text-primary"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/foti-ceci/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border p-2 transition-colors hover:text-primary"><Linkedin className="h-4 w-4" /></a>
        </div>
      </footer>
    </div>
  );
}
