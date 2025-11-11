import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isArabic } = useLanguage();

  const navLinks = [
    { to: "/", label: isArabic ? "الرئيسية" : "Home" },
    { to: "/salah", label: isArabic ? "الصلاة" : "Salah" },
    { to: "/wudu", label: isArabic ? "الوضوء" : "Wudu" },
    { to: "/duas", label: isArabic ? "الأدعية" : "Duas" },
    { to: "/quran", label: isArabic ? "القرآن" : "Quran" },
    { to: "/hadith", label: isArabic ? "الحديث" : "Hadith" },
    { to: "/about", label: isArabic ? "عن الموقع" : "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
            <BookOpen className="h-6 w-6" />
            <span>{isArabic ? "مركز التعلم الإسلامي" : "Islamic Learning Hub"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              {isArabic ? "ابدأ التعلم" : "Start Learning"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              {isArabic ? "ابدأ التعلم" : "Start Learning"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
