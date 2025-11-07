import { Link } from "react-router-dom";
import { BookOpen, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-primary">
              <BookOpen className="h-6 w-6" />
              <span>Islamic Learning Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Learn Islam through authentic Qur'an and Hadith. All content is verified from trusted sources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/salah" className="text-muted-foreground hover:text-primary transition-colors">
                  Learn Salah
                </Link>
              </li>
              <li>
                <Link to="/duas" className="text-muted-foreground hover:text-primary transition-colors">
                  Duas & Adhkar
                </Link>
              </li>
              <li>
                <Link to="/quran" className="text-muted-foreground hover:text-primary transition-colors">
                  Quran Memorization
                </Link>
              </li>
              <li>
                <Link to="/hadith" className="text-muted-foreground hover:text-primary transition-colors">
                  Hadith Corner
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-muted-foreground hover:text-primary transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a href="mailto:contact@islamiclearninghub.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                contact@islamiclearninghub.com
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Islamic Learning Hub. All content is based on authentic Qur'an and Sunnah.</p>
          <p className="mt-2">Verified from trusted sources: Sahih Bukhari, Sahih Muslim, Tirmidhi, and other authentic collections.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
