import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1200px] z-50">
      <div className="flex items-center justify-between rounded-full bg-[rgba(250,250,248,0.7)] backdrop-blur px-8 py-4">
        <p className="font-serif text-[28px] text-primary">Ebunoluwa</p>
        <nav className="hidden sm:flex items-center gap-10 text-[16px] font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `doodle-underline ${isActive ? "active text-accent-2" : "text-primary"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
