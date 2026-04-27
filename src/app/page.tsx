import Link from "next/link";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Particles } from "@/components/magicui/particles";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Building />
      <About />
      <Contact />
      <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Diana Zhang
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <Particles
        className="absolute inset-0"
        quantity={140}
        color="#a855f7"
        size={0.6}
        staticity={40}
        ease={60}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18),rgba(59,130,246,0.08)_45%,transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
          Finance · GSU · 2028
        </p>
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          <AnimatedGradientText
            colorFrom="#a855f7"
            colorTo="#3b82f6"
            speed={1.2}
          >
            Diana Zhang
          </AnimatedGradientText>
        </h1>
        <p className="mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
          Trading the markets, building the tools.
        </p>
        <div className="mt-10 flex items-center gap-4 text-sm">
          <a
            href="#building"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-zinc-200 transition hover:border-purple-400/40 hover:bg-purple-500/10"
          >
            What I&apos;m building
          </a>
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-zinc-400 transition hover:text-zinc-100"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}

function Building() {
  return (
    <section
      id="building"
      className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40"
    >
      <header className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-purple-400">
            Currently building
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One project, all the focus.
          </h2>
        </div>
      </header>

      <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20 sm:p-12">
        <BorderBeam
          size={220}
          duration={8}
          colorFrom="#a855f7"
          colorTo="#3b82f6"
          borderWidth={1.5}
        />
        <BorderBeam
          size={220}
          duration={8}
          delay={4}
          colorFrom="#d946ef"
          colorTo="#8b5cf6"
          borderWidth={1.5}
        />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-200">
              In progress
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-400">
              Pine Script
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-400">
              Python
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Auto Trading System Bot
          </h3>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Given certain parameters, I have built a bot that has an auto
            trading system based on custom indicators I have vibe coded as
            well.
          </p>

          <div className="flex items-center gap-3 pt-2 text-sm">
            <span className="text-zinc-500">Repo:</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300">
              coming soon
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-3xl px-6 py-32 sm:py-40"
    >
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-purple-400">
        About
      </p>
      <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
        Background.
      </h2>

      <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
        <p>
          My name is Diana Zhang. I come from a cryptocurrency and professional
          esports background, and currently studying Finance at Georgia State
          University.
        </p>
        <p>
          I have personal interests in technology — if only I wasn&apos;t bad at
          math I would be more involved.
        </p>
        <p className="text-zinc-400">
          Right now I&apos;m focused on the intersection of markets and code:
          building, breaking, and iterating on tools that help me trade better.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/sonderzsq",
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zhangdiana1124",
      icon: LinkedInIcon,
    },
    {
      label: "Email",
      href: "mailto:zhangdiana1124@gmail.com",
      icon: MailIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-3xl px-6 py-32 text-center sm:py-40"
    >
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-purple-400">
        Contact
      </p>
      <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
        Say hi.
      </h2>

      <ul className="flex items-center justify-center gap-4">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={label}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-200"
            >
              <Icon className="h-5 w-5" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.73.5.86 5.37.86 11.64c0 4.93 3.2 9.11 7.63 10.59.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.21 1.14-2.99-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.7 10.7 0 0 1 5.59 0c2.13-1.44 3.07-1.14 3.07-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.78 1.14 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.76 1.02.76 2.06v3.05c0 .3.2.65.76.54 4.43-1.48 7.62-5.66 7.62-10.59C23.14 5.37 18.27.5 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
