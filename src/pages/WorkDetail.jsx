import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import detailHeroDashboard from "../assets/images/detail-hero-dashboard.png";
import briefMockups from "../assets/images/brief-mockups.png";
import personaProvider from "../assets/images/persona-provider.png";
import personaStaff from "../assets/images/persona-staff.png";
import personaClient from "../assets/images/persona-client.png";

const PROCESS_SECTIONS = [
  { id: "brief", label: "Brief" },
  { id: "problem", label: "Problem" },
  { id: "insights", label: "Insights" },
  { id: "strategy", label: "Strategy" },
  { id: "design-process", label: "Design process" },
  { id: "validation", label: "Validation" },
  { id: "impact", label: "Impact" },
];

export default function WorkDetail() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#e9e9e9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(182,153,251,0.55) 0%, rgba(182,153,251,0) 70%)",
            backgroundSize: "90px 90px",
            filter: "blur(18px)",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-40 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-[44px] md:text-[56px] leading-tight text-black mb-8">
              Making appointments management simpler for service providers
            </h1>
            <p className="text-[18px] text-black/70 max-w-[440px]">
              I reduced the friction of managing bookings by bringing
              everything they need into one streamlined experience
            </p>
          </div>

          <div className="rounded-cards shadow-2xl overflow-hidden">
            <img
              src={detailHeroDashboard}
              alt="FOLOWR calendar dashboard showing bookings, page views, and revenue"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />
    </div>
  );
}

function ProcessSection() {
  const [active, setActive] = useState("brief");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 grid md:grid-cols-[180px_1fr] gap-16">
      {/* Sticky sidebar nav */}
      <nav className="hidden md:block sticky top-40 self-start h-fit">
        <p className="font-serif text-[36px] text-black mb-8">Process</p>
        <ul>
          {PROCESS_SECTIONS.map((section, i) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`block w-full text-left py-4 text-[19px] transition-colors ${
                  active === section.id
                    ? "text-accent-2"
                    : "text-black/85 hover:text-accent-2"
                } ${i !== PROCESS_SECTIONS.length - 1 ? "border-b border-black/10" : ""}`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Section content */}
      <div>
        <section
          id="brief"
          ref={(el) => (sectionRefs.current.brief = el)}
          className="process-section mb-32"
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start mb-8">
            <img
              src={briefMockups}
              alt="Acuity Scheduling reference and early FOLOWR calendar mockup"
              className="w-full max-w-[420px] h-auto"
            />
            <blockquote className="font-serif italic text-[22px] md:text-[26px] leading-snug text-black">
              The brief was to design Dressr (now FOLOWR), a scheduling
              platform that would make it easier for service providers to
              manage appointments and for clients to book them.
            </blockquote>
          </div>

          <p className="text-[16px] text-black/70 max-w-[440px] mb-16">
            Acuity Scheduling was provided as a reference for the core
            scheduling experience, but I had to translate that direction
            into an experience suited to FOLOWR's users and product goals.
          </p>

          <p className="font-serif text-[26px] md:text-[28px] text-black max-w-[600px] mb-10">
            My interpretation of the brief developed into three core
            priorities:
          </p>

          <div className="flex flex-wrap gap-6">
            <PriorityNote color="#dcfce7" label="SIMPLIFY">
              I wanted to make managing appointments feel less stressful
              and easier to handle day to day.
            </PriorityNote>
            <PriorityNote color="#fff8c5" label="ORGANIZE">
              I wanted everything providers need to manage their business
              to feel connected and easy to find.
            </PriorityNote>
            <PriorityNote color="#dbeafe" label="CONNECT">
              I wanted clients to have a simple way to find a business and
              book a service without unnecessary steps.
            </PriorityNote>
          </div>
        </section>

        <section
          id="problem"
          ref={(el) => (sectionRefs.current.problem = el)}
          className="process-section mb-32"
        >
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 items-start mb-16">
            {/* Sticky "note" card */}
            <div className="relative">
              <div className="rotate-[-2deg] bg-[#f4f4f4] rounded-[8px] shadow-lg p-6 max-w-[380px]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#b699fb]/30 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-accent-2" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                  </span>
                  <p className="text-[13px] text-black/60 font-hand">
                    Ebunoluwa · Product exploration
                  </p>
                </div>
                <p className="font-hand text-[19px] leading-[26px] text-black mb-4">
                  Okay, I know what I want Dressr to achieve. But what
                  exactly is making this{" "}
                  <span className="relative">
                    difficult?
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-1.5"
                      viewBox="0 0 100 8"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,4 Q25,0 50,4 T98,4"
                        fill="none"
                        stroke="#0f766e"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </p>
                <span className="inline-block rounded-full bg-[#b699fb]/40 px-4 py-2 text-[13px] text-primary font-hand">
                  Let's unpack this.
                </span>
              </div>

              {/* Curved arrow pointing toward the headline */}
              <svg
                className="hidden md:block absolute -right-8 top-8 w-10 h-10 text-black/50"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M4 4 C 20 4, 32 10, 32 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M25 22 L32 30 L38 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>

              {/* Pushpin */}
              <svg
                className="absolute -bottom-6 left-0 w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="8" r="6" fill="#b91c5c" />
                <path d="M12 13 L12 22" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <p className="font-serif italic text-[28px] md:text-[32px] leading-tight text-accent-2 mb-6">
                The challenge was more than just booking appointments.
              </p>
              <p className="font-serif text-[26px] md:text-[28px] leading-snug text-black">
                <em className="italic">
                  I had to design an experience that worked for
                </em>{" "}
                different people with different needs.
              </p>
            </div>
          </div>

          {/* Persona cards */}
          <div className="grid sm:grid-cols-3 gap-px bg-[#ece9f7] rounded-[8px] overflow-hidden">
            <PersonaCard
              icon={
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 9l1-5h16l1 5" />
                  <path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
                  <path d="M5 9v10h14V9" />
                  <path d="M10 19v-5h4v5" />
                </svg>
              }
              iconColor="#b699fb"
              role="SERVICE PROVIDER"
              quote="I need to stay on top of my schedule and manage my business."
              photo={personaProvider}
            />
            <PersonaCard
              icon={
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
                  <path d="M14 15c2.5.3 4 2 4 5" />
                </svg>
              }
              iconColor="#0f766e"
              role="STAFF"
              quote="I just want to find a service and book it without unnecessary steps."
              photo={personaStaff}
            />
            <PersonaCard
              icon={
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              }
              iconColor="#b91c5c"
              role="CLIENT"
              quote="I need to know which appointments are mine and what's next"
              photo={personaClient}
            />
          </div>
        </section>

        <PlaceholderSection
          id="insights"
          label="Insights"
          refCallback={(el) => (sectionRefs.current.insights = el)}
        />
        <PlaceholderSection
          id="strategy"
          label="Strategy"
          refCallback={(el) => (sectionRefs.current.strategy = el)}
        />
        <PlaceholderSection
          id="design-process"
          label="Design process"
          refCallback={(el) => (sectionRefs.current["design-process"] = el)}
        />
        <PlaceholderSection
          id="validation"
          label="Validation"
          refCallback={(el) => (sectionRefs.current.validation = el)}
        />
        <PlaceholderSection
          id="impact"
          label="Impact"
          refCallback={(el) => (sectionRefs.current.impact = el)}
        />
      </div>
    </div>
  );
}

function PriorityNote({ color, label, children }) {
  return (
    <div
      className="rounded-[6px] p-5 w-[220px] text-[14px] leading-[20px] text-primary shadow-md font-hand"
      style={{ backgroundColor: color }}
    >
      <p className="font-medium mb-2 tracking-wide">{label}</p>
      <p>{children}</p>
    </div>
  );
}

function PersonaCard({ icon, iconColor, role, quote, photo }) {
  return (
    <div className="bg-[#f4f1fc] p-6 flex flex-col">
      <span
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: `${iconColor}26`, color: iconColor }}
      >
        {icon}
      </span>
      <p
        className="text-[13px] font-medium tracking-wide mb-3"
        style={{ color: "#a48ff0" }}
      >
        {role}
      </p>
      <p className="text-[16px] leading-[22px] text-black mb-6">"{quote}"</p>
      <img
        src={photo}
        alt={`${role.toLowerCase()} persona`}
        className="mt-auto w-[130px] h-auto grayscale self-start"
      />
    </div>
  );
}

function PlaceholderSection({ id, label, refCallback }) {
  return (
    <section
      id={id}
      ref={refCallback}
      className="process-section mb-32 min-h-[300px]"
    >
      <p className="font-serif text-[28px] text-black/30">{label}</p>
      <p className="text-[16px] text-black/30 mt-4">
        Content coming soon — send this section over and I'll build it in.
      </p>
    </section>
  );
}
