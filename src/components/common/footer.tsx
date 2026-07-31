import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-black tracking-tight text-slate-950">Myportfolio</p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                Building clean, responsive, and user-friendly interfaces with a focus on
                thoughtful design and smooth digital experiences.
              </p>
            </div>

            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Open to collaboration
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Quick Links
              </p>
              <nav className="space-y-2">
                <NavLink to="/" className="block text-sm text-slate-600 transition-colors hover:text-slate-950">
                  Home
                </NavLink>
                <NavLink to="/about" className="block text-sm text-slate-600 transition-colors hover:text-slate-950">
                  About
                </NavLink>
                <NavLink to="/contact" className="block text-sm text-slate-600 transition-colors hover:text-slate-950">
                  Contact
                </NavLink>
              </nav>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>
              <p className="text-sm text-slate-600">babatuanarron47@email.com</p>
              <p className="mt-1 text-sm text-slate-600">Philippines</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">Made with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
