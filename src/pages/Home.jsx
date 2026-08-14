import { Link } from "react-router-dom";
import Nav from "../components/Nav";

// TODO: these Figma-hosted asset URLs expire ~7 days after export (Aug 14 2026).
// Before final deploy, export the real images from Figma and drop them into
// src/assets/images, then swap these imports for local ones.
const imgDay1 =
  "https://www.figma.com/api/mcp/asset/700e2c53-a7f6-453b-a46b-01e1280bf992.png";
const imgHome1 =
  "https://www.figma.com/api/mcp/asset/59307cb7-25c2-41ea-8f70-67c6725e8c26.png";
const imgArrowDown =
  "https://www.figma.com/api/mcp/asset/b391132f-2ea1-418d-8a5c-ba8e036f0174.svg";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Nav />

      <main className="max-w-[1200px] mx-auto px-6 pt-32">
        {/* Intro cards */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-[2] bg-surface border-4 border-accent-2 rounded-cards p-8 md:p-12 flex items-center">
            <p className="font-serif text-[clamp(28px,4vw,44px)] leading-tight text-primary">
              A designer focused on simplifying complex workflows through{" "}
              <em className="italic">
                research, system thinking, and intentional design decisions
              </em>
            </p>
          </div>

          <div className="flex-1 bg-surface border-4 border-accent-2 rounded-cards p-8 flex flex-col items-center justify-center gap-6 text-center">
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
            className="group block rounded-cards border-4 border-[#fff8c5] bg-border overflow-hidden shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)]"
          >
            <div className="relative bg-gradient-to-br from-[rgba(182,153,251,0.35)] to-background p-8 md:p-12 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <h3 className="font-serif text-[36px] md:text-[48px] leading-tight text-black mb-6">
                  Making appointments management simpler for service
                  providers
                </h3>
                <p className="text-[18px] text-black/80 max-w-[420px] mb-8">
                  I reduced the friction of managing bookings by bringing
                  everything they need into one streamlined experience.
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-6 py-3 text-[16px] text-primary group-hover:gap-3 transition-all">
                  See everything behind the design
                  <img src={imgArrowDown} alt="" className="w-5 h-5 -rotate-90" />
                </span>
              </div>

              <div className="relative flex justify-center">
                <div className="relative -rotate-3 bg-white/60 rounded-images p-2 shadow-lg">
                  <img
                    src={imgHome1}
                    alt="Product screenshot preview"
                    className="w-[220px] h-auto rounded-[12px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 rotate-6 bg-white/60 rounded-images p-2 shadow-lg hidden md:block">
                  <img
                    src={imgDay1}
                    alt="Product screenshot preview"
                    className="w-[140px] h-auto rounded-[12px] object-cover"
                  />
                </div>
                <div className="absolute top-2 -right-6 rotate-[8deg] w-[160px] rounded-[6px] bg-[#dcfce7] p-3 text-[11px] leading-[16px] shadow-md hidden md:block">
                  Users needed to quickly understand their schedule and
                  business activity. I prioritized bookings and key metrics,
                  helping them make faster decisions without navigating
                  multiple screens.
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
