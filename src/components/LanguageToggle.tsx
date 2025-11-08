import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5" />
      <span className="ml-1 text-xs font-semibold">
        {language === "en" ? "AR" : "EN"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
