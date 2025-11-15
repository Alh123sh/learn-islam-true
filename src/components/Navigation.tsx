import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isArabic } = useLanguage();

  const courseLinks = [
    { to: "/salah", label: isArabic ? "🕌 تعلم الصلاة والطهارة" : "🕌 Learn Salah & Purification", icon: "🕌" },
    { to: "/quran", label: isArabic ? "📖 دراسات القرآن والحفظ" : "📖 Qur'an Studies & Memorization", icon: "📖" },
    { to: "/hadith", label: isArabic ? "📚 ركن الحديث والسيرة" : "📚 Hadith Corner & Seerah", icon: "📚" },
    { to: "/duas", label: isArabic ? "🌤️ الأدعية والأذكار" : "🌤️ Duas & Adhkar", icon: "🌤️" },
    { to: "/wudu", label: isArabic ? "💧 الوضوء" : "💧 Wudu Tutorial", icon: "💧" },
    { to: "/dashboard", label: isArabic ? "📊 لوحة التقدم" : "📊 Progress Dashboard", icon: "📊" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary transition-opacity hover:opacity-80">
            <BookOpen className="h-6 w-6" />
            <span className="hidden sm:inline">{isArabic ? "التعلم الإسلامي الأصيل" : "Authentic Islamic Learning"}</span>
            <span className="sm:hidden">{isArabic ? "الإسلام" : "Islam"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
            >
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary outline-none">
                {isArabic ? "الدورات" : "Courses"}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {courseLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link 
                      to={link.to} 
                      className="cursor-pointer text-sm py-3 hover:bg-accent/10"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
            >
              {isArabic ? "عن الموقع" : "About"}
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-md">
              {isArabic ? "استكشف الدورات" : "Explore Courses"}
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
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            
            <div className="border-t pt-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2 px-2">
                {isArabic ? "الدورات" : "COURSES"}
              </p>
              {courseLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:bg-accent/10 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {isArabic ? "عن الموقع" : "About"}
            </Link>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              {isArabic ? "استكشف الدورات" : "Explore Courses"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
