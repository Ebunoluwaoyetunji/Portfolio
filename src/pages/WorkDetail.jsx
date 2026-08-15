import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import detailHeroDashboard from "../assets/images/detail-hero-dashboard.png";
import briefMockups from "../assets/images/brief-mockups.png";

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

        <PlaceholderSection
          id="problem"
          label="Problem"
          refCallback={(el) => (sectionRefs.current.problem = el)}
        />
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
