"use client";

import React, { useState, useEffect, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import PixelStars from "./components/PixelStars";
import ScrollReveal from "./components/ScrollReveal";
import PixelAvatar from "./components/PixelAvatar";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  {
    company: "Pishee",
    url: "https://pishee.com",
    role: "Founder",
    location: "Amsterdam, Netherlands",
    period: "Sep 2024 – Present",
    blurb: "Next-gen AI language-learning app teaching any target language using the learner's own native tongue.",
    bullets: [
      "Shipped iOS & Android apps covering 10 languages on App Store & Google Play",
      "Built the Universal Content Engine adapting lessons & grammar to the user's mother tongue",
      "Designed gamified mastery loops — daily streaks, weekly leagues, Practice Hub",
      "Lead a cross-functional team of 15 across engineering, design, and curriculum",
    ],
  },
  {
    company: "Scitodate",
    url: "https://scitodate.com",
    role: "Head of Product",
    location: "Amsterdam, Netherlands",
    period: "Aug 2020 – Present",
    blurb: "AI-powered LinkedIn outreach & sales intelligence platform for academic and R&D instrumentation markets.",
    bullets: [
      "Developed & launched multiple platforms, contributing to +100% increase in ARR",
      "Owned end-to-end product strategy from concept to market across 10+ engineers & designers",
      "Established lean analytics processes turning user feedback into a continuous improvement loop",
      "Partnered with marketing on positioning and go-to-market for new launches",
    ],
  },
  {
    company: "Sibapp",
    url: "https://sibapp.com",
    role: "CEO & Co-Founder",
    location: "Tehran, Iran",
    period: "Aug 2016 – Aug 2020",
    blurb: "Iran's largest iOS app store — local distribution platform serving 5M+ users with no Apple ID required.",
    bullets: [
      "Captured 70% market share in mobile application publishing",
      "Grew company from 10 to 50+ headcount, 5M+ user base (600K MAU)",
      "Drove +2,000% increase in ARR through new revenue streams and commercial partnerships",
      "Closed B2B contracts with 10+ banks for mobile app publishing",
    ],
  },
  {
    company: "Snappfood",
    url: "https://snapfood.com",
    role: "Lead iOS Developer",
    location: "Tehran, Iran",
    period: "Feb 2016 – Aug 2016",
    blurb: "Iran's leading online food delivery platform, connecting millions of customers with local restaurants.",
    bullets: [
      "Built a new version of the vendor application from the ground up",
      "Upgraded the user-facing app to a refreshed design system",
      "Owned client–designer communication to ensure seamless customer experience",
    ],
  },
];

const skills = [
  {
    category: "Product & Strategy",
    items: ["Product Management", "Product Strategy", "Business Strategy", "Market Research", "KPI", "Usability Testing", "Agile", "Budgeting"],
  },
  {
    category: "Leadership",
    items: ["Team Management", "Communication", "Cross-functional Collaboration", "Roadmapping", "OKRs"],
  },
  {
    category: "Growth & Marketing",
    items: ["Digital Marketing", "SEO", "Marketing Automation", "Google Ads", "Salesforce"],
  },
  {
    category: "Data & Analytics",
    items: ["Data Analysis", "Google Analytics", "Mixpanel", "Lean Analytics"],
  },
  {
    category: "Engineering",
    items: ["Python", "PHP / Laravel", "Swift", "MySQL", "MongoDB", "Elasticsearch", "Machine Learning"],
  },
];

const certifications = [
  { title: "Marketing in a Digital World", org: "Univ. of Illinois at Urbana-Champaign", year: "2021" },
  { title: "Google Ads — Measurement Certification", org: "Google", year: "2021" },
  { title: "Google Ads — Search Certification", org: "Google", year: "2021" },
  { title: "Agile Fundamentals", org: "Udemy", year: "2019" },
  { title: "Finance & Accounting for Non-Financial Managers", org: "Sharif University", year: "2018" },
  { title: "iOS Development", org: "Amirkabir University of Technology", year: "2016" },
];

const extras = [
  {
    role: "Angel Investor & Product Advisor",
    org: "CloudMed (Pezeshkhub)",
    period: "Jan 2019 – Present",
    desc: "Cloud-based telemedicine platform for medical imaging and physician networking in Iran.",
  },
  {
    role: "Member of Jury",
    org: "Web & Mobile Conference",
    period: "Jan 2019 – Jan 2022",
    desc: "Evaluated mobile and web product submissions and mentored finalists in Tehran.",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4" style={{ marginBottom: "2.5rem" }}>
      <span className="font-press-start text-sm tracking-widest text-white/80">
        {children}
      </span>
      <div className="flex-1 pixel-divider opacity-30" />
    </div>
  );
}

function PixelCard({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`relative border-2 border-white bg-black hover:bg-white/5 transition-colors duration-200 ${className}`}
      style={{ imageRendering: "pixelated", padding: "2rem", ...style }}
    >
      {/* Corner pixels */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />
      {children}
    </div>
  );
}

function PixelDivider() {
  return <div className="pixel-divider w-full opacity-20" style={{ margin: "5rem 0" }} />;
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-black/90 border-b-2 border-white/20" : "bg-transparent"
      }`}
    >
      <span className="font-press-start text-xs text-white/80 tracking-wider">PK<span className="cursor-blink">_</span></span>
      <div className="flex items-center gap-6">
        {["About", "Experience", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-space-mono text-xs text-white/50 hover:text-white transition-colors duration-150 tracking-wider hidden sm:block"
          >
            {item}
          </a>
        ))}
        <a
          href="mailto:hi@pooya.nl"
          className="pixel-btn text-[10px] py-2 px-4"
        >
          HIRE ME
        </a>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 grid-bg crt-flicker"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
          className="flex justify-center float-pixel"
          style={{ marginBottom: "2.5rem" }}
        >
          <div className="relative">
            <PixelAvatar />
            <div
              className="absolute -inset-3 border-2 border-white/30"
              style={{
                boxShadow: "0 0 0 2px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.05)",
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-press-start text-2xl sm:text-3xl md:text-4xl text-white leading-tight tracking-tight"
          style={{ marginBottom: "1.75rem" }}
        >
          POOYA<br />KHOSHBAKHT
        </motion.h1>

        {/* Role typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="font-vt323 text-2xl sm:text-3xl text-white/70"
          style={{ marginBottom: "1.5rem", minHeight: "2.5rem" }}
        >
          <TypeAnimation
            sequence={[
              "Head of Product",
              2000,
              "Founder & Builder",
              2000,
              "Product Strategist",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="font-space-mono text-xs text-white/60 tracking-widest"
          style={{ marginBottom: "2.5rem" }}
        >
          📍 AMSTERDAM, NETHERLANDS
        </motion.p>

        {/* Profile text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="font-space-mono text-base text-white/80 max-w-xl mx-auto leading-relaxed"
          style={{ marginBottom: "2rem" }}
        >
          Innovative product leader with a proven track record of identifying performance issues
          and crafting solutions that achieve product–market fit and sustainable growth.
        </motion.p>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="font-vt323 text-xl text-white/55 italic"
          style={{ marginBottom: "2.5rem" }}
        >
          &ldquo;My greatest strength is the ability to learn and adapt fast.&rdquo;
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-wrap justify-center"
          style={{ gap: "1.25rem" }}
        >
          <a href="mailto:hi@pooya.nl" className="pixel-btn">
            GET IN TOUCH
          </a>
          <a
            href="https://linkedin.com/in/pooyakhoshbakht"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-colors"
            style={{ boxShadow: "4px 4px 0 0 #444" }}
          >
            LINKEDIN
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-press-start text-[8px] text-white/30 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 bg-white/40"
        />
      </motion.div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-4xl mx-auto px-6" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <SectionLabel>// EXPERIENCE</SectionLabel>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] hidden md:block"
          style={{
            background: "repeating-linear-gradient(180deg, #fff 0px, #fff 6px, transparent 6px, transparent 12px)",
          }}
        />

        <div className="experience-list md:pl-10">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.1}>
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[47px] top-6 w-3 h-3 bg-white hidden md:block" />

                <PixelCard>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3" style={{ marginBottom: "1.5rem" }}>
                    <div>
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-press-start text-sm text-white hover:underline glitch-hover inline-block"
                      >
                        {job.company}
                      </a>
                      <div className="font-vt323 text-2xl text-white/90" style={{ marginTop: "0.5rem" }}>{job.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-space-mono text-sm text-white/70">{job.period}</div>
                      <div className="font-space-mono text-sm text-white/55" style={{ marginTop: "0.25rem" }}>{job.location}</div>
                    </div>
                  </div>

                  <p className="font-space-mono text-sm text-white/80 leading-relaxed border-l-2 border-white/40" style={{ paddingLeft: "1rem", marginBottom: "1.5rem" }}>
                    {job.blurb}
                  </p>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 font-space-mono text-sm text-white/90 leading-relaxed">
                        <span className="text-white/50 mt-0.5 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </PixelCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="relative z-10 max-w-4xl mx-auto px-6" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <SectionLabel>// SKILLS</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
        {skills.map((group, i) => (
          <ScrollReveal key={group.category} delay={i * 0.08}>
            <PixelCard>
              <div className="font-press-start text-xs text-white/80 tracking-wider" style={{ marginBottom: "1.25rem" }}>
                {group.category}
              </div>
              <div className="flex flex-wrap" style={{ gap: "0.625rem" }}>
                {group.items.map((skill) => (
                  <span key={skill} className="pixel-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </PixelCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section id="education" className="relative z-10 max-w-4xl mx-auto px-6" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <SectionLabel>// EDUCATION</SectionLabel>

      <ScrollReveal>
        <PixelCard style={{ marginBottom: "3rem" }}>
          <div className="flex flex-col sm:flex-row sm:justify-between" style={{ gap: "1rem" }}>
            <div>
              <div className="font-press-start text-sm text-white" style={{ marginBottom: "0.5rem" }}>Amirkabir University of Technology</div>
              <div className="font-vt323 text-2xl text-white/90">BSc, Information Technology Engineering</div>
              <div className="font-space-mono text-sm text-white/65" style={{ marginTop: "0.5rem" }}>Tehran, Iran</div>
            </div>
            <div className="font-space-mono text-sm text-white/65 sm:text-right">2009 – 2013</div>
          </div>
          <p className="font-space-mono text-sm text-white/70 leading-relaxed" style={{ marginTop: "1.25rem" }}>
            Coursework in software engineering, databases, and information systems.
          </p>
        </PixelCard>
      </ScrollReveal>

      <SectionLabel>// CERTIFICATIONS</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.25rem" }}>
        {certifications.map((cert, i) => (
          <ScrollReveal key={cert.title} delay={i * 0.07}>
            <div className="border border-white/30 hover:border-white/70 transition-colors duration-200 relative group" style={{ padding: "1.5rem" }}>
              <div className="absolute top-0 left-0 w-2 h-2 bg-white/0 group-hover:bg-white transition-colors duration-200" />
              <div className="font-space-mono text-sm text-white/85 leading-relaxed" style={{ marginBottom: "0.5rem" }}>{cert.title}</div>
              <div className="font-vt323 text-xl text-white/65">{cert.org}</div>
              <div className="font-press-start text-[10px] text-white/55" style={{ marginTop: "0.75rem" }}>{cert.year}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── Extras ──────────────────────────────────────────────────────────────────

function Extras() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <SectionLabel>// EXTRACURRICULAR</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "2rem" }}>
        {extras.map((e, i) => (
          <ScrollReveal key={e.org} delay={i * 0.1}>
            <PixelCard>
              <div className="font-press-start text-xs text-white" style={{ marginBottom: "0.5rem" }}>{e.org}</div>
              <div className="font-vt323 text-2xl text-white/85" style={{ marginBottom: "0.5rem" }}>{e.role}</div>
              <div className="font-space-mono text-sm text-white/60" style={{ marginBottom: "1rem" }}>{e.period}</div>
              <p className="font-space-mono text-sm text-white/80 leading-relaxed">{e.desc}</p>
            </PixelCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── Languages ───────────────────────────────────────────────────────────────

function Languages() {
  const langs = [
    { name: "English", level: "Highly Proficient", fill: 90 },
    { name: "Persian", level: "Native", fill: 100 },
    { name: "Dutch", level: "A2 — Elementary", fill: 20 },
  ];

  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <SectionLabel>// LANGUAGES</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "2rem" }}>
        {langs.map((lang, i) => (
          <ScrollReveal key={lang.name} delay={i * 0.1}>
            <div className="border border-white/30 hover:border-white/70 transition-colors duration-200" style={{ padding: "1.75rem" }}>
              <div className="font-press-start text-xs text-white" style={{ marginBottom: "0.75rem" }}>{lang.name}</div>
              <div className="font-vt323 text-xl text-white/75" style={{ marginBottom: "1.25rem" }}>{lang.level}</div>
              <div className="w-full h-2 bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.fill}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <SectionLabel>// CONTACT</SectionLabel>

      <ScrollReveal>
        <PixelCard className="text-center">
          <div className="font-press-start text-xs text-white/65 tracking-wider" style={{ marginBottom: "1.25rem" }}>READY TO CONNECT?</div>
          <div className="font-press-start text-xl sm:text-2xl text-white leading-tight" style={{ marginBottom: "2rem" }}>
            LET&rsquo;S BUILD<br />SOMETHING GREAT
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center" style={{ gap: "1.5rem", marginBottom: "2rem" }}>
            <a
              href="mailto:hi@pooya.nl"
              className="font-space-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-white/30">▸</span> hi@pooya.nl
            </a>
            <a
              href="tel:+31613727117"
              className="font-space-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-white/30">▸</span> +31 6 13727117
            </a>
            <a
              href="https://linkedin.com/in/pooyakhoshbakht"
              target="_blank"
              rel="noreferrer"
              className="font-space-mono text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-white/30">▸</span> LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:hi@pooya.nl" className="pixel-btn">
              SEND EMAIL
            </a>
          </div>
        </PixelCard>
      </ScrollReveal>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-white/10 py-8 text-center">
      <div className="font-press-start text-[9px] text-white/20 tracking-widest">
        POOYA KHOSHBAKHT © {new Date().getFullYear()} — AMSTERDAM 🇳🇱
      </div>
      <div className="font-vt323 text-sm text-white/15 mt-2">
        crafted with pixels & passion
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <PixelStars />
      <Nav />
      <Hero />

      <div className="relative z-10">
        <PixelDivider />
        <Experience />
        <PixelDivider />
        <Skills />
        <PixelDivider />
        <Education />
        <PixelDivider />
        <Extras />
        <Languages />
        <PixelDivider />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
