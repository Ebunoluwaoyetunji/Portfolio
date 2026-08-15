import { Link } from "react-router-dom";
import Nav from "../components/Nav";

// TODO: these Figma-hosted asset URLs expire ~7 days after export (Aug 15 2026).
// Export the real images from Figma into src/assets/images and swap these
// imports for local ones before this page needs to stay live long-term.
const imgImage1 =
  "https://www.figma.com/api/mcp/asset/fd2cb09e-8142-4477-b1c9-3c087627fbbd.png";
const imgImage2 =
  "https://www.figma.com/api/mcp/asset/b50a9ea0-2766-4643-8413-0ba55c46afb2.png";
const imgBp121 =
  "https://www.figma.com/api/mcp/asset/7f73c3d0-0443-47c1-8d28-f187c7085048.png";
const imgBp131 =
  "https://www.figma.com/api/mcp/asset/6d596425-0282-463c-9e30-4c8da37a2276.png";
const imgResult1 =
  "https://www.figma.com/api/mcp/asset/b0481958-1ff9-4c47-8408-6738651f5c53.png";
const imgDay3 =
  "https://www.figma.com/api/mcp/asset/5c2689c9-48e3-4c34-9c6a-842f5063f04c.png";
const imgDay4 =
  "https://www.figma.com/api/mcp/asset/34ccdde9-bb17-43f6-8a3b-4f6f8dc894ee.png";
const imgDay1 =
  "https://www.figma.com/api/mcp/asset/aa4f3f7a-b1ea-4822-9299-5358a340bb90.png";
const imgStaffList2 =
  "https://www.figma.com/api/mcp/asset/11c644ee-5fe7-42d5-aa60-214228d79492.png";
const imgAddStaff1 =
  "https://www.figma.com/api/mcp/asset/0ec1d8b5-d677-4f24-aac9-40698550d63b.png";
const imgSettings1 =
  "https://www.figma.com/api/mcp/asset/595ef136-7c03-4770-bcea-e2214c6c970e.png";

const flowTags = [
  "Availability flow",
  "Manage user/staff flow",
  "Clients flow",
  "Login flow",
  "Booking",
  "Calendar",
  "Reports",
  "Dashboard",
];

export default function WorkDetail() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Nav />

      <main className="max-w-[840px] mx-auto px-6 pt-40 pb-28">
        <Link to="/" className="doodle-underline text-accent-2 text-[16px]">
          ← Back home
        </Link>

        {/* Hero */}
        <header className="mt-8 mb-24">
          <h1 className="font-serif text-[44px] md:text-[56px] leading-tight text-black mb-6">
            Making appointments management simpler for service providers
          </h1>
          <p className="text-[18px] text-black/70 max-w-[560px]">
            I reduced the friction of managing bookings by bringing everything
            they need into one streamlined experience.
          </p>
        </header>

        {/* Brief */}
        <section className="mb-24">
          <p className="font-serif text-[28px] text-accent-2 mb-6">Brief</p>
          <blockquote className="font-serif italic text-[26px] md:text-[28px] leading-snug text-black max-w-[680px] mb-10">
            The brief was to design Dressr (now FOLOWR), a scheduling
            platform that would make it easier for service providers to
            manage appointments and for clients to book them.
          </blockquote>
          <div className="flex gap-4 mb-6 flex-wrap">
            <img
              src={imgImage1}
              alt="Early scheduling screen exploration"
              className="rounded-images shadow-md w-[280px] h-auto object-cover"
            />
            <img
              src={imgImage2}
              alt="Early booking flow exploration"
              className="rounded-images shadow-md w-[250px] h-auto object-cover"
            />
          </div>
          <p className="text-[14px] text-black/60 max-w-[440px]">
            Acuity Scheduling was provided as a reference for the core
            scheduling experience, but I had to translate that direction
            into an experience suited to FOLOWR's users and product goals.
          </p>
        </section>

        {/* Priorities */}
        <section className="mb-28">
          <p className="font-serif italic text-[28px] text-black max-w-[600px] mb-14">
            My interpretation of the brief developed into three core
            priorities:
          </p>
          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            <StickyNote color="#dcefdf" label="CONNECT" delay="0s">
              I wanted clients to have a simple way to find a business and
              book a service without unnecessary steps.
            </StickyNote>
            <StickyNote color="#fff8c5" label="ORGANIZE" delay="0.6s">
              I wanted everything providers need to manage their business to
              feel connected and easy to find.
            </StickyNote>
            <StickyNote color="#dcfce7" label="SIMPLIFY" delay="1.2s">
              I wanted to make managing appointments feel less stressful and
              easier to handle day to day.
            </StickyNote>
          </div>
        </section>

        {/* Challenge / personas */}
        <section className="mb-28">
          <p className="font-serif italic text-[28px] text-accent-2 mb-2 max-w-[600px]">
            The challenge was more than just booking appointments.
          </p>
          <p className="font-serif text-[28px] text-black mb-14">
            different people with different needs.
          </p>
          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            <PersonaNote role="SERVICE PROVIDER">
              "I need to stay on top of my schedule and manage my business."
            </PersonaNote>
            <PersonaNote role="STAFF">
              "I just want to find a service and book it without unnecessary
              steps."
            </PersonaNote>
            <PersonaNote role="CLIENT">
              "I need to know which appointments are mine and what's next"
            </PersonaNote>
          </div>
        </section>

        {/* Product exploration */}
        <section className="mb-28">
          <h2 className="font-serif italic text-[30px] md:text-[32px] text-black mb-5 max-w-[600px]">
            Understanding how scheduling products work.
          </h2>
          <p className="text-[18px] text-accent-2 max-w-[580px] mb-10">
            I studied Acuity's user flow to understand how scheduling,
            availability, services and booking fit together, then used
            those findings to shape the initial flow for Dressr.
          </p>
          <div className="sticky-note w-[240px] rounded-[6px] bg-white p-5 text-[14px] leading-[20px] text-primary shadow-md font-hand">
            <p className="font-medium mb-2">What I took from it</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Scheduling comes first</li>
              <li>Clients have their own flow</li>
              <li>Availability affects booking</li>
              <li>Each user has different needs</li>
            </ul>
          </div>
        </section>

        {/* Mapping flows */}
        <section className="mb-28">
          <p className="text-[18px] text-black/80 max-w-[600px] mb-8">
            I mapped out the main user flows in FigJam to understand how
            scheduling, clients, availability and other key parts of the
            product connect.
          </p>
          <div className="flex flex-wrap gap-3">
            {flowTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent-2/30 bg-surface px-4 py-2 text-[14px] text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <blockquote className="font-serif italic text-[24px] text-black mt-10 max-w-[620px]">
            I used what I learned from the existing flow to define a
            simpler structure for Dressr. The focus was to make scheduling
            easier for providers while keeping booking straightforward for
            clients.
          </blockquote>
        </section>

        {/* Decisions */}
        <section className="mb-28">
          <div className="sticky-note w-[190px] rounded-[4px] bg-[#fff8c5] p-5 text-[15px] leading-[20px] text-primary shadow-md font-hand -rotate-2">
            In other words, the decisions that shaped the designs
          </div>
          <div className="mt-10 rounded-[8px] bg-[#dcfce7] p-6 max-w-[380px] text-[16px] leading-[24px] text-primary shadow-md font-hand rotate-1">
            Clients are coming to book a service, not learn how FOLOWR
            works. So I kept the booking journey focused on choosing a
            service, staff member, date and time.
          </div>
        </section>

        {/* Visual design */}
        <section className="mb-28">
          <p className="font-serif italic text-[26px] md:text-[28px] text-black max-w-[680px] mb-14">
            With the main flows and screen structure in place, I moved into
            the visual design. I focused on making the experience clear,
            easy to scan and consistent across the different user roles.
          </p>

          <Gallery
            title="01 — Scheduling"
            images={[
              { src: imgBp121, alt: "Scheduling screen, view one" },
              { src: imgBp131, alt: "Scheduling screen, view two" },
              { src: imgResult1, alt: "Scheduling results overview" },
            ]}
          />
          <Gallery
            title="02 — Managing appointments"
            images={[
              { src: imgDay3, alt: "Day view of appointments" },
              { src: imgDay4, alt: "Day view, alternate state" },
              { src: imgDay1, alt: "Calendar day breakdown" },
            ]}
          />
          <Gallery
            title="03 — Managing the practice"
            images={[
              { src: imgStaffList2, alt: "Staff list screen" },
              { src: imgAddStaff1, alt: "Add staff screen" },
              { src: imgSettings1, alt: "Settings screen" },
            ]}
          />
        </section>

        {/* Results */}
        <section>
          <p className="font-serif italic text-[28px] text-black mb-8">
            The results of my findings for FOLOWR
          </p>
          <img
            src={imgResult1}
            alt="Final FOLOWR product overview"
            className="w-full h-auto rounded-images shadow-lg"
          />
        </section>
      </main>
    </div>
  );
}

function StickyNote({ color, label, delay, children }) {
  return (
    <div
      className="sticky-note w-[150px] rounded-[4px] p-4 text-[13px] leading-[17px] text-primary shadow-md font-hand"
      style={{ backgroundColor: color, animationDelay: delay }}
    >
      <p className="font-medium mb-2 tracking-wide">{label}</p>
      <p>{children}</p>
    </div>
  );
}

function PersonaNote({ role, children }) {
  return (
    <div className="w-[170px] rounded-[4px] bg-white p-4 text-[14px] leading-[19px] text-primary shadow-md font-hand -rotate-1">
      <p className="text-[#b699fb] mb-2">{role}</p>
      <p>{children}</p>
    </div>
  );
}

function Gallery({ title, images }) {
  return (
    <div className="mb-14">
      <p className="text-accent-2 text-[18px] mb-5">{title}</p>
      <div className="flex flex-wrap gap-5">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-[220px] h-auto rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
