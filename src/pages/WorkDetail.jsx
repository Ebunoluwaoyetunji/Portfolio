import { Link } from "react-router-dom";
import Nav from "../components/Nav";

// TODO: once you share the Figma link for this detail page, I'll pull the
// real design context in and replace this placeholder with the actual layout.
export default function WorkDetail() {
  return (
    <div className="bg-background min-h-screen">
      <Nav />
      <main className="max-w-[900px] mx-auto px-6 pt-32 pb-24">
        <Link to="/" className="text-accent-2 text-[16px]">
          ← Back home
        </Link>
        <h1 className="font-serif text-[44px] text-black mt-6 mb-4">
          Making appointment management simpler for service providers
        </h1>
        <p className="text-[18px] text-black/70">
          Case study content goes here once the Figma design for this page is
          wired in.
        </p>
      </main>
    </div>
  );
}
