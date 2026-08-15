import Nav from "../components/Nav";
import detailHeroDashboard from "../assets/images/detail-hero-dashboard.png";

export default function WorkDetail() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#e9e9e9] overflow-hidden">
        {/* Soft blurred dot pattern background */}
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
    </div>
  );
}
