import { Menu, X } from "lucide-react";
import { useState, useEffect, memo, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/i18n";
import "flag-icons/css/flag-icons.min.css";

export const Navbar = memo((): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#footer", label: t.nav.contact },
  ];

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = (): void => {
      animationFrameId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (headerRef.current) {
          headerRef.current.style.transform = `translateY(${currentScrollY}px)`;
        }
        setScrolled(currentScrollY > 50);
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 py-3 md:py-4 z-50 transition-none ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          VB<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav — Center pills including Contact */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Theme toggle + Language toggle */}
        <div className="hidden md:flex items-center gap-2">
          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center justify-center"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <span className="material-symbols-outlined text-[18px] leading-none">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="w-9 h-9 rounded-full glass hover:bg-primary/10 transition-all duration-300 flex items-center justify-center overflow-hidden"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className={`fi ${lang === "en" ? "fi-us" : "fi-es"} text-lg`} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile toggles */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
              >
                <span className="material-symbols-outlined text-lg leading-none">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
              >
                <span className={`fi ${lang === "en" ? "fi-us" : "fi-es"} text-lg`} />
                {lang === "en" ? "Español" : "English"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});
Navbar.displayName = "Navbar";
