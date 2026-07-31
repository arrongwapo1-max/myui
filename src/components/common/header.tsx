import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-black tracking-tight text-slate-950">
              Myportfolio
            </NavLink>
          </div>

          <nav className="flex items-center gap-3 sm:gap-6">
            <NavLink to="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
              Home
            </NavLink>
            <NavLink to="/about" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
              About
            </NavLink>
            <NavLink to="/contact">
              <Button className="px-4 py-2">Contact</Button>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}