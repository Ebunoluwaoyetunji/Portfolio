import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import appointmentDashboard from "../assets/images/appointment-scheduling-dashboard.png";

export default function Home() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Nav />

      <main className="max-w-[1200px] mx-auto px-6 pt-32">
        {/* Intro cards */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="hover-wobble flex-[2] bg-surface border-4 border-accent-2 rounded-cards p-8 md:p-12 flex items-center">
            <p className="font-serif text-[clamp(28px,4vw,44px)] leading-tight text-primary">
              A designer focused on simplifying complex workflows through{" "}
              <em className="italic">
                research, system thinking, and intentional design decisions
              </em>
            </p>
          </div>

          <div className="hover-wobble flex-1 bg-surface border-4 border-accent-2 rounded-cards p-8 flex flex-col items-center justify-center gap-6 text-center">
            <Stat number="100+" label="Components built" />
            <Stat number="20+" label="Complex user flows simplified" />
            <Stat number="3+" label="Industries explored" />
          </div>
        </section>

        {/* Selected work */}
        <section className="mt-24 pb-24">
          <h2 className="font-serif text-[48px] text-black mb-10">
            Selected work
          </h2>

          <Link
            to="/work/appointment-scheduling"
            className="work-card group block rounded-cards border-4 border-[#fff8c5] bg-border overflow-hidden shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]"
          >
            <div className="relative bg-gradient-to-br from-[rgba(182,153,251,0.35)] to-background p-8 md:p-12 grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
              <div>
                <h3 className="font-serif text-[36px] md:text-[48px] leading-tight text-black mb-6">
                  Making appointments management simpler for service
                  providers
                </h3>
                <p className="text-[18px] text-black/80 max-w-[420px] mb-8">
                  I reduced the friction of managing bookings by bringing
                  everything they need into one streamlined experience.
                </p>
                <span className="cta-link relative inline-flex items-center gap-2 rounded-full bg-white/60 px-6 py-3 text-[16px] text-primary">
                  See everything behind the design
                  <svg
                    className="w-4 h-4 -rotate-90 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <svg
                    className="cta-underline absolute -bottom-1 left-6 right-6 h-2"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 Q25,0 50,5 T100,5"
                      fill="none"
                      stroke="#0f766e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="60"
                      strokeDashoffset="60"
                    />
                  </svg>
                </span>
              </div>

              {/* Left-aligned, larger thumbnail */}
              <div className="relative flex justify-start">
                <div className="relative bg-white/70 rounded-images p-3 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src={appointmentDashboard}
                    alt="Appointment scheduling dashboard preview"
                    className="w-full max-w-[380px] h-auto rounded-[12px] object-cover"
                  />
                </div>

                {/* Dancing sticky note */}
                <div className="sticky-note absolute -top-6 -right-4 w-[160px] rounded-[6px] bg-[#dcfce7] p-3 text-[13px] leading-[17px] text-primary shadow-md hidden md:block font-hand">
                  Users needed to quickly understand their schedule and
                  business activity. I prioritized bookings and key metrics,
                  helping them make faster decisions without navigating
                  multiple screens.
                  <span className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-white/70 border border-black/10 rotate-12" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-serif text-[48px] text-accent-2 leading-none">
        {number}
      </p>
      <p className="text-[18px] text-black mt-2">{label}</p>
    </div>
  );
}
